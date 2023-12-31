// MENTORS DATA

interface Product {
  id: number;
  name: string;
  href: string;
  imageSrc: string;
  imageAlt: string;
  color: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Senior UX Designer",
    href: "#",
    imageSrc: "/images/mentor/boy1.svg",
    imageAlt: "Front of men's Basic Tee in black.",
    color: "Shoo Thar Mein",
  },
  {
    id: 2,
    name: "Photoshop Instructor",
    href: "#",
    imageSrc: "/images/mentor/boy2.svg",
    imageAlt: "Front of men's Basic Tee in black.",
    color: "Cristian Doru Barin",
  },
  {
    id: 3,
    name: "SEO Expert",
    href: "#",
    imageSrc: "/images/mentor/boy3.svg",
    imageAlt: "Front of men's Basic Tee in black.",
    color: "Tanzeel Ur Rehman",
  },
  {
    id: 4,
    name: "UI/UX Designer",
    href: "#",
    imageSrc: "/images/mentor/boy4.svg",
    imageAlt: "Front of men's Basic Tee in black.",
    color: "Andrew Williams",
  },
  {
    id: 5,
    name: "Web Development / Web Design",
    href: "#",
    imageSrc: "/images/mentor/boy5.svg",
    imageAlt: "Front of men's Basic Tee in black.",
    color: "Brad Schiff",
  },
  {
    id: 6,
    name: "Adobe Certified Instructor",
    href: "#",
    imageSrc: "/images/mentor/girl1.svg",
    imageAlt: "Front of men's Basic Tee in black.",
    color: "Daniel Walter Scott",
  },
];

const Board = () => {
  return (
    <div
      id="mentors-section"
      className="mx-auto max-w-2xl px-4 pb-16 sm:px-6 sm:py-20 lg:max-w-7xl lg:px-8"
    >
      <div className=" mb-12 items-center justify-between sm:flex">
        <h2 className="my-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Meet with our Board of Directors
        </h2>
        <div>
          <button className="text-purple border-lightgrey rounded border bg-transparent px-4 py-3 font-medium hover:border-transparent hover:bg-primary hover:text-white">
            Connect with our Board of Directors
          </button>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
        {products.map((product) => (
          <div key={product.id} className="group relative">
            <div className="min-h-80 aspect-w-1 aspect-h-1 lg:aspect-none w-full overflow-hidden rounded-md bg-gray-200 lg:h-80">
              <img
                src={product.imageSrc}
                alt={product.imageAlt}
                className="h-full w-full object-cover object-center lg:h-full lg:w-full"
              />
            </div>
            <div className="mt-4 flex justify-center ">
              <div>
                <div className="mentorShadow -mt-8 rounded-lg border border-white bg-white p-2">
                  <h3 className="text-center text-sm text-gray-700">
                    <a href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </a>
                  </h3>
                </div>
                <p className="text-offblack mt-3 text-center text-2xl font-semibold">
                  {product.color}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Board;
