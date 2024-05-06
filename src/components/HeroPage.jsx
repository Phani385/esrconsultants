const HeroPage = ({ imageUrl }) => {
  return (
    <div
      className="hero h-full"
      style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: "cover",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="text-center text-white w-[90%] lg:w-[60%]">
        <h1 className="mb-5 text-3xl font-bold text-white lg:text-4xl xl:text-5xl">
          ESR Corpotate Consultants LLP
          <br /> Quality is our business plan
        </h1>
        <p className="mb-3 lg:mb-5">
          A Reputed Tax Consultant & Chartered Accountant, who has helped many
          individuals / organizations to establish business in india
        </p>
        <p className="mb-3 lg:mb-5">
          Our team of chartered accountants represents a coalition of
          specialized skills that is geared to offer sound financial solutions
          and advices . The organization is a congregation of professionally
          qualified and experienced persons who are committed to add value and
          optimize the benefits accruing to clients.
        </p>
        <div className="flex flex-col gap-4 lg:flex-row justify-center">
          <button className="btn border-none text-white bg-secondaryColor-500 hover:bg-secondaryColor-600 mx-auto w-full md:w-[60%] lg:w-fit lg:mx-0">
            Contact Us
          </button>
          <button className="btn border-none text-white   bg-secondaryColor-500 hover:bg-secondaryColor-600 mx-auto w-full md:w-[60%] lg:w-fit lg:mx-0">
            Our Services
          </button>
        </div>
      </div>
    </div>
  );
};

HeroPage.propTypes = {
  imageUrl: String,
};

export default HeroPage;
