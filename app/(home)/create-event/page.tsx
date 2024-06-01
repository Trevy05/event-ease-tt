import { Input, Textarea, Button } from "@nextui-org/react";
import { createEvent } from "@/app/actions";

export default function Page() {
  return (
    <div className="h-100 w-screen bg-slate-100 flex justify-center dark">
      <div className="w-1/2 sm:w-full md:w-2/3">
        <h1 className="text-center my-5 subpixel-antialiased text-4xl font-bold">
          Create Event
        </h1>
        <form action={createEvent} className="text-slate-100">
          <div className="p-10 flex flex-col justify-around space-y-14">
            <Input
              name="eventName"
              type="name"
              label="Event Name"
              placeholder="Enter your email"
            />
            <Input
              name="eventVenue"
              type="address"
              label="Event Venue"
              placeholder="Enter Address"
            />
            <div className="flex space-x-5">
              <Input
                name="startTime"
                type="time"
                label="Start Time"
                placeholder="Enter your Start Time"
              />
              <Input
                name="endTime"
                type="time"
                label="End Time"
                placeholder="Enter your End Time"
              />
            </div>
            <div className="flex space-x-5">
              <Input
                name="startDate"
                type="date"
                label="Start Date"
                placeholder="Enter your email"
              />
              <Input
                name="endDate"
                type="date"
                label="End Date"
                placeholder="Enter your email"
              />
            </div>
            <Textarea
              name="eventImage"
              label="Event Image"
              placeholder="Upload Image"
              className="w-full"
            />
            <Textarea
              name="eventDescription"
              label="Event Description"
              placeholder="Enter your description"
              className="w-full"
            />
            <Button
              type="submit"
              className="bg-yellow-500 text-gray-900 font-bold"
            >
              Create Event
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
