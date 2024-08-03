import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import {
  MainHeading,
  Paragraph,
  SubHeading,
  ListPoint,
  CheckItem,
  FooterTopLink,
} from "../../components/UtilityComponents";
import "../../index.css";

const advantagesList = [
  {
    heading: "Easy registration",
    description:
      "Sole proprietorship does not have any formal incorporation or dissolution process - as its the same as the Proprietor. However, to operate a business, the proprietor may have to obtain certain registrations and licenses to be compliant with the laws and regulations of India.",
  },
  {
    heading: "Lower compliance",
    description:
      "As most proprietorship are only registered with government departments like Income Tax & GST, the compliance burden will be lower. On the other hand, entities like LLP or Company are registered with the Ministry of Corporate Affairs and have to file various statutory returns and be audited by a Chartered Accountant each year.",
  },
  {
    heading: "Simplicity",
    description:
      " As there are no partners, shareholders, or directors, the proprietor can easily operate this business with minimal documents and consent requirements. Hence, this type of business structure is best suited for very small businesses.",
  },
  {
    heading: "Business decision",
    description:
      "In a proprietorship, the business owner takes all business decisions. There is no consent or approval required from any other person. Hence, a proprietor can normally take quick decisions regarding his business affairs.",
  },
  {
    heading: "Complete control",
    description:
      "As sole proprietorship is owned only by the proprietor. He/she has complete control over the assets, revenue, expenses and all business operations.",
  },
];

const disadvantagesList = [
  {
    heading: "Funding",
    description:
      "This type of business structure relies solely on one persons savings, borrowings and credit history. As there are no other persons are involved in this type of business structure, raising funds from banks will be very hard. Raising equity funds will not be possible - as this type of business entity does not allow for profit sharing or shareholding.",
  },
  {
    heading: "Personal liability",
    description:
      "If a proprietor is unable to pay business loans or taxes, in a proprietorship - the personal assets of the business owner can be attached or encumbered. Hence, in this type of business structure - the proprietor will be held personally liable until all the liabilities are extinguished.",
  },
  {
    heading: "Business continuity",
    description:
      "In case of death or disability of the business owner, the sole proprietorship will be automatically dissolved. Hence, there is will be no business continuity.",
  },
  {
    heading: "Growth",
    description:
      "A proprietorship has various restrictions in terms of fundraising, liability and business continuity. Hence, only very small businesses that are in the unorganized sector operate as proprietorship.",
  },
  {
    heading: "Unincorporated business",
    description:
      "Sole proprietorship are unincorporated businesses. Hence, there is no centralized database available to see if a sole proprietorship is active or inactive. Thus, sole proprietorship entities are mostly classified as unorganized business.",
  },
];

const registrationSteps = [
  {
    heading: "Step 1",
    description: "Login to LEDGERS using the email address for payment.",
  },
  {
    heading: "Step 2",
    description: "Go to Services Tab & Select Proprietorship Engagement",
  },
  {
    heading: "Step 3",
    description: "Upload your PAN & Aadhar Card Copy",
  },
  {
    heading: "Step 4",
    description:
      "An ESR Consultants Registration Expert will file the registration application with GST Department, MSME Department and Bank for Current Account.",
  },
  {
    heading: "Step 5",
    description:
      "Access to LEDGERS Accounting Software is provided for GST invoicing, GST filing and other services.",
  },
];

const compliancesList = [
  {
    heading: "Income Tax Filing",
    description:
      "The business owner of a proprietorship will have to file personal income tax return using form ITR-3 or ITR-4.",
  },
  {
    heading: "Business Income",
    description:
      "Only income tax forms ITR-3 and ITR-4 allow for declaring business income. Hence, all proprietorships will have to file form ITR-3 or ITR-4 to be compliant with the income tax regulations.",
  },
  {
    heading: "GST Return Filing",
    description:
      " If a proprietorship has GST registration, GST return must be filed every month and quarter as per the scheme under which the business is registered.",
  },
  {
    heading: "TDS Returns",
    description:
      "In case the proprietorship is having employees or purchasing goods/services beyond a certain threshold - tax must be deducted at source and TDS returns must be filed every quarter.",
  },
];

