import { Input, Button } from "@nextui-org/react";

export default function Page() {
  return (
    <div className="h-screen w-screen flex">
      <div className="bg-red-200 h-full w-2/5 bg-splash-picture bg-cover bg-no-repeat" />
      <div className=" bg-gray-200 h-full w-3/5 py-10 flex flex-col justify-around">
        <div className="text-center">
          <span className="text-black text-2xl font-bold font-['Product Sans']">
            Event
          </span>
          <span className="text-violet-600 text-2xl font-bold font-['Product Sans']">
            {" "}
            Hive
          </span>
        </div>
        <p className="text-center text-black text-4xl font-bold font-['Product Sans']">
          Sign Up to Event Hive
        </p>
        <Input
          isRequired
          type="email"
          label="Email"
          defaultValue=""
          className="max-w-xxl w-4/5 mx-auto"
        />
        <Input
          isRequired
          type="password"
          label="Password"
          defaultValue=""
          className="max-w-xxl w-4/5 mx-auto"
        />
        <Input
          isRequired
          type="password"
          label="Confirm Password"
          defaultValue=""
          className="max-w-xxl w-4/5 mx-auto"
        />
        <div className="flex flex-col space-y-7">
          <Button
            className="w-2/5 mx-auto bg-violet-600 text-gray-100"
            size="md"
            radius="sm"
          >
            Sign Up
          </Button>
          <p className="text-center">Or</p>
          <Button
            className="w-2/5 mx-auto bg-violet-600 text-gray-100"
            size="md"
            radius="sm"
          >
            Sign up with Google
          </Button>
        </div>
      </div>
    </div>
  );
}
