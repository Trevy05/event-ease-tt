import React from "react";
import Link from "next/link";
import {
  Card,
  CardBody,
  CardHeader,
  Divider,
  Image,
  Button,
  Input,
} from "@nextui-org/react";

export default function Page() {
  return (
    <div className="h-screen dark">
      <div className="h-4/6 min-w-full flex flex-col justify-end items-center"></div>
      <div className="w-full flex justify-center m-5">
        <Card className="w-5/6 p-2">
          <h1 className="m-5 text-xl">Search for an event</h1>
          <Divider orientation="horizontal" />
          <CardBody className="flex flex-row justify-around items-end">
            <Input
              isReadOnly
              type="event"
              label="Search Event"
              variant="bordered"
              defaultValue=""
              className="max-w-xs px-3"
              labelPlacement="outside"
              size={"lg"}
            />
            <Divider orientation="vertical" />
            <Input
              isReadOnly
              type="place"
              label="Place"
              variant="bordered"
              defaultValue=""
              className="max-w-xs px-3"
              labelPlacement="outside"
              size={"lg"}
            />
            <Divider orientation="vertical" />
            <Button size="lg">Search</Button>
          </CardBody>
        </Card>
      </div>
      <div className="p-10 m-10 grid grid-cols-4 grid-rows-2">
        <Card className="py-4 m-5">
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            <p className="text-tiny uppercase font-bold">Daily Mix</p>
            <small className="text-default-500">12 Tracks</small>
            <h4 className="font-bold text-large">Frontend Radio</h4>
          </CardHeader>
          <CardBody className="overflow-visible py-2">
            <Image
              alt="Card background"
              className="object-cover rounded-xl"
              src="/images/hero-card-complete.jpeg"
              width={270}
            />
          </CardBody>
        </Card>
        <Card className="py-4 m-5">
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            <p className="text-tiny uppercase font-bold">Daily Mix</p>
            <small className="text-default-500">12 Tracks</small>
            <h4 className="font-bold text-large">Frontend Radio</h4>
          </CardHeader>
          <CardBody className="overflow-visible py-2">
            <Image
              alt="Card background"
              className="object-cover rounded-xl"
              src="/images/hero-card-complete.jpeg"
              width={270}
            />
          </CardBody>
        </Card>
        <Card className="py-4 m-5">
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            <p className="text-tiny uppercase font-bold">Daily Mix</p>
            <small className="text-default-500">12 Tracks</small>
            <h4 className="font-bold text-large">Frontend Radio</h4>
          </CardHeader>
          <CardBody className="overflow-visible py-2">
            <Image
              alt="Card background"
              className="object-cover rounded-xl"
              src="/images/hero-card-complete.jpeg"
              width={270}
            />
          </CardBody>
        </Card>
        <Card className="py-4 m-5">
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            <p className="text-tiny uppercase font-bold">Daily Mix</p>
            <small className="text-default-500">12 Tracks</small>
            <h4 className="font-bold text-large">Frontend Radio</h4>
          </CardHeader>
          <CardBody className="overflow-visible py-2">
            <Image
              alt="Card background"
              className="object-cover rounded-xl"
              src="/images/hero-card-complete.jpeg"
              width={270}
            />
          </CardBody>
        </Card>
        <Card className="py-4 m-5">
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            <p className="text-tiny uppercase font-bold">Daily Mix</p>
            <small className="text-default-500">12 Tracks</small>
            <h4 className="font-bold text-large">Frontend Radio</h4>
          </CardHeader>
          <CardBody className="overflow-visible py-2">
            <Image
              alt="Card background"
              className="object-cover rounded-xl"
              src="/images/hero-card-complete.jpeg"
              width={270}
            />
          </CardBody>
        </Card>
        <Card className="py-4 m-5">
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            <p className="text-tiny uppercase font-bold">Daily Mix</p>
            <small className="text-default-500">12 Tracks</small>
            <h4 className="font-bold text-large">Frontend Radio</h4>
          </CardHeader>
          <CardBody className="overflow-visible py-2">
            <Image
              alt="Card background"
              className="object-cover rounded-xl"
              src="/images/hero-card-complete.jpeg"
              width={270}
            />
          </CardBody>
        </Card>
        <Card className="py-4 m-5">
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            <p className="text-tiny uppercase font-bold">Daily Mix</p>
            <small className="text-default-500">12 Tracks</small>
            <h4 className="font-bold text-large">Frontend Radio</h4>
          </CardHeader>
          <CardBody className="overflow-visible py-2">
            <Image
              alt="Card background"
              className="object-cover rounded-xl"
              src="/images/hero-card-complete.jpeg"
              width={270}
            />
          </CardBody>
        </Card>
        <Card className="py-4 m-5">
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            <p className="text-tiny uppercase font-bold">Daily Mix</p>
            <small className="text-default-500">12 Tracks</small>
            <h4 className="font-bold text-large">Frontend Radio</h4>
          </CardHeader>
          <CardBody className="overflow-visible py-2">
            <Image
              alt="Card background"
              className="object-cover rounded-xl"
              src="/images/hero-card-complete.jpeg"
              width={270}
            />
          </CardBody>
        </Card>
      </div>
      <div className="h-1/4 bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 flex justify-center items-center">
        <Image
          width={300}
          alt="NextUI hero Image"
          src="https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg"
        />
        <div className="p-10 flex flex-col justify-around h-full">
          <p>Make your own Event</p>
          <Link href="/create-event">
            <Button>Create Event</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
