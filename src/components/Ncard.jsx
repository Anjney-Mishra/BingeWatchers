import React from "react";
import {Card, CardHeader, CardBody, Image} from "@nextui-org/react";
import { IMG_CDN } from "../../constants";
import { Link } from "react-router-dom";

export default function Ncard({data}) {

    const {
        id,
        title,
        release_date,
        poster_path
        } = data
  return (
    <Card className="py-4 w-64" as={Link} to={"/movie/"+id} target="_blank">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-tiny uppercase font-bold">test</p>
        <h4 className={title.length<=27?"font-bold text-large":"font-bold text-sm"}>{title}</h4>
        <small className="text-default-500">{
          release_date
}</small>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src={IMG_CDN+poster_path}
          width={240}
        />
      </CardBody>
    </Card>
  );
}
