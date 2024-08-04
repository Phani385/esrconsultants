import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import {
  CheckItem,
  FooterTopLink,
  ListPoint,
  MainHeading,
  Paragraph,
  SideHeading,
  SubHeading,
} from "../../components/UtilityComponents";
const RegistrationSection = ({content}) => {
  const {
    title,
    description,
    subHeading1,
    subParas1,
    finalHeading,
    finalParagraph,
  } = content;
  return (
    <div className="flex flex-col min-h-screen fillings-screen">
      <Navbar />
      <div className="flex-1 py-10 px-10 lg:px-0 lg:w-[80%] mx-auto">
        <MainHeading content={title} />
        <div className="flex gap-10">
          <div className="lg:w-[80%]">
            {description.map((para, index) => (
              <Paragraph key={index} content={para} />
            ))}
            <section>
              <SubHeading content={subHeading1} />
              {subParas1.map((paras, index) => (
                <Paragraph key={index} content={paras} />
              ))}
            </section>
            <section>
              <SubHeading content={finalHeading} />
              {finalParagraph.map((paras, index) => (
                <Paragraph key={index} content={paras} />
              ))}
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

export default RegistrationSection;
