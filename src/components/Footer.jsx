const Footer = () => {
  return (
    <footer className="footer p-10 bg-primaryColor text-white lg:px-[10%]">
      <aside>
        <p>Firm Name: ESR Corpotate Consultants LLP</p>
        <p>PAN: AAYFP7007N</p>
        <p>FRN: 037075N</p>
        <p>GSTIN: 07AAYFP7007N1ZF</p>
        <p className="md:max-w-[360px]">
          Add.: W-8, 3rd Floor, West Patel Nagar, New Delhi - 110008 (Near
          Shadipur Metro Station, Pillar No. 232)
        </p>
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
    </footer>
  );
};

export default Footer;
