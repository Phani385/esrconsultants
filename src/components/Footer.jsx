import { title } from "process";
import { FooterTopLink } from "./UtilityComponents";

const footerLinks = [
  {
    title: "Official site of Income tax",
    url: "https://incometaxindia.gov.in/Pages/default.aspx",
  },
  {
    title: "FEMA",
    url: "https://www.rbi.org.in/scripts/Fema.aspx",
  },
  {
    title: "ICAI Udin",
    url: "https://udin.icai.org/",
  },
  {
    title: "ICAI SSP Portal",
    url: "https://cdn3.digialm.com/per/g21/pub/1666/SelfServices/templates/Login%20Folder21052019122446/Login%20Folder/ICAI%20Phase%20II%20Login%20Page521052019122546.html",
  },
  {
    title: "National Security Depository Ltd.",
    url: "https://nsdl.co.in/",
  },
  {
    title: "Goods and Service Tax",
    url: "https://www.gst.gov.in/",
  },
  {
    title: "GST Rate Finder",
    url: "https://cbic-gst.gov.in/gst-goods-services-rates.html",
  },
  {
    title: "Employee Provident Fund",
    url: "https://unifiedportal-mem.epfindia.gov.in/memberinterface/",
  },
  {
    title: "DVAT",
    url: "https://dvat.gov.in/website/home.html"
  },
  {
    title: "FSSAI",
    url: "https://fssai.gov.in/",
  },
  {
    title: "Department of Labour",
    url:   "https://labour.gov.in/"
  },
  {
    title: "Export Promotion Council for Handicraft",
    url: "https://www.epch.in/"
  },
  {
    title: "Central Public Procurment Portal",
    url: "https://eprocure.gov.in/eprocure/app"
  },
  {
    title: "Service Tax",
    url: "https://cbic-gst.gov.in/cbec-portal-ui/"
  },
  {
    title: "The National Small Industries Corporation",
    url: "https://www.nsic.co.in/"
  },
  {
    title: "New/Reprint PAN",
    url: "https://tin.tin.nsdl.com/pantan/StatusTrack.html"
  },
  {
    title: "Online Direct Tax Payments",
    url: "https://eportal.incometax.gov.in/iec/foservices/#/e-pay-tax-prelogin/user-details"
  },
  {
    title: "PAN Tracker",
    url: "https://tin.tin.nsdl.com/pantan/StatusTrack.html"
  },
  {
    title: "Ministry of Corporate Affairs",
    url: "https://www.mca.gov.in/mcafoportal/login.do"
  },
  {
    title: "ESIC",
    url: "https://esic.gov.in/"
  },
  {
    title: "Micro Small and Medium Enterprises",
    url: "https://msme.gov.in/"
  },
  {
    title: "Director general foriegn trade(Export Import Code)",
    url: "https://www.dgft.gov.in/CP/"
  },
  {
    title: "Check Refund Status",
    url: "https://tin.tin.nsdl.com/oltas/refundstatuslogin.html"
  },
  {
    title: "Department of Excise, Entertainment & Luxury Tax Department",
    url: "https://delhiexcise.gov.in/DelhiExcise/pages/misc/login.jsp"
  },
];  

const Footer = () => {
  return (
    <footer>
      <section className="bg-base-500 p-10 bg-base-300 lg:px-[10%]">
        <h3 className="text-center text-xl lg:text-2xl font-bold text-secondaryColor-500">
          Helpful Links
        </h3>
        <ul className="grid mt-4 gap-4 grid-cols-1 lg:grid-cols-3">
          {footerLinks.map((link) => (
            <FooterTopLink title={link.title} url={link.url} key={link.url} />
          ))}
        </ul>
      </section>
      <div className="footer p-10 bg-primaryColor text-white lg:px-[10%]">
        <aside>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fillRule="evenodd"
            clipRule="evenodd"
            className="inline-block fill-current"
          >
            <path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
          </svg>
          <p className="font-bold">ESR Corporate Consultants LLP</p>
          <p>
            A Reputed Tax Consultant & Chartered Accountant,
            <br /> who has helped many individuals / organizations <br /> to
            establish business in india
          </p>
          <p>Copyright © 2024 - All right reserved</p>
        </aside>
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
        <aside>
          <p>Firm Name: ESR Corpotate Consultants LLP</p>
          <p>Phone Number: +91 87074 70994</p>
          <p>Email: info@esrconsultants.com</p>
          <p>GSTIN: 07AAYFP7007N1ZF</p>
          <p className="md:max-w-[360px]">
            Add.: W-8, 3rd Floor, West Patel Nagar, New Delhi - 110008 (Near
            Shadipur Metro Station, Pillar No. 232)
          </p>
        </aside>
      </div>
    </footer>
  );
};

export default Footer;
