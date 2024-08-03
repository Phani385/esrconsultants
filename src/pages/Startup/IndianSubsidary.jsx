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
import Footer from "../../components/Footer";

const IndianSubsidary = () => {
  return (
    <div className="flex flex-col min-h-screen fillings-screen">
      <Navbar />
      <div className="flex-1 py-10 px-10 lg:px-0 lg:w-[80%] mx-auto">
        <MainHeading content="India Company Registration" />
        <div className="flex gap-10">
          <div className="lg:w-[80%]">
            <Paragraph content="Setting up a subsidiary in India can be a transformative step for expanding your business operations and accessing one of the world's largest and most dynamic markets. At ESR Consultants, we specialise in providing comprehensive and tailored services for the incorporation of a foreign subsidiary in India. Our team of experts is here to guide you through the complexities of establishing a foreign subsidiary company in India, from understanding the legal requirements and navigating regulatory approvals to assisting with compliance and documentation.  Partner with us for the incorporation of a foreign subsidiary in India and unlock India's vast business potential to drive your company's growth and success." />
            <section>
              <SubHeading content="Subsidiary Company" />
              <Paragraph content="A subsidiary company is often referred to as a sister company, while the company that exercises control over it is known as the parent company or holding company. The parent company holds the authority to control the subsidiary company, either in part or entirely." />
              <Paragraph content="The registration process for a foreign subsidiary company in india is governed by the Companies Act of 2013. According to the Companies Act of 2013, a subsidiary company can be defined as a company in which a foreign corporate body or parent entity holds a minimum of 50% of the total share capital. In essence, the parent company exerts a significant influence and control over the subsidiary company." />
            </section>
            <section>
              <SubHeading content="How ESR Consultants Can Assist with Indian Subsidiary Company Registration" />
              <Paragraph content="Still unsure how to register a subsidiary company in India? ESR Consultants simplifies establishing an Indian subsidiary company by offering comprehensive support at every crucial step. From selecting a unique name and obtaining essential Director Identification Numbers (DIN) and Digital Signature Certificates (DSC) to assisting with PAN and TAN applications and setting up a dedicated company bank account, we streamline the entire registration process." />
              <Paragraph content="Our expert team ensures compliance with regulatory requirements, including the Foreign Exchange Management Act (FEMA), Companies Act, 2013, Reserve Bank of India (RBI) compliances, and the Income Tax Act, 1961." />
              <Paragraph content="We facilitate filing annual returns, guide you through SEBI (Listing Obligations and Disclosure Regulations) compliance, and provide tax services to navigate India's taxation policies. With ESR Consultants as your partner, you can initiate and grow your Indian subsidiary business confidently and efficiently." />
            </section>
          </div>
          <div className="hidden lg:block">
            <h3>Related Guides</h3>
            <ul className="my-3 flex flex-col gap-4">
              <FooterTopLink
                title="Official site of Income tax"
                url="https://incometaxindia.gov.in/Pages/default.aspx"
              />
              <FooterTopLink
                title="Official site of Income tax"
                url="https://incometaxindia.gov.in/Pages/default.aspx"
              />

              <FooterTopLink
                title="Official site of Income tax"
                url="https://incometaxindia.gov.in/Pages/default.aspx"
              />
              <FooterTopLink
                title="Official site of Income tax"
                url="https://incometaxindia.gov.in/Pages/default.aspx"
              />
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default IndianSubsidary;
