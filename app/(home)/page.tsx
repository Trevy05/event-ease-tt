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
    <div className="dark">
      <div className="h-4/6 h-screen w-screen relative bg-red-800 mt-5 ">
        <div className="h-full w-11/12 bg-yellow-700 mx-auto rounded-2xl"></div>
        <Card className="w-5/6 p-2 absolute -bottom-10 inset-x-0 mx-auto">
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
      <div className="flex justify-center m-20 bg-blue-800">
        <Events latestEvents={latestEvents} />
      </div>

      <div className="h-2/5 w-screen py-5 bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 flex justify-center items-center space-x-2">
        <div className="w-1/2 flex justify-center">
          <Image
            width={400}
            alt="NextUI hero Image"
            src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        </div>

        <div className="p-10 flex flex-col justify-around h-full w-1/2">
          <p>Make your own Event</p>
          <div className="w-1/2">
            <Link href="/create-event">
              <Button fullWidth size="lg" radius="none">
                Create Event
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
