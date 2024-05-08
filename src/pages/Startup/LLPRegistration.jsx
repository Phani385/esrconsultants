import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import {
  CheckItem,
  ListPoint,
  MainHeading,
  Paragraph,
  SideHeading,
  SubHeading,
} from "../../components/UtilityComponents";

const llpRequirements = [
  {
    heading: "Minimum of Two Partners",
    description:
      "Establishing a Limited Liability Partnership in India necessitates a minimum of two partners, with no upper threshold on the maximum number of partners.",
    showIcon: true,
  },
  {
    heading: "Designated Partners",
    description:
      "Within the partnership framework, at least two selected partners are obligatory, and they must be natural individuals. At least one of these designated partners must also maintain residency in India.",
    showIcon: true,
  },
  {
    heading: "Nomination for Body Corporate Partner",
    description:
      "If a body corporate assumes the role of a partner, the designation of a natural person must act as its representative.",
    showIcon: true,
  },
  {
    heading: "Agreed Contribution",
    description:
      "Each partner is required to contribute the shared capital of the LLP, as stipulated and agreed upon.",
    showIcon: true,
  },
  {
    heading: "Minimum Authorized Capital",
    description:
      "The LLP is mandated to possess an authorized capital of at least Rs. 1 lakh.",
    showIcon: true,
  },
  {
    heading: "Indian Resident Designated Partner",
    description:
      "At least one designated partner of the LLP must hold a resident status in India.",
    showIcon: true,
  },
];

const llpCharacterstics = [
  {
    heading: "Legal Identity",
    description:
      'Like big companies, an LLP has a separate legal identity. This means it\'s seen as its own "person" regarding rights and responsibilities, separate from those who own it.',
    showIcon: true,
  },
  {
    heading: "At Least Two Partners",
    description:
      "An LLP needs at least two people to start it. This teamwork helps in setting up the business and working together.",
    showIcon: true,
  },
  {
    heading: "No Partner Limit",
    description:
      "Unlike some other businesses, there's no highest number of partners an LLP can have. This makes it easy to grow and bring in more partners.",
    showIcon: true,
  },
  {
    heading: "Two Designated Partners",
    description:
      "An LLP has to have at least two 'main' partners. These people must be real individuals, and at least one should live in India.",
    showIcon: true,
  },
  {
    heading: "Limited Responsibility",
    description:
      "One big plus of an LLP is that if something goes wrong, each partner is only responsible for what they put in. So, personal things are safe from business problems.",
    showIcon: true,
  },
  {
    heading: "Cost-Effective Start",
    description:
      "Starting an LLP costs less than setting up a big company. This makes it a great option for smaller businesses.",
    showIcon: true,
  },
  {
    heading: "Less Rules to Follow",
    description:
      "LLPs don't have to follow as many rules and regulations as big companies. This means less paperwork and less to worry about.",
    showIcon: true,
  },
  {
    heading: "No Minimum Money Needed",
    description:
      "Unlike big companies, you don't need a certain amount to start an LLP. Partners can invest what they can afford.",
    showIcon: true,
  },
];

const advantagesList = [
  {
    heading: "Own Legal Identity",
    description:
      "An LLP is like its own person, just like big companies. This helps people trust and work with it, as it can do legal things independently.",
    showIcon: true,
  },
  {
    heading: "Less Risk for Partners",
    description:
      "LLP partners are only responsible for what they put in. They don't have to pay for all the debts or losses, which is good for their reputation.",
    showIcon: true,
  },
  {
    heading: "Saves Money and Time",
    description:
      "Starting an LLP costs less and has fewer rules than big companies. There's less paperwork to do every year.",
    showIcon: true,
  },
  {
    heading: "No Fixed Money Needed",
    description:
      "You don't need much money to start an LLP. Partners can put in whatever amount they want.",
    showIcon: true,
  },
];

const disadvantagesList = [
  {
    heading: "Getting in Trouble for Not Following Rules",
    description:
      "Even though LLPs have fewer rules, they can get big fines if they don't follow them on time. Even if an LLP doesn't do anything in a year, it still needs to tell the government or get fined.",
    showIcon: true,
  },
  {
    heading: "Ending an LLP",
    description:
      "An LLP needs at least two partners. It must stop if it has fewer than two partners for six months. Also, it might have to close if it can't pay its debts.",
    showIcon: true,
  },
  {
    heading: "Hard to Get Big Money",
    description:
      "LLPs don't work like big companies where people invest money and become owners. This makes it tricky to get a lot of money from investors.",
    showIcon: true,
  },
];

