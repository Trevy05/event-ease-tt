import { Button, Card, CardBody, CardHeader, Image } from "@nextui-org/react";

export default async function Events({ latestEvents }) {
  const events = Object.values(latestEvents);
  console.log(events);

  const formatDate = (dateString: string) => {
    const dateObject = new Date(dateString);

    const formattedDate = `${dateObject.toLocaleString("en-US", {
      month: "short",
    })} ${dateObject.getDate()}, ${dateObject.getFullYear()}`;

    return formattedDate;
  };

  const formatTime = (timeString: string) => {
    const [hours, minutes, seconds] = timeString.split(":");
    let formattedTime;

    if (parseInt(hours) >= 12) {
      formattedTime = `${parseInt(hours) % 12}:${minutes} PM`;
    } else {
      formattedTime = `${hours}:${minutes} AM`;
    }

    return formattedTime;
  };

  return (
    <div className="my-10 w-screen mx-auto">
      <div className="flex flex-wrap justify-start mx-auto my-5 w-5/6">
        {events.map((event) => (
          <Card key={event.id} className="py-4 m-5 max-w-xs grow">
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
              <p className="text-tiny uppercase font-bold">Event Name</p>
              <small className="text-default-500">
                {formatTime(event.start_time.toString())}
              </small>
              <small className="text-default-500">
                {formatDate(event.start_date.toString())}
              </small>
              <h4 className="font-bold text-large">
                {formatDate(event.end_date.toString())}
              </h4>
            </CardHeader>
            <CardBody className="overflow-visible py-2">
              <Image
                alt="Event Image"
                className="object-fill rounded-xl"
                src={event.event_image}
                width={270}
              />
            </CardBody>
          </Card>
        ))}
      </div>
      <div className="flex justify-center">
        <Button>Load More...</Button>
      </div>
    </div>
  );
}
