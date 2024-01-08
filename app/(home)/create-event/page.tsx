import { Input, Textarea } from "@nextui-org/react";

export default function Page() {
  return (
    <div className="h-screen w-screen bg-green-500 flex justify-center">
      <div className="w-1/2 bg-blue-200">
        <div className="p-10 flex flex-col justify-around h-full">
          <Input type="email" label="Email" placeholder="Enter your email" />
          <Input
            type="password"
            label="Password"
            placeholder="Enter your password"
          />
          <div className="flex space-x-5">
            <Input type="email" label="Email" placeholder="Enter your email" />
            <Input type="email" label="Email" placeholder="Enter your email" />
          </div>
          <div className="flex space-x-5">
            <Input type="email" label="Email" placeholder="Enter your email" />
            <Input type="email" label="Email" placeholder="Enter your email" />
          </div>
          <Textarea
            label="Description"
            placeholder="Enter your description"
            className="w-full"
          />
          <Textarea
            label="Description"
            placeholder="Enter your description"
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
}
