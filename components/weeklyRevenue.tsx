"use server";

import { BarChart, DonutChart } from "@tremor/react";
import { Card, CardBody, CardHeader } from "@nextui-org/react";

const chartdata = [
  {
    name: "Amphibians",
    "Number of threatened species": 2488,
  },
  {
    name: "Birds",
    "Number of threatened species": 1445,
  },
  {
    name: "Crustaceans",
    "Number of threatened species": 743,
  },
  {
    name: "Ferns",
    "Number of threatened species": 281,
  },
  {
    name: "Arachnids",
    "Number of threatened species": 251,
  },
  {
    name: "Corals",
    "Number of threatened species": 232,
  },
  {
    name: "Algae",
    "Number of threatened species": 98,
  },
];

const cities = [
  {
    name: "New York",
    sales: 9800,
  },
  {
    name: "London",
    sales: 4567,
  },
  {
    name: "Hong Kong",
    sales: 3908,
  },
  {
    name: "San Francisco",
    sales: 2400,
  },
  {
    name: "Singapore",
    sales: 1908,
  },
  {
    name: "Zurich",
    sales: 1398,
  },
];

const WeeklyRevenue = () => (
  <div className="flex flex-col bg-black-500 w-9/10 justify-center">
    <Card className="w-7/10 m-5">
      <CardHeader>
        Number of species threatened with extinction (2021)
      </CardHeader>
      <CardBody>
        <BarChart
          className="mt-6"
          data={chartdata}
          index="name"
          categories={["Number of threatened species"]}
          colors={["blue"]}
          yAxisWidth={48}
        />
      </CardBody>
    </Card>
    <div className="flex justify-between m-5 space-x-5">
      <div className="">
        <Card className="w-4/5 p-5 w-full">
          <CardHeader>
            Number of species threatened with extinction (2021)
          </CardHeader>
          <CardBody>
            <DonutChart
              className="mt-6"
              data={cities}
              category="sales"
              index="name"
              colors={["slate", "violet", "indigo", "rose", "cyan", "amber"]}
            />
          </CardBody>
        </Card>
      </div>
      <div className="">
        <Card className="w-4/5 p-5 w-full">
          <CardHeader>
            Number of species threatened with extinction (2021)
          </CardHeader>
          <CardBody>
            <DonutChart
              className="mt-6"
              data={cities}
              category="sales"
              index="name"
              colors={["slate", "violet", "indigo", "rose", "cyan", "amber"]}
            />
          </CardBody>
        </Card>
      </div>
      <div className="">
        <Card className="w-4/5 p-5 w-full">
          <CardHeader>
            Number of species threatened with extinction (2021)
          </CardHeader>
          <CardBody>
            <DonutChart
              className="mt-6"
              data={cities}
              category="sales"
              index="name"
              colors={["slate", "violet", "indigo", "rose", "cyan", "amber"]}
            />
          </CardBody>
        </Card>
      </div>
    </div>
  </div>
);

export default WeeklyRevenue;
