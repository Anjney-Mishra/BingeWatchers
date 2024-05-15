import React from "react";
import {Card, CardBody, CardFooter, Image} from "@nextui-org/react";
import Ncard from "./Ncard";
import CardSkeleton from "./CardSkeleton";

export default function CardContainerVer({movies}) {

  //
 //
  return (
    <div className="gap-2 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-5">
        {
          movies.map((movie,index)=>(<Ncard key={index} data={movie}/>))
        }
    </div>
  );
}
