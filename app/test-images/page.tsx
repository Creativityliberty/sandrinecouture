import Image from "next/image";

export default function TestImages() {
  return (
    <div className="p-10">
      <h1 className="text-2xl mb-5">Test Image Loading</h1>
      <div className="relative w-64 h-64 border">
        <Image 
          src="/images/realisations/sac-personnalise-brode-octavia.webp" 
          alt="Test" 
          fill 
          className="object-cover"
        />
      </div>
      <p className="mt-4">If you see the image above, local serving works.</p>
    </div>
  );
}
