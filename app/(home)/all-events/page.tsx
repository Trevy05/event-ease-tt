import { Image, Card, CardBody, Input, Pagination } from "@nextui-org/react";
import Events from "@/components/events";
import {
  fetchEvents,
  fetchAllEvents,
  fetchAllSearchedEvents,
} from "@/app/lib/data";
import Search from "@/components/search";
import Pagin from "@/components/pagin";

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;

  const latestEvents = await fetchEvents(16, currentPage, query);

  const totalEvents = await fetchAllEvents();
  const allSearchedEvents = await fetchAllSearchedEvents(query);

  const totalPages = Math.ceil(totalEvents.length / 16);
  const totalSearchedPages = Math.ceil(allSearchedEvents.length / 16);

  return (
    <div className="h-100 w-screen">
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
      <div className="w-full flex justify-between">
        <p className="mx-14 font-bold text-2xl">
          <span className="text-yellow-500">Events</span> Around You
        </p>
        <div className="mx-14 w-1/4 dark">
          <Search placeholder="Type to Search" />
        </div>
      </div>

      <div className="mx-auto w-auto">
        <Events latestEvents={latestEvents} />
      </div>
      <div className="w-full p-5">
        <div className="max-w-min mx-auto">
          <Pagin totalPages={query ? totalSearchedPages : totalPages} />
        </div>
      </div>
    </div>
  );
}
