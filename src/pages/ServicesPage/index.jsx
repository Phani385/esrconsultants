import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import ServiceCard from "../../components/ServiceCard";

const serviceCardValues = [
  {
    title: "Startup",
    description:
      "Legal support for all your startup needs, from business registration to international expansion.",
    iconUrl: "https://img.icons8.com/ios/50/ffffff/company--v1.png",
    subItems: [
      "Proprietorship",
      "Partnership",
      "One Person Company",
      "Limited Liability Company",
      "Private Limited Company",
      "Check Company or LLP Name Availability",
      "Section 8 Company",
      "Nidhi Company",
      "Indian Subsidiary",
    ],
  },
  {
    title: "Registrations",
    description:
      "Protect your brand with our comprehensive trademark services, from registration to renewal, ensuring your intellectual property rights are safeguarded worldwide.",
    iconUrl: "https://img.icons8.com/ios/50/ffffff/signing-a-document.png",
    subItems: [
      "Digital Signature",
      "Udyam Registration",
      "Startup India Registration",
      "FSSAI Registration",
      "Professional Tax",
      "Barcode Registration",
      "RCMC Registration",
      "Import Certificate",
    ],
  },
  {
    title: "Trademark",
    description:
      "Protect your brand with our comprehensive trademark services, from registration to renewal, ensuring your intellectual property rights are safeguarded worldwide.",
    iconUrl: "https://img.icons8.com/pulsar-line/56/ffffff/trademark.png",
    subItems: [
      "Trademark Registration",
      "Trademark Objection",
      "Trademark Opposition",
      "Find Trademark class for over 8000 goods and services",
      "Trademark Renewal",
      "Copyright Registration",
      "Design Registration",
      "Patent Registration",
    ],
  },
  {
    title: "Goods & Service Tax",
    description:
      "Simplify your GST compliance with our range of services, from registration to return filing, ensuring seamless tax management for your business.",
    iconUrl:
      "https://img.icons8.com/external-becris-lineal-becris/24/ffffff/external-tax-finance-taxation-becris-lineal-becris.png",
    subItems: [
      "GST Registration",
      "GST Return Filing",
      "GST LUT Filing",
      "GST Registration Cancellation",
      "GST Annual Return",
      "GST Invoicing",
      "GST eInvoicing",
      "eWay Bill",
      "Input Tax Credit",
      "GST Software for Accountants",
    ],
  },
  {
    title: "Income Tax",
    description:
      "Streamline your income tax obligations with our tailored services, covering personal and business tax filing, TDS, and ITR returns for all forms.",
    iconUrl: "https://img.icons8.com/ios-filled/50/ffffff/income-tax.png",
    subItems: [
      "Personal Tax Filing",
      "Business Tax Filing",
      "Tax Notice",
      "TDS Filing",
      "ITR-1 Return",
      "ITR-2 Return",
      "ITR-3 Return",
      "ITR-4 Return",
      "ITR-5 Return",
      "ITR-6 Return",
      "ITR-7 Return",
      "Form 16",
    ],
  },
  {
    title: "Compliance",
    description:
      "Stay compliant effortlessly with our comprehensive range of services, covering all aspects from company and LLP compliance to payroll and regulatory filings.",
    iconUrl: "https://img.icons8.com/ios/50/ffffff/inspection.png",
    subItems: [
      "Proprietorship",
      "Partnership",
      "Company",
      "LLP Compliance",
      "Payroll",
      "PF Registration",
      "PF Return Filing",
      "ESI Registration",
      "Add Directors",
      "Remove Directors",
      "Share Transfer",
      "DIR-3 KYC",
      "Registered Office Change",
      "Increase Authorized Capital",
      "Winding Up of Company",
      "Winding Up of LLP",
      "Health Insurance",
      "Life Insurance",
      "Motor Insurance",
      "Personal Loans",
      "Business Loans",
      "OPL",
    ],
  },
];

const ServicesPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <section className="p-10 text-center lg:w-[90%] mx-auto flex-1">
        <h1 className="text-secondaryColor-500 mb-3 text-2xl uppercase font-bold text-center">
          Our Services
        </h1>
        <h2 className="text-2xl font-bold mb-2">
          A better way to manage your business
        </h2>
        <p>
          ESR consulatancy has always tried to add value to your businesses. Our
          team of professionals are here to handle all your business needs. From
          simple bookkeeping to complex investigation engagements, ESR
          Consultants can provide complete “end-to-end” services and solutions
          for your business. We are committed to providing superior technical,
          quality and satisfactory work.
        </p>
        <ul className="grid grid-cols-1 lg:grid-cols-2 my-4">
          {serviceCardValues.map((serviceCard) => (
            <ServiceCard
              key={serviceCard.title}
              title={serviceCard.title}
              description={serviceCard.description}
              iconUrl={serviceCard.iconUrl}
              subItems={serviceCard.subItems}
            />
          ))}
        </ul>
      </section>
      <Footer />
    </div>
  );
};

export default ServicesPage;
