"use client";

import { Button } from "@/components/shadcnui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/shadcnui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon">
          <Menu className="size-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent
        side="right"
        className="w-75 sm:w-100">
        <SheetHeader>
          <SheetTitle className="sr-only">Navigation</SheetTitle>
          <SheetDescription className="sr-only">
            Navigation Menu
          </SheetDescription>
        </SheetHeader>

        <nav className="flex flex-col items-center gap-6">
          <SheetClose asChild>
            <Link
              href="/"
              className="hover:text-primary text-lg font-medium transition-colors">
              Home
            </Link>
          </SheetClose>

          <SheetClose asChild>
            <Link
              href="/hiring-now"
              className="hover:text-primary text-lg font-medium transition-colors">
              Hiring Now
            </Link>
          </SheetClose>

          <SheetClose asChild>
            <Link
              href="/onboarding-process"
              className="hover:text-primary text-lg font-medium transition-colors">
              Onboarding Process
            </Link>
          </SheetClose>

          <SheetClose asChild>
            <Link
              href="/hr-rules-regulations"
              className="hover:text-primary text-lg font-medium transition-colors">
              HR Rules & Regulations
            </Link>
          </SheetClose>

          <SheetClose asChild>
            <Link
              href="/attendance"
              className="hover:text-primary text-lg font-medium transition-colors">
              Attendance
            </Link>
          </SheetClose>

          <SheetClose asChild>
            <Link
              href="/leave-apply"
              className="hover:text-primary text-lg font-medium transition-colors">
              Leave Apply
            </Link>
          </SheetClose>

          <SheetClose asChild>
            <Link
              href="/women-welfare-foundation"
              className="hover:text-primary text-lg font-medium transition-colors">
              Women Welfare Foundation
            </Link>
          </SheetClose>

          <SheetClose asChild>
            <Link
              href="/feedback"
              className="hover:text-primary text-lg font-medium transition-colors">
              Feedback
            </Link>
          </SheetClose>
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