const Proprietorship = () => {
  return (
    <div className="flex flex-col min-h-screen fillings-screen">
      <Navbar />
      <div className="flex-1 py-10 px-10 lg:px-0 lg:w-[80%] mx-auto">
        <MainHeading content="Proprietorship Registration" />
        <div className="flex gap-10">
          <div className="lg:w-[80%]">
            <section>
              <Paragraph
                content="Sole proprietorship is one of the oldest and easiest Business
              Structure to start in India. A proprietorship is a type of
              business that is owned, managed, and controlled by one person -
              who is the proprietor. As the proprietorship and proprietor are
              one and the same, it is very easy to start and there are very
              minimal compliance requirements."
              />
              <Paragraph
                content="As the proprietor and the business are one and the same, a
              proprietorship cannot have other partners or shareholders.
              Further, there is no limited liability protection for the
              proprietor from the business activities conducted in the sole
              proprietorship. Hence, this type of business entity is best suited
              for every small businesses with no more than 5 employees."
              />

              <Paragraph
                content="ESR Consultants can assist you in registering a Sole Proprietorship,
              a simple and efficient business structure that is ideal for solo
              entrepreneurs. With our expert guidance and streamlined process,
              you can start your proprietorship quickly and hassle-free. Start
              your Sole Proprietorship with us and unlock the potential of your
              business ideas."
              />
            </section>
            <section>
              <SubHeading content="Proprietorship Registration in India" />
              <Paragraph
                content=" Registering a proprietorship in India follows a unique approach,
              as there isn't a dedicated government-established
              registration process for this business structure. Instead, a
              proprietorship gains recognition through tax registrations
              mandated by relevant laws and regulations.One pivotal tax
              registration is the GST (Goods and Services Tax) Registration,
              which must be secured under the proprietor's name to
              formalize the business's proprietorship status. This
              registration signifies that the proprietor is conducting business
              within the framework of a proprietorship."
              />
            </section>
            <section>
              <SubHeading content="Essential Licenses and Registrations for Proprietorships" />
              <Paragraph content="To run a proprietorship in India, you need important licenses and registrations, including:" />
              <ul className="ml-8 text-gray-500 mb-3">
                <li className="list-disc">
                  Get a Permanent Account Number (PAN) and an Aadhaar card for
                  your business identification.
                </li>
                <li className="list-disc">
                  Register under{" "}
                  <a href="https://www.ESR Consultants.com/udyam-registration">
                    UDYAM
                  </a>
                  , which recognizes your business as a Micro, Small, or Medium
                  Enterprise (MSME) and offers government benefits.
                </li>
                <li className="list-disc">
                  If your business exceeds specific thresholds, you must
                  register for{" "}
                  <a href="https://www.ESR Consultants.com/gst-registration">
                    Goods and Services Tax (GST)
                  </a>{" "}
                  to collect and pay GST.
                </li>
                <li>
                  Open a separate{" "}
                  <a href="https://www.ESR Consultants.com/banking">
                    bank account
                  </a>{" "}
                  for your business to manage finances smoothly.
                </li>
                <li>
                  Depending on your business location, register under your
                  state&apos;s Shops and Establishment Act to follow local labor
                  regulations.
                </li>
              </ul>
            </section>
            <section>
              <SubHeading content="Advantages of Proprietorship" />

              <ul className="list-none text-gray-500 mb-3">
                {advantagesList.map((item) => (
                  <ListPoint
                    heading={item.heading}
                    description={item.description}
                    key={item.heading}
                  />
                ))}
              </ul>
            </section>
            <section>
              <SubHeading content="Disadvantages of Proprietorship" />
              <ul className="list-none text-gray-500 mb-3">
                {disadvantagesList.map((item) => (
                  <ListPoint
                    heading={item.heading}
                    description={item.description}
                    key={item.heading}
                  />
                ))}
              </ul>
            </section>
            <section>
              <SubHeading content="Registering a Proprietorship Online through ESR Consultants" />

              <Paragraph
                content="You can easily register a proprietorship online through
              ESR Consultants. To register a proprietorship, only the PAN & Aadhaar
              card of the business owner is required. We can help you obtain the
              following registrations in less than 15 days:"
              />
              <ul className="mb-3">
                <CheckItem point="GST Registration" />
                <CheckItem point="UDYAM Registration" />
                <CheckItem point="Zero-Balance Business Current Account with LEDGERS Accounting Software" />
              </ul>
              <Paragraph content="Once, you have registered for the proprietorship registration on ESR Consultants, please follow the steps below and upload the following documents by logging into LEDGERS." />
              {registrationSteps.map((step) => (
                <ListPoint
                  heading={step.heading}
                  description={step.description}
                  key={step.heading}
                />
              ))}
            </section>
            <section>
              <SubHeading content="PAN Card for Proprietorship Firm" />
              <Paragraph
                content="A proprietorship is not a separate business entity. Hence, there
              is no procedure to obtain proprietorship PAN card. The PAN card of
              the business owner is used for the proprietorship."
              />
            </section>
            <section>
              <SubHeading content="Obtaining GST Registration for Proprietorship" />
              <Paragraph
                content="GST registration for a proprietorship will be obtained by
              ESR Consultants as a part of the service. The following documents are
              required for GST registration:"
              />

              <ul className="mb-3">
                <CheckItem point="Permanent Account Number (PAN) of Proprietor" />
                <CheckItem point="Digital Signature Certificate of the Authorized Signatory" />
                <CheckItem point="Consent by Proprietor for obtaining GST Registration" />
                <CheckItem point="Photograph of Proprietor and Authorized Signatory" />
                <CheckItem
                  point="Bank Account Details: A scanned copy of a cancelled cheque with the business entity's name, bank account number, MICR, IFSC, and branch information.
"
                />
                <CheckItem point="Declaration / Authorization to Authorized Signatory" />
                <CheckItem point="For commercial purposes, the rent / lease agreement should be in the name of the proprietor." />
                <CheckItem point="Additional documents such as Aadhaar Card, Driving Licence, Passport, or Voter ID in the name of the Owner with the complete address of the premises should also be provided if the address on the ownership document (Property Tax Receipt or Municipal Khata copy or copy of Electricity Bill) is incomplete." />
              </ul>
            </section>
            <section>
              <SubHeading content="Obtaining UDYAM Registration for Proprietorship" />
              <Paragraph
                content="Udyam Registration can be obtained online to avail various
              benefits available for small and medium sized businesses. Once the
              GST registration is obtained, the ESR Consultants team would help
              obtain UDYAM registration by submitting Aadhaar card, PAN card and
              GST certificate to Government."
              />
            </section>
            <section>
              <SubHeading content="Bank Account for Proprietorship" />
              <Paragraph
                content="The bank current account for a proprietorship will be opened in
              the name of the business owner using his/her PAN. The business
              owner will have to submit proof for doing business. Any two of the
              following documents can be submitted to create a current account
              instead of savings account in the name of proprietorship:"
              />
              <ol className="text-gray-500 mb-2 ml-7">
                <li className="list-decimal">GST registration certificate</li>
                <li className="list-decimal">
                  Shop & Establishment Act license
                </li>
                <li className="list-decimal">
                  License issued by the Registering authority like Certificate
                  of Practice issued by Institute of Chartered Accountants of
                  India, Institute of Cost Accountants of India, Institute of
                  Company Secretaries of India, Indian Medical Council, Food and
                  Drug Control Authorities,
                </li>
                <li className="list-decimal">
                  Banks may also accept IEC (Importer Exporter Code) issued to
                  the proprietary concern by the office of DGFT as an identity
                  document for opening a bank account etc.
                </li>
              </ol>
            </section>
            <section>
              <SubHeading content="Obtaining Shops & Establishment Act License for Proprietorship" />
              <Paragraph
                content="From state to state, the process for acquiring a Shop and
              Establishment registration certificate changes. It is available
              both online and offline. In most states, Shop and Establishment
              Act registration can be obtained within 2-3 weeks."
              />
            </section>
            <section>
              <SubHeading content="Proprietorship Business Activities" />
              <Paragraph
                content="A proprietorship can undertake any type of business activity that
              an Indian person can undertake across most sectors and industries.
              However, there are some activities like banking, insurance,
              financial services, lending, defence, telecommunication that
              require specialized approval. In such cases, a company is
              mandatorily required to obtain various approvals from the
              Government. Hence, proprietorship business structure only works
              for business activities that are small scale in nature."
              />
            </section>
            <section>
              <SubHeading content="Compliances for Proprietorship" />
              <Paragraph
                content="The following are some of the compliances that are applicable
                for a sole proprietorship:"
              />
              <ul className="my-2">
                {compliancesList.map((item) => (
                  <ListPoint
                    heading={item.heading}
                    description={item.description}
                    key={item.heading}
                  />
                ))}
              </ul>
              <Paragraph
                content="In addition to the above, various other compliance requirements
                maybe applicable to the proprietorship based on industry and
                location."
              />
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

export default Proprietorship;
