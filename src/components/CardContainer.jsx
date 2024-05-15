import React from "react";
import {Card, CardBody, CardFooter, Image} from "@nextui-org/react";
import Ncard from "./Ncard";
import CardSkeleton from "./CardSkeleton";

export default function CardContainer({movies}) {

  //gap-2 grid grid-cols-2 sm:grid-cols-5 
 //
  return (
      <div className="flex overflow-x-scroll mt-8" style={{ overflowX: 'auto', scrollbarWidth: 'none', WebkitOverflowScrolling: 'touch' }}>
      <div className="flex gap-2">
          {
              movies.map((movie,index)=>(<Ncard key={index} data={movie}/>))
          }
      </div>
      </div>
  );
}
