import { useNavigate } from "react-router-dom";
import HomeServiceCard from "./HomeServiceCard";

const ServicesSection = () => {
  const navigate = useNavigate();
  return (
    <section className="services-section py-16 w-[80%] mx-auto">
      <h2 className="text-4xl font-bold text-secondaryColor-500 mb-4 text-center">
        Our Services
      </h2>
      <h3 className="text-2xl mb-2 text-center">
        A better way to manage your business
      </h3>
      <p className="text-gray-500 text-lg mb-8 text-center">
        ESR has always tried to add value to your businesses. Our team of
        professionals are here to handle all your business needs. From simple
        bookkeeping to complex investigation engagements, ESR Consultants can
        provide complete “end-to-end” services and solutions for your business.
        We are committed to providing superior technical, quality and
        satisfactory work.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        <HomeServiceCard
          title="Startup"
          description="Legal support for all your startup needs, from business registration to international expansion."
          imageUrl="https://img.icons8.com/forma-light/24/ffffff/open-book.png"
        />
        <HomeServiceCard
          title="Registrations"
          description="Efficiently navigate the maze of registrations with our expert assistance, ensuring compliance and smooth operations."
          imageUrl="https://img.icons8.com/metro/26/ffffff/scales.png"
        />
        <HomeServiceCard
          title="Trademark"
          description="Protect your brand with our comprehensive trademark services, from registration to renewal, ensuring your intellectual property rights are safeguarded worldwide."
          imageUrl="https://img.icons8.com/forma-bold/24/ffffff/calculator.png"
        />
        <HomeServiceCard
          title="Goods & Service Tax"
          description="Simplify your GST compliance with our range of services, from registration to return filing, ensuring seamless tax management for your business."
          imageUrl="https://img.icons8.com/external-becris-lineal-becris/24/ffffff/external-tax-finance-taxation-becris-lineal-becris.png"
        />
        <HomeServiceCard
          title="Income Tax"
          description="Streamline your income tax obligations with our tailored services, covering personal and business tax filing, TDS, and ITR returns for all forms."
          imageUrl="https://img.icons8.com/windows/32/ffffff/security-checked.png"
        />
        <HomeServiceCard
          title="Compliance"
          description="Stay compliant effortlessly with our comprehensive range of services, covering all aspects from company and LLP compliance to payroll and regulatory filings."
          imageUrl="https://img.icons8.com/ios-filled/50/ffffff/museum.png"
        />
      </div>
      <div className="flex justify-center mt-8">
        <button
          className="bg-secondaryColor-500 text-white px-8 py-3 rounded hover:bg-secondaryColor-600"
          onClick={() => {
            navigate("/services");
          }}
        >
          Explore More
        </button>
      </div>
    </section>
  );
};

export default ServicesSection;