const requiredDocuments = [
  {
    heading: "PAN Card/ID Proof of Partners",
    description:
      "Partners are required to submit their PAN Card or any other valid ID proof.",
    showIcon: true,
  },
  {
    heading: "Address Proof of Partners",
    description:
      "Partners can submit documents such as Voter's ID, Passport, Driver's License, or Aadhar Card.",
    showIcon: true,
  },
  {
    heading: "Residence Proof of Partners",
    description:
      "Partners need to provide recent documents such as a bank statement, telephone bill, mobile bill, electricity bill, or gas bill from the last 2-3 months.",
    showIcon: true,
  },
  {
    heading: "Passport-size Photograph",
    description:
      "Partners should provide a passport-size photograph with a white background.",
    showIcon: true,
  },
  {
    heading: "For Foreign Nationals and NRIs",
    description:
      "Foreign nationals and NRIs intending to partner in an Indian LLP should submit their passport along with proof of address, such as a driving license, bank statement, residence card, or any government-issued identity proof containing the address.",
    showIcon: true,
  },
  {
    heading: "Proof of Registered Office Address",
    description:
      "This includes the landlord's rent agreement and a no-objection certificate if the office space is rented. A recent utility bill (gas, electricity, or telephone) with the complete address and owner's name (dated two months or older) should also be submitted.",
    showIcon: true,
  },
  {
    heading: "Digital Signature Certificate (DSC)",
    description:
      "At least one designated partner must have a DSC for digitally signing documents.",
    showIcon: true,
  },
];

const llpServices = [
  {
    heading: "Experienced Professionals",
    description:
      "Our skilled team knows the ins and outs of LLP registration. We'll provide you with accurate information, ensuring you grasp each step.",
    showIcon: true,
  },
  {
    heading: "Name Availability",
    description:
      "We'll help you check if your desired LLP name is available and reserve it according to the rules.",
    showIcon: true,
  },
  {
    heading: "DSCs and DINs",
    description:
      "We'll assist you in getting Digital Signature Certificates (DSCs) and Director Identification Numbers (DINs) – necessary for the process.",
    showIcon: true,
  },
  {
    heading: "LLP Agreement",
    description:
      "Our experts will aid in drafting the LLP Agreement, ensuring it's legally sound. We'll also manage to file the required documents with the authorities, keeping things accurate and compliant.",
    showIcon: true,
  },
  {
    heading: "PAN and TAN Application",
    description:
      "We'll simplify the application process for your LLP's Permanent Account Number (PAN) and Tax Deduction and Collection Account Number (TAN).",
    showIcon: true,
  },
  {
    heading: "Customer Support",
    description:
      "We're here for you. Our customer support will address your questions, ensuring your journey is seamless.",
    showIcon: true,
  },
  {
    heading: "Timely Updates",
    description:
      "You'll receive timely updates on your LLP registration progress, keeping you informed every step of the way.",
    showIcon: true,
  },
];

