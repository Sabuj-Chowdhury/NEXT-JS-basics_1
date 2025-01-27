import Link from "next/link";

const notFound404 = () => {
  return (
    <div className="text-center">
      <p>404 not not found</p>
      <Link href="/">Home</Link>
    </div>
  );
};

export default notFound404;
