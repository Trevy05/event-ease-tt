import {
  Card,
  CardHeader,
  CardBody,
  Button,
  CardFooter,
  Divider,
} from "@nextui-org/react";

export default function Events() {
  return (
    <div className="h-screen">
      <div className="h-3/4">
        <div className=" mx-auto my-4 h-full w-5/6 bg-green-500 rounded-lg">
          <div className="flex h-full">
            <div className="flex flex-col w-1/2 justify-around mx-10 my-5">
              <h1>Dream world wide in jakatra</h1>
              <h2>IIIT Sonepat</h2>
              <p>
                DesignHub organized a 3D Modeling Workshop using Blender on 16th
                February at 5 PM. The workshop taught participants the magic of
                creating stunning 3D models and animations using Blender. It was
                suitable for both beginners and experienced users. The event was
                followed by a blender-render competition, which added to the
                excitement.
              </p>
              <p>View map</p>
            </div>
            <Card
              radius="sm"
              className="min-w-[350px] max-w-[450px] flex items-center m-auto"
            >
              <CardHeader>
                <p>Date & Time</p>
              </CardHeader>
              <CardBody>
                <p>Saturdat, March 18 2023, 9.30PM </p>
                <p>Add to calendar</p>
                <Button className="m-3">Book now</Button>
                <Button className="m-3">Program promoter</Button>
              </CardBody>
              <CardFooter className="flex justify-center">
                <p>No Refunds</p>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
      <div className="flex my-10 mx-auto w-4/5 h-3/4">
        <div className="w-1/2 flex flex-col justify-between m-10">
          <div>
            <p>Description</p>
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
            <p>Hours</p>
            <p>Weekdays hour: 7PM - 10PM</p>
            <p> Sunday hour: 7PM - 10PM</p>
          </div>
          <div>
            <p>Organizer Contact</p>
            <p>
              Please go to www.sneakypeeks.com and refer the FAQ section for
              more detail
            </p>
          </div>
        </div>
        <div className="w-1/2 flex flex-col justify-between m-10">
          <div>
            <p>Event Location</p>
            <p></p>
          </div>
          <div>
            <p>Tags</p>
            <p></p>
          </div>
          <div>
            <p>Share with Friends</p>
            <p></p>
          </div>
        </div>
      </div>
    </div>
  );
}