const LLPRegistration = () => {
  return (
    <div className="flex flex-col min-h-screen fillings-screen">
      <Navbar />
      <div className="flex-1 py-10 px-10 lg:px-0 lg:w-[80%] mx-auto">
        <MainHeading content="LLP Registration in India" />
        <div className="flex gap-10">
          <div className="lg:w-[80%]">
            <Paragraph content="Limited Liability Partnership (LLP) is a contemporary and advantageous business structure. Blending the strengths of partnership dynamics and the security of limited liability, an LLP offers a versatile platform for entrepreneurs to collaborate and innovate confidently." />
            <Paragraph content="Getting your LLP registered in India is super easy with ESR Consultants. Many businesses trust us to help them register their Limited Liability Partnerships and ensure they follow the rules. Our team of experts will guide you through the online registration process from beginning to end. It's the fastest and cheapest way to register your LLP – all you have to do is just reach out to us. Start now and set yourself up for a successful business future with LLP registration." />
            <section>
              <SubHeading content="What is an LLP?" />
              <Paragraph content="A Limited Liability Partnership (LLP) is a unique type of business setup that blends a partnership's and a company's features. In an LLP, partners enjoy limited liability, similar to shareholders in a company, while also benefiting from the flexibility and simplicity of a partnership. This arrangement grants the LLP its legal identity, allowing it to take legal actions and be subject to legal actions separately from its partners." />
              <Paragraph content="LLPs have become popular among entrepreneurs in various industries because they shield partners' assets and have more straightforward regulatory requirements than traditional corporations. The concept of LLP was introduced in India in 2008 and is governed by the Limited Liability Partnership Act, offering a dependable and adaptable option for businesses of all sizes." />
            </section>

            <section>
              <SubHeading content="LLP Registration Prerequisites and Eligibility Conditions" />
              <Paragraph content="To qualify for the registration of an LLP company in India, you must adhere to the subsequent criteria:" />
              <ul>
                {llpRequirements.map((item) => (
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
              <SubHeading content="Characteristics of LLP" />
              <ul>
                {llpCharacterstics.map((point) => (
                  <ListPoint
                    heading={point.heading}
                    description={point.description}
                    showIcon={point.showIcon}
                    key={point.heading}
                  />
                ))}
              </ul>
            </section>

            <section>
              <SubHeading content="Advantages of LLP" />
              <Paragraph content="The advantages of a Limited Liability Partnership (LLP) are elaborated in detail below: " />
              <ul>
                {advantagesList.map((point) => (
                  <ListPoint
                    heading={point.heading}
                    description={point.description}
                    showIcon={point.showIcon}
                    key={point.heading}
                  />
                ))}
              </ul>
            </section>

            <section>
              <SubHeading content="Disadvantages of LLP" />
              <Paragraph content="Certainly, Limited Liability Partnerships (LLPs) present numerous advantages despite a few inherent disadvantages:" />
              <ul>
                {disadvantagesList.map((point) => (
                  <ListPoint
                    heading={point.heading}
                    description={point.description}
                    showIcon={point.showIcon}
                    key={point.heading}
                  />
                ))}
              </ul>
            </section>

            <section>
              <SubHeading content="LLP Name Structure" />
              <Paragraph content="Choose a unique name that is not used by other businesses. This makes approval easier and establishes your identity. Include words that clearly describe what your business does. This helps people understand your services or products" />
              <Paragraph content='End your LLP name with "LLP" or "Limited Liability Partnership." This is necessary to show your business structure' />
            </section>

            <section>
              <SubHeading content="Documents Required for LLP Registration" />
              <Paragraph content="To initiate the registration process for an LLP, partners are required to furnish the following documents:" />
              <ul>
                {requiredDocuments.map((point) => (
                  <ListPoint
                    heading={point.heading}
                    description={point.description}
                    showIcon={point.showIcon}
                    key={point.heading}
                  />
                ))}
              </ul>
            </section>

            <section>
              <SubHeading content="Procedure for LLP Registration" />
              <Paragraph content="The process of incorporating an LLP involves several key steps. Here is a comprehensive guide to incorporating your LLP:" />

              <SideHeading content="Obtain a Digital Signature Certificate (DSC)" />
              <Paragraph content="All proposed partners of the LLP must obtain a Digital Signature Certificate (DSC) since all government filings require digital signatures." />

              <SideHeading content="Obtain Director Identification Number (DIN)" />
              <Paragraph content="Partners without a DIN need to apply for one. The Director Identification Number (DIN) is a unique identification number assigned to individuals aspiring to become directors or designated partners in LLPs." />

              <SideHeading content="Choose a Name for the LLP" />
              <Paragraph content="Select a unique and suitable name for your LLP, adhering to Ministry of Corporate Affairs guidelines." />

              <SideHeading content="Form for Incorporation of LLP (FiLLiP)" />
              <Paragraph content="This form collects essential information about the proposed LLP, partners, LLP agreement, and registered office address. It includes a declaration from partners consenting to act as designated partners and comply with LLP regulations." />

              <SideHeading content="Draft LLP Agreement" />
              <Paragraph content="Create the LLP Agreement outlining partner rights, duties, and obligations. This agreement must be notarized and filed with the Ministry of Corporate Affairs within 30 days of incorporation." />

              <SideHeading content="Obtain a Certificate of Incorporation" />
              <Paragraph content="Once forms and documents are filed and verified, the Registrar of Companies (RoC) will issue the Certificate of Incorporation, officially recognizing the LLP's existence." />

              <SideHeading content="Apply for PAN and TAN" />
              <Paragraph content="After obtaining the Certificate of Incorporation, apply for the Permanent Account Number (PAN) and TAN for the LLP." />

              <Paragraph content="You can successfully register your LLP and embark on your entrepreneurial venture by following these steps diligently." />
            </section>

            <section>
              <SubHeading content="Effortless LLP Registration Made Possible with ESR Consultants" />
              <Paragraph content="ESR Consultants is your trusted companion throughout the entire LLP registration journey. Here's how we can assist you:" />
              <ul>
                {llpServices.map((service) => (
                  <ListPoint
                    showIcon={service.showIcon}
                    heading={service.heading}
                    description={service.description}
                    key={service.heading}
                  />
                ))}
              </ul>
              <Paragraph content="With ESR Consultants as your partner, you can confidently navigate LLP registration, guided by experienced professionals who will ensure a hassle-free experience from start to finish" />
            </section>
          </div>
          <div className="hidden lg:block">
            <h3>Related Guides</h3>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LLPRegistration;
