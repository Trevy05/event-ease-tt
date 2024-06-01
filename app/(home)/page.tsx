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
import Events from "@/components/events";
import { fetchEvents } from "../lib/data";

export default async function Page() {
  const latestEvents = await fetchEvents(8);

  return (
    <div>
      <div className="h-4/6 h-screen w-screen relative bg-slate-100 p-5">
        <div className="h-5/6 w-11/12 bg-promoter-pic mx-auto rounded-2xl p-20">
          <p className="text-6xl antialiased font-semibold text-white uppercase text-center w-1/2 mx-auto">
            Made for those who do
          </p>
        </div>
        <Card className="w-5/6 p-2 absolute bottom-20 inset-x-0 mx-auto dark">
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

      <div className="flex flex-col justify-center bg-slate-100 w-full">
        <p className="mx-14 font-bold text-2xl">
          Upcoming <span className="text-yellow-500">Events</span>
        </p>
        <Events latestEvents={latestEvents} />
      </div>

      <div className="h-2/5 w-screen py-5 bg-zinc-900 text-slate-100 flex justify-center items-center space-x-2">
        <div className="w-1/2 flex justify-center">
          <Image
            width={400}
            alt="NextUI hero Image"
            src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        </div>

        <div className="p-10 flex flex-col justify-aroundh-full w-1/2">
          <p className="text-3xl">Make your own Event</p>
          <p>Lorem isum</p>
          <div className="w-1/2">
            <Link href="/create-event">
              <Button fullWidth size="lg" radius="sm" className="bg-yellow-400">
                Create Event
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full text-center p-10 bg-slate-100">
        <p className="text-4xl p-3">Join these brands</p>
        <p className="text-lg w-5/12 mx-auto">
          We have had the pleasure of working with industry-defining brands.
          These are just some of them.
        </p>
        <Image src="Group 34.png" alt="brands" width={400} height={400} />
      </div>
    </div>
  );
}
