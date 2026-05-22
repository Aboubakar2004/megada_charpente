import Link from "next/link";

function Header() {
  return (
    <div className="flex justify-between  items-center align-middle px-20 pt-7 ">
      <div>
        <h1>Logo de l&apos;entrprise</h1>
      </div>
      <div className="flex gap-10 items-center">
        <div>
          <Link href="/">Services</Link>
        </div>
        <div>
          <Link href="/">Réalisations</Link>
        </div>
        <div>
          <Link href="/">Expertise</Link>
        </div>
        <div className="bg-transparent rounded-xl px-7 p-1 border border-black">
          <Link href="/">Contact</Link>
        </div>
        <div className="bg-[#5D3A1A] text-white  rounded-xl px-7 p-1">
          <Link href="/">Devis gratuit</Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
