import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex justify-center container mx-auto p-5">
      <ul className="flex justify-between items-center w-1/2">
        <Link href="/">
          <li>Home</li>
        </Link>
        <Link href="/services">
          <li>Service</li>
        </Link>
        <Link href="/about">
          <li>About</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
