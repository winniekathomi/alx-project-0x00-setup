import React from "react";
import Button from "@/components/Button";

export default function Landing() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Landing Page</h1>
      <div className="space-x-4">
        <Button shape="rounded-sm">Small</Button>
        <Button shape="rounded-md">Medium</Button>
        <Button shape="rounded-full">Full</Button>
      </div>
    </div>
  );
}
