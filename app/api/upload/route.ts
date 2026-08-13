import { put } from '@vercel/blob';
import { NextResponse } from 'next/server';

export async function POST(request: Request): Promise<NextResponse> {
  const { searchParams } = new URL(request.url);
  const filename = searchParams.get('filename');

  if (!filename) {
    return NextResponse.json({ error: 'Filename query parameter is required' }, { status: 400 });
  }

  try {
    if (!request.body) {
      return NextResponse.json({ error: 'Request body is empty' }, { status: 400 });
    }

    // Upload direct vers Vercel Blob avec accès public
    // Utile pour les réalisations, produits de la boutique, etc.
    const blob = await put(filename, request.body, {
      access: 'public',
    });

    return NextResponse.json(blob);
  } catch (error: any) {
    return NextResponse.json({ error: error.message || 'Upload failed' }, { status: 500 });
  }
}
