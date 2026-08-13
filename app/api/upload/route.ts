import { put } from '@vercel/blob';
import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function POST(request: Request): Promise<NextResponse> {
  const { searchParams } = new URL(request.url);
  const filename = searchParams.get('filename');

  if (!filename) {
    return NextResponse.json({ error: 'Filename query parameter is required' }, { status: 400 });
  }

  try {
    const arrayBuffer = await request.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    // Vérifier si le token Vercel Blob est configuré
    const hasToken = !!process.env.BLOB_READ_WRITE_TOKEN;

    if (hasToken) {
      // Production / Vercel : Upload réel sur le stockage Cloud Vercel Blob
      const blob = await put(filename, buffer, {
        access: 'public',
      });
      return NextResponse.json(blob);
    } else {
      // Local de développement / Fallback : Stockage dans le dossier public/uploads du projet
      console.log("BLOB_READ_WRITE_TOKEN non configuré. Utilisation du stockage local public/uploads/.");
      
      const uploadDir = path.join(process.cwd(), 'public', 'uploads');
      
      // Créer le dossier s'il n'existe pas
      if (!fs.existsSync(uploadDir)) {
        fs.mkdirSync(uploadDir, { recursive: true });
      }

      // Sécuriser le nom de fichier
      const safeFilename = path.basename(filename);
      const filePath = path.join(uploadDir, safeFilename);
      
      // Écriture du fichier sur le disque local
      fs.writeFileSync(filePath, buffer);
      
      // Construction de l'URL d'accès public
      const localUrl = `/uploads/${encodeURIComponent(safeFilename)}`;
      
      return NextResponse.json({
        url: localUrl,
        downloadUrl: localUrl,
        pathname: safeFilename,
        contentType: request.headers.get('content-type') || 'image/png'
      });
    }
  } catch (error: any) {
    console.error("Erreur de téléversement :", error);
    return NextResponse.json({ error: error.message || 'Upload failed' }, { status: 500 });
  }
}
