// pages/landing.tsx

import React from "react";
import Card from "@/components/Card";
import Button from "@/components/Button";
import Pill from "@/components/Pill";

const LandingPage = () => {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Welcome to Landing Page</h1>

      <div className="space-x-4">
        <Button text="Small" styles="rounded-sm" />
        <Button text="Medium" styles="rounded-md" />
        <Button text="Large" styles="rounded-full" />
        <Button text="Extra" styles="rounded-lg" />
      </div>

      <div>
        <Pill title="Featured" />
      </div>

      <Card />
    </div>
  );
};

export default LandingPage;
