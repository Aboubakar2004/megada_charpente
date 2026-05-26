import { MdOutlineHouseSiding } from "react-icons/md";
import { MdOutlineRoofing } from "react-icons/md";
import { RiContractFill } from "react-icons/ri";
import { IoIosConstruct } from "react-icons/io";
import { IoLeaf } from "react-icons/io5";
import { RiToolsFill } from "react-icons/ri";

function Service() {
  return (
    <div className="px-20 py-20  bg-[#FDFBF7]">
      <div className="flex justify-between align-middle items-end mb-20  ">
        <div>
          <h2 className="text-2xl font-medium">NOTRE SAVOIR-FAIRE</h2>
          <h1 className="text-5xl font-normal">Des solutions sur-mesure</h1>
        </div>
        <div>
          <h1 className="bg-transparent border-2 border-[#D2B48C]  text-black  rounded-xl px-7 p-3">
            Tous nos services
          </h1>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-15 ">
        <div className="flex gap-5">
          <MdOutlineHouseSiding
            size={50}
            className="p-2 rounded-2xl bg-[#F4EFE6] text-[#5D3A1A]"
          />
          <div>
            <h1 className="text-xl font-medium">Charpente traditionnelle</h1>
            <p className="text-[#6B5E54]">
              Conception sur mesure et pour villa et maison de caractère
            </p>
          </div>
        </div>
        <div className="flex gap-5">
          <RiToolsFill
            size={50}
            className="p-2 rounded-2xl bg-[#F4EFE6] text-[#5D3A1A]"
          />
          <div>
            <h1 className="text-xl font-medium">Rénovation de comble</h1>
            <p className="text-[#6B5E54]">
              Optimisation de l&apos;espace et isolation thermique performante
            </p>
          </div>
        </div>
        <div className="flex gap-5">
          <MdOutlineRoofing
            size={50}
            className="p-2 rounded-2xl bg-[#F4EFE6] text-[#5D3A1A]"
          />
          <div>
            <h1 className="text-xl font-medium">Toiture & couverture</h1>
            <p className="text-[#6B5E54]">
              Protection durable et esthétique contre les intempéries
            </p>
          </div>
        </div>
        <div className="flex gap-5">
          <IoIosConstruct
            size={50}
            className="p-2 rounded-2xl bg-[#F4EFE6] text-[#5D3A1A]"
          />
          <div>
            <h1 className="text-xl font-medium">Entretiens & réparation</h1>
            <p className="text-[#6B5E54]">
              Diagnostic et intervention rapide sur votre structure
            </p>
          </div>
        </div>
        <div className="flex gap-5">
          <RiContractFill
            size={50}
            className="p-2 rounded-2xl bg-[#F4EFE6] text-[#5D3A1A]"
          />
          <div>
            <h1 className="text-xl font-medium">Restauration du patrimoine</h1>
            <p className="text-[#6B5E54]">
              Conservation de techniques anciennes et bois d&apos;époque
            </p>
          </div>
        </div>
        <div className="flex gap-5">
          <IoLeaf
            size={50}
            className="p-2 rounded-2xl bg-[#F4EFE6] text-[#5D3A1A]"
          />
          <div>
            <h1 className="text-xl font-medium">Matériaux Durables</h1>
            <p className="text-[#6B5E54]">
              Utilisation exclusive de bois certifiés PEFC et FSC
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;
