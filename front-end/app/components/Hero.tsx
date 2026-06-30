import Image from "next/image";
import Link from "next/link";

function Hero() {
  return (
    <div className="flex h-222">
      <div className="flex gap-8 flex-col w-1/2 justify-center bg-[#F4EFE6] p-20 ">
        <h1 className="bg-[#f2dec9] p-3 rounded-lg w-fit">
          Compagnons du devoir
        </h1>
        <h1 className="text-7xl font-medium">
          L&apos;Excellence du <br /> Bois, <br /> La Solidité du <br /> Temps
        </h1>
        <p className="text-[#6B5E54]">
          Maîtres charpentiers en Île-de-France. Nous <br /> transformons votre
          habitat avec la noblesse des <br /> matériaux et la précision du geste
          artisanal.
        </p>
        <div className="flex gap-10">
          <button className="bg-[#5D3A1A] text-white  rounded-xl px-7 p-3">
            <Link href="/">Nos Services</Link>
          </button>
          <button className="bg-transparent border-2 border-[#D2B48C]  text-black  rounded-xl px-7 p-3">
            <Link href="/">Voir nos projets</Link>
          </button>
        </div>
      </div>
      <div className="relative w-1/2 ">
        <Image
          src="/charpenteImage.jpg"
          alt="Image Charpente de la hero section"
          fill
          className="object-cover"
          sizes="50vw"
          loading="eager"
          quality={90}
        />
      </div>
    </div>
  );
}

export default Hero;
