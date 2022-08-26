import { Button } from "@chakra-ui/react";
import { Tyson } from "@prisma/client";
import clsx from "clsx";
import Image from "next/image";

const TysonCard: React.FC<{
  tyson: Tyson;
  vote: () => void;
  disabled: boolean;
}> = (props) => {
  return (
    <div className={clsx("flex flex-col justify-center select-none", {})}>
      <h1 className="text-center text-2xl mb-2">{props.tyson.name}</h1>
      <Image
        width={375}
        height={400}
        quality={75}
        objectFit="cover"
        className="rounded-lg shadow-lg shadow-black animate-fade-in duration-300"
        src={props.tyson.imgPath}
      />
      <Button
        colorScheme="green"
        onClick={() => props.vote()}
        className="shadow-lg mt-10 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300 disabled:cursor-wait"
        disabled={props.disabled}
        isLoading={props.disabled}
      >
        Cuter
      </Button>
    </div>
  );
};

export default TysonCard;
