import {
  Card,
  CardHeader,
  CardBody,
  Button,
  CardFooter,
  Divider,
} from "@nextui-org/react";
import Events from "@/components/events";
import { fetchEvents } from "@/app/lib/data";

export default async function Event() {
  const latestEvents = await fetchEvents(8, 1, "");

  return (
    <div className="h-screen">
      <div className="h-3/4">
        <div className=" mx-auto my-4 h-full w-5/6 bg-promoter-pic text-slate-100 rounded-lg">
          <div className="flex h-full">
            <div className="flex flex-col w-1/2 justify-around mx-10 my-5">
              <h1 className="text-6xl font-bold">
                Dream world wide in jakatra
              </h1>
              <h2 className="text-2xl">IIIT Sonepat</h2>
              <p>
                DesignHub organized a 3D Modeling Workshop using Blender on 16th
                February at 5 PM. The workshop taught participants the magic of
                creating stunning 3D models and animations using Blender. It was
                suitable for both beginners and experienced users. The event was
                followed by a blender-render competition, which added to the
                excitement.
              </p>
            </div>
            <Card
              radius="sm"
              className="min-w-[350px] max-w-[450px] flex items-center m-auto"
            >
              <CardHeader>
                <p className="text-lg font-bold">Date & Time</p>
              </CardHeader>
              <CardBody>
                <p>Saturday, March 18 2023, 9:30PM </p>
                <p>Add to calendar</p>
                <Button className="m-3" radius="sm">
                  Book now
                </Button>
                <Button className="m-3" radius="sm">
                  Program promoter
                </Button>
              </CardBody>
              <CardFooter className="flex justify-center">
                <p>No Refunds</p>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
      <div className="flex my-10 mx-auto w-4/5">
        <div className="w-1/2 flex flex-col justify-between m-10">
          <div>
            <p className="text-lg my-5 font-bold">Description</p>
            <p>
              DesignHub organized a 3D Modeling Workshop using Blender on 16th
              February at 5 PM. The workshop taught participants the magic of
              creating stunning 3D models and animations using Blender. It was
              suitable for both beginners and experienced users. The event was
              followed by a blender-render competition, which added to the
              excitement. DesignHub organized a 3D Modeling Workshop using
              Blender on 16th February at 5 PM. The workshop taught participants
              the magic of creating stunning 3D models and animations using
              Blender. It was suitable for both beginners and experienced users.
              The event was followed by a blender-render competition, which
              added to the excitement.
            </p>
          </div>
          <div>
            <p className="text-lg my-5 font-bold">Hours</p>
            <p>Weekdays hour: 7PM - 10PM</p>
            <p> Sunday hour: 7PM - 10PM</p>
          </div>
          <div>
            <p className="text-lg my-5 font-bold">Organizer Contact</p>
            <p>
              Please go to www.sneakypeeks.com and refer the FAQ section for
              more detail
            </p>
          </div>
        </div>
        <div className="w-1/2 flex flex-col justify-between m-10">
          <div>
            <p className="text-lg my-5 font-bold">Event Location</p>
            <iframe
              className="gmap_iframe w-full h-full"
              src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=cowenhamilton&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            ></iframe>
          </div>
          <div>
            <p className="text-lg font-bold">Tags</p>
            <p></p>
          </div>
          <div>
            <p className="text-lg font-bold">Share with Friends</p>
            <p></p>
          </div>
        </div>
      </div>

      <div>
        <div className="w-11/12 mx-auto my-10">
          <p className="text-xl font-bold">Other Events you may like</p>
        </div>
        <Events latestEvents={latestEvents} />
      </div>
    </div>
  );
}
