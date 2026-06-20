import Link from "next/link";

const DesktopNav = () => {
  return (
    <nav className="flex gap-6">
      <Link href={"/"}>Home</Link>

      <Link href={"/hiring-now"}>Hiring Now</Link>

      <Link href={"/onboarding-process"}>Onboarding Process</Link>

      <Link href={"/hr-rules-regulations"}>HR Rules & Regulations</Link>

      <Link href={"/attendance"}>Attendance</Link>

      <Link href={"/leave-apply"}>Leave Apply</Link>

      <Link href={"/women-welfare-foundation"}>Women Welfare Foundation</Link>

      <Link href={"/feedback"}>Feedback</Link>
    </nav>
  );
};

export default DesktopNav;
