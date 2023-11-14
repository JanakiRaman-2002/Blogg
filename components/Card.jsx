import React from "react";
import '../app/globals.css'
import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image} from "@nextui-org/react";

export default function App({id, title, content}) {
  return (
    <Card className="max-w-[400px] p-8 rounded-lg bg-stone-700 hover:bg-orange-300 hover:duration-500 hover:text-black cursor-pointer">
      <CardHeader className="flex gap-3">
        <Image
          alt="nextui logo"
          height={40}
          radius="sm"
          src="/assets/crystals.png"
          width={40}
          mb-4
        />
        <div className="flex flex-col">
          <p className="text-3xl text-center mb-2 font-bold text-orange-700">{title.split(' ').slice(0,3).join(' ')}</p>
        </div>
      </CardHeader>
      <Divider/>
      <CardBody>
        <p className="my-2 font-semibold text-xl">{content.split(' ').slice(0,3).join(' ')}...</p>
      </CardBody>
      <Divider/>
      <CardFooter>
        <Link
          showAnchorIcon
          href = {`/Blogview/${id}`}
          className="text-orange-700 my-2 mx-2"
        >
          See this cringe
        </Link>
      </CardFooter>
    </Card>
  );
}
