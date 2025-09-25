import React from "react";
import Navbar from "../../components/Navbar";
import {
  CheckItem,
  FooterTopLink,
  ListPoint,
  MainHeading,
  Paragraph,
  SubHeading,
} from "../../components/UtilityComponents";
import { sideLinks } from "../../../constants";
import Footer from "../../components/Footer";

const nidhiBenifits = [
  {
    heading: "Easy Formation",
    description:
      "Nidhi Companies boast a straightforward and hassle-free formation process with minimal requirements, making it accessible for those looking to establish such entities.",
    showIcon: true,
  },
  {
    heading: "Non-Compliance with RBI",
    description:
      "Nidhi Companies are not bound by the Reserve Bank of India (RBI) guidelines, allowing them to set their own operational rules and regulations.",
    showIcon: true,
  },
  {
    heading: "Lower Risk",
    description:
      "Transactions involving lending, borrowing, or depositing are carried out by members of the Nidhi Company, reducing financial risks and ensuring a sense of security within the community.",
    showIcon: true,
  },
  {
    heading: "Economic Registration",
    description:
      "The registration process for a Nidhi Company is cost-effective when compared to other Non-Banking Financial Company (NBFC) registration procedures, which facilitates easier access to business loans and financing options.",
    showIcon: true,
  },
  {
    heading: "Savings Promotion",
    description:
      "Nidhi Companies play a pivotal role in promoting a culture of saving among the Indian population, thereby contributing to financial prudence.",
    showIcon: true,
  },
  {
    heading: "Net-Owned Funding System",
    description:
      "Nidhi Companies typically adopt a cost-effective net-owned funding system, which can enhance their business growth prospects by efficiently utilizing their own resources and funds.",
    showIcon: true,
  },
];

const restrictions = [
  "Advertise for deposits from the public.",
  "Get involved in chit funds.",
  "Provide leasing or hire-purchase financing.",
  "Run lotteries.",
  "Offer insurance services.",
  "Sell, mortgage, or use assets as security.",
  "Partner with others for lending and borrowing.",
  "Take deposits or lend money to people who aren't their members.",
  "Issue certain types of shares or debt instruments.",
  "Exceed a limit on the value of shares.",
  "Open current accounts for members (though savings accounts are fine).",
  "Lend to or take deposits from corporations.",
  "Pay commissions or fees for attracting deposits.",
  "Do any business beyond borrowing and lending to members.",
  "Get involved in hire-purchase financing.",
  "Pay fees for loans to brokers.",
];

const requiredDocuments = [
  "Directors Identification Number (DIN)",
  "PAN Number (Permanent Account Number)",
  "Residential proof and address proof",
  "Photographs of the proposed directors and members",
  "Identification documents like Aadhar card",
  "Proof of the registered business place, such as a rent agreement or lease",
  "Ownership proof of the business place",
  "NOC (No Objection Certificate) if required",
  "Memorandum of Association (MOA)",
  "Articles of Association (AOA)",
];

const Section8 = () => {
  return (
    <div className="flex flex-col min-h-screen fillings-screen">
      <Navbar />
      <div className="flex-1 py-10 px-10 lg:px-0 lg:w-[80%] mx-auto">
        <MainHeading content="Section 8 Company Registration" />
        <div className="flex gap-10">
          <div className="lg:w-[80%]">
            <Paragraph content="A Section 8 Company is a non-profit organization that aims to promote charitable activities, art, science, education, and sports. The profits of such companies are utilized for promoting these objectives and are not distributed among the Company's members. It is essential to understand what is Section 8 company, document requirements, and company incorporation process." />
            <Paragraph content="At ESR Consultants, we provide end-to-end services for registering Section 8 companies in India. Our team of experts offers hassle-free and professional services to help you establish a Section 8 company quickly and efficiently. Contact us today to avail of our professional services for registering your Section 8 Company in India." />
            <section>
              <SubHeading content="What is Section 8 Company? - Companies Act, 2013" />
              <Paragraph content="According to the Companies Act 2013, a Section 8 company is defined as an organization whose objectives are to promote arts, commerce, science, research, education, sports, charity, social welfare, religion, environmental protection, or other similar activities goals. These entities utilize their profits to achieve their mission and do not distribute dividends to their shareholders." />
            </section>
            <section>
              <SubHeading content="Overview of Section 8 Company Registration" />
              <Paragraph content="A Section 8 Company is a type of corporation established to promote non-profit activities, such as education, social welfare, environment preservation, arts, sports, charity, and more. This follows the provisions of the Companies Act 2013." />
              <Paragraph content="The essential purpose of registering a Section 8 Company is to encourage non-profitable goals, including but not limited to trade, arts, commerce, education, charity, environmental protection, sports research, and social welfare. To register a Section 8 Company, a minimum of two directors are required, and there is no requirement for a minimum paid-up capital to set up such a company." />
            </section>
            <section>
              <SubHeading content="Streamline Section 8 Company Registration with ESR Consultants" />
              <Paragraph content="ESR Consultants is a trusted partner for entrepreneurs and organizations looking to obtain Section 8 company registration in India. With our expertise and seamless online platform, ESR Consultants simplifies the complex process of registering a Section 8 company, ensuring that all legal formalities are met. Our dedicated team of professionals guides clients through the entire registration procedure, from documentation to approval, and helps you establish non-profit organizations that can work towards social welfare and charitable activities." />
            </section>
          </div>
          <div className="hidden lg:block">
            <h3>Related Guides</h3>
            <ul className="my-3 flex flex-col gap-4">
              {sideLinks.map((sideLink, index) => (
                <FooterTopLink
                  key={index}
                  title={sideLink.title}
                  url={sideLink.url}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Section8;
