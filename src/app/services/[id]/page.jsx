const page = async ({ params }) => {
  // Access the route parameter
  const { id } = await params;

  const data = [
    {
      id: 1,
      name: "Caramel Latte",
      image:
        "https://images.unsplash.com/photo-1527678357412-ef45dfbd9ecc?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Q2FyYW1lbCUyMExhdHRlJTIyfGVufDB8fDB8fHww",
      category: "Latte",
      type: "Hot",
      origin: "Italy",
      rating: 4.7,
      popularity: "High",
    },
    {
      id: 2,
      name: "Iced Americano",
      image:
        "https://plus.unsplash.com/premium_photo-1671088575920-09f2a5970574?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8SWNlZCUyMEFtZXJpY2Fub3xlbnwwfHwwfHx8MA%3D%3D",
      category: "Americano",
      type: "Cold",
      origin: "USA",
      rating: 4.5,
      popularity: "Medium",
    },
    {
      id: 3,
      name: "Espresso Shot",
      image:
        "https://images.unsplash.com/photo-1601390483714-955fd3066695?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8RXNwcmVzc28lMjBTaG90fGVufDB8fDB8fHww",
      category: "Espresso",
      type: "Hot",
      origin: "Italy",
      rating: 4.9,
      popularity: "High",
    },
    {
      id: 4,
      name: "Vanilla Cold Brew",
      image:
        "https://plus.unsplash.com/premium_photo-1661753847775-0125e0991881?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8VmFuaWxsYSUyMENvbGQlMjBCcmV3fGVufDB8fDB8fHww",
      category: "Cold Brew",
      type: "Cold",
      origin: "Ethiopia",
      rating: 4.6,
      popularity: "Medium",
    },
    {
      id: 5,
      name: "Mocha Frappuccino",
      image:
        "https://plus.unsplash.com/premium_photo-1674931348683-c4a3987438db?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8TW9jaGElMjBGcmFwcHVjY2lub3xlbnwwfHwwfHx8MA%3D%3D",
      category: "Frappuccino",
      type: "Cold",
      origin: "Colombia",
      rating: 4.8,
      popularity: "High",
    },
  ];

  // Find the specific coffee based on the id
  const singleData = data.find((coffee) => coffee.id === parseInt(id));
  if (singleData) {
    return (
      <div>
        <p>ID: {id}</p>
        <p>Name: {singleData.name}</p>
        <div className="flex justify-center">
          <img className="h-24 w-24" src={singleData.image} />
        </div>
      </div>
    );
  } else {
    return <>Not found</>;
  }
};

export default page;
