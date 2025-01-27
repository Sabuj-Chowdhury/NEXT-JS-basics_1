const page = async ({ params }) => {
  const p = await params;
  console.log(p);
  return (
    <div>
      <p>about slug page</p>
    </div>
  );
};

export default page;
