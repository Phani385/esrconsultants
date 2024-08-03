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

const NidhiCompany = () => {
  return (
    <div className="flex flex-col min-h-screen fillings-screen">
      <Navbar />
      <div className="flex-1 py-10 px-10 lg:px-0 lg:w-[80%] mx-auto">
        <MainHeading content="Nidhi Company Registration" />
        <div className="flex gap-10">
          <div className="lg:w-[80%]">
            <Paragraph content="A Nidhi Company in India is a non-banking financial company (NBFC) that operates under the regulatory framework of the Nidhi Rules, 2014. It is governed by Section 406 of the Companies Act, 2013. Operating as a public limited company, its primary purpose is to encourage thrift and savings among its members while facilitating financial assistance through lending." />
            <Paragraph content="If you're interested in registering a Nidhi Company in India and need assistance, feel free to reach out to ESR Consultants for guidance and support. We can help you navigate the Nidhi registration process and ensure that your Nidhi Company complies with all the necessary regulations. Get started on your journey towards establishing a Nidhi Company today!" />
            <section>
              <SubHeading content="What is Nidhi Company?" />
              <Paragraph content="A Nidhi Company is a company that primarily deals with managing deposits from and providing loans to its members, who are also shareholders. The main purpose of a Nidhi Company is to promote thrift and savings among its members while offering financial assistance through lending." />
              <Paragraph content="Nidhi Companies in India have specific exemptions and relaxed regulations when it comes to their annual compliance requirements and tax assessments, making them a unique financial institution designed to benefit their members mutually." />
              <Paragraph content="The legal framework governing Nidhi Companies in India consists of Section 406 of the Companies Act, 2013, the Companies (Nidhi Companies) Rules of 2014, and Chapter XXVI of the Companies Rules, 2014." />
            </section>
            <section>
              <SubHeading content="The Purpose and Nature of Nidhi Companies" />
              <Paragraph content="Nidhi Companies serve a distinct purpose in the Indian financial landscape, primarily focused on promoting savings among their members. These companies are unique in that they can accept deposits from and offer loans exclusively to their members. The term 'Nidhi' in Nidhi Company, derived from Hindi, signifies 'treasure.'" />
              <Paragraph content="Nidhi Companies fall within the category of Non-Banking Financial Companies (NBFCs). While they do not fall under direct regulation by the Reserve Bank of India (RBI), the RBI holds the authority to issue directives regarding their deposit acceptance activities. " />
              <Paragraph content="What sets Nidhi Companies apart is their exclusive engagement with their members, who are also shareholders. This exclusive relationship grants them exemptions from certain core provisions of the RBI Act and other regulatory guidelines that apply to traditional NBFCs. As a result, a Nidhi Company is a legally sound entity for accepting deposits and providing loans exclusively to a specific group of members, making it a unique financial institution in India. Understanding what is Nidhi company comes down to these key characteristics and purpose distinguishing it from other forms of companies." />
            </section>
            <section>
              <SubHeading content="Benefits of Nidhi Company" />
              <Paragraph content="Registering a company as a Nidhi in India offers a range of advantages that extend beyond the primary objective of fostering savings among members. Here are key points emphasizing what is Nidhi company benefits:" />
              <ul>
                {nidhiBenifits.map((item) => (
                  <ListPoint
                    heading={item.heading}
                    description={item.description}
                    key={item.heading}
                    showIcon={item.showIcon}
                  />
                ))}
              </ul>
            </section>
            <section>
              <SubHeading content="Restrictions on Nidhi Companies" />
              <Paragraph content="Nidhi companies have certain rules they must follow to keep their focus on serving their members. They are not allowed to:" />

              <ul>
                {restrictions.map((point) => (
                  <CheckItem point={point} key={point} />
                ))}
              </ul>
            </section>
            <section>
              <SubHeading content="Documents Required for Nidhi Company Registration in India" />
              <Paragraph content="To register a Nidhi Company in India, you need to provide the following essential documents:" />
              <ul>
                {requiredDocuments.map((doc) => (
                  <CheckItem point={doc} key={doc} />
                ))}
              </ul>
            </section>
            <section>
              <SubHeading content="Seamless Nidhi Company Registration with ESR Consultants" />
              <Paragraph content="ESR Consultants is your trusted partner in simplifying the Nidhi Company registration process. With our expert team, we provide end-to-end assistance in obtaining your Nidhi Company registration efficiently and in compliance with all legal requirements. From applying for DIN and DSC to handling the documentation, name approval process, opening a Nidhi Bank account and even the post-registration formalities, our comprehensive services ensure a hassle-free Nidhi company registration experience. Let ESR Consultants guide you through the intricacies of Nidhi Company registration so you can focus on promoting thrift and mutual benefit among your members." />
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

export default NidhiCompany;
