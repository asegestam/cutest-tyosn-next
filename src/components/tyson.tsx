import { Tyson } from "@prisma/client";
import Image from "next/image";

const TysonCard: React.FC<{
  tyson: Tyson;
  vote: () => void;
  disabled: boolean;
}> = (props) => {
  return (
    <div className="flex flex-col justify-center select-none">
      <h1 className="text-center text-2xl mb-2">{props.tyson.name}</h1>
      <Image
        width={375}
        height={400}
        quality={75}
        objectFit="cover"
        className="rounded-lg shadow-lg shadow-black animate-fade-in duration-300"
        src={props.tyson.imgPath}
      />
      <button
        onClick={() => props.vote()}
        disabled={props.disabled}
        className="shadow-lg  px-4 py-2 rounded mt-10 bg-green-600 hover:bg-green-500 hover:scale-105 disabled:bg-slate-500 disabled:cursor-wait"
      >
        <div className="flex justify-center">
          <span className="ml-2">Cuter</span>
        </div>
      </button>
    </div>
  );
};

export default TysonCard;
