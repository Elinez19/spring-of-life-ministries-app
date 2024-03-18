const Card = () => {
  return (
    <>
      <section className="bg-gray-2 pb-10 pt-20 dark:bg-dark lg:pb-20 lg:pt-[120px]">
        <div className="container">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <SingleCard
              image="https://i.ibb.co/r2zns1m/image-01.jpg"
              CardTitle="Vocational training"
              titleHref="/#"
              btnHref="/#"
              CardDescription="Lorem ipsum dolor sit amet pretium consectetur adipiscing elit. Lorem consectetur adipiscing elit."
              Button="View Details"
            />
            <SingleCard
              image="https://i.ibb.co/0nbbWM9/image-02-1.jpg"
              CardTitle="Leadership Development"
              CardDescription="Lorem ipsum dolor sit amet pretium consectetur adipiscing elit. Lorem consectetur adipiscing elit."
              Button="View Details"
              titleHref={undefined}
              btnHref={undefined}
            />
            <SingleCard
              image="https://i.ibb.co/dL9fH7N/image-03-1.jpg"
              CardTitle="Mission Institute"
              CardDescription="Lorem ipsum dolor sit amet pretium consectetur adipiscing elit. Lorem consectetur adipiscing elit."
              Button="View Details"
              titleHref={undefined}
              btnHref={undefined}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Card;

const SingleCard = ({
  image,
  Button,
  CardDescription,
  CardTitle,
  titleHref,
  btnHref,
}) => {
  return (
    <>
      {/*  */}
      <div className="shadow-1 hover:shadow-3 dark:bg-dark-2 dark:shadow-card dark:hover:shadow-3 mb-10 overflow-hidden rounded-lg bg-white duration-300">
        <img src={image} alt="" className="w-full" />
        <div className="p-8 text-center sm:p-9 md:p-7 xl:p-9">
          <h3>
            <a
              href={titleHref ? titleHref : "/#"}
              className="mb-4 block text-xl font-semibold text-dark hover:text-primary dark:text-white sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]"
            >
              {CardTitle}
            </a>
          </h3>
          <p className="dark:text-dark-6 mb-7 text-base leading-relaxed text-body-color">
            {CardDescription}
          </p>

          {Button && (
            <a
              href={btnHref ? btnHref : "#"}
              className="border-gray-3 dark:border-dark-3 dark:text-dark-6 inline-block rounded-full border px-7 py-2 text-base font-medium text-body-color transition hover:border-primary hover:bg-primary hover:text-white"
            >
              {Button}
            </a>
          )}
        </div>
      </div>
      {/*  */}
    </>
  );
};
