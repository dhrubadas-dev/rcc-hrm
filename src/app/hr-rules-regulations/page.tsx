import ToastButton from "@/components/Buttons/ToastButton";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "RCC HRM - HR Rules & Regulations",
  description: "HR rules and regulations page of RCC HRM",
};

const page = () => {
  return (
    <section className="grid h-[90dvh] place-items-center">
      <div className="space-y-4 text-center">
        <h1 className="text-5xl font-semibold">RCC HRM</h1>
        <h2 className="text-3xl">
          Production grade Fullstack Next.js starter template
        </h2>

        <ToastButton />
      </div>
    </section>
  );
};

export default page;
