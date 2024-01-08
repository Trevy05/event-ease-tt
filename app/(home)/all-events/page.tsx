import { Image, Card, CardBody } from "@nextui-org/react";

export default function Page() {
  return (
    <div className="h-screen w-screen">
      <div className="flex justify-center m-20">
        <div className="w-[584.54px]">
          <div className="leading-extra-loose">
            <span className="text-neutral-900 text-7xl font-bold ">Event</span>
            <span className="text-violet-600 text-7xl font-bold ">Hive</span>
            <span className="text-neutral-900 text-7xl font-bold">
              -ing the Best.Day. Ever.
            </span>
          </div>
          <div className="flex space-x-10 my-10">
            <Card className="w-1/3 h-[125px]">
              <CardBody className="flex flex-col justify-around">
                <p className="text-4xl ">100+</p>
                <p>Total Events Hosted</p>
              </CardBody>
            </Card>
            <Card className="w-1/3 h-[125px]">
              <CardBody className="flex flex-col justify-around">
                <p className="text-4xl">2k+</p>
                <p>Total Events Live</p>
              </CardBody>
            </Card>
          </div>
        </div>

        <div className="w-1/2">
          <Image
            alt="splash"
            height={400}
            src="https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        </div>
      </div>
    </div>
  );
}
