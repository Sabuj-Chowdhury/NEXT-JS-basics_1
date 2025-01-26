"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

const page = () => {
  const router = useRouter();
  const isLoggedIn = false;
  const handleNavigation = () => {
    if (isLoggedIn) {
      router.push("/about/address");
    } else {
      router.push("/");
    }
  };
  return (
    <div>
      <p className="font-bold text-3xl">About page</p>
      <Link href="/about/address">Address page</Link>
      <br />
      <button type="button" onClick={handleNavigation}>
        address page
      </button>
    </div>
  );
};

export default page;
