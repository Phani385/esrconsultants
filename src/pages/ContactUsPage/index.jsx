import Footer from "../../components/Footer";
import InputField from "../../components/InputField";
import Navbar from "../../components/Navbar";
import './index.css'

const fieldTags = [
  {
    label: "Full Name*",
    id: "senderName",
    name: "sender name",
  },
  {
    label: "Email",
    id: "email",
    name: "email",
  },
  {
    label: "Phone Number *",
    id: "phoneNumber",
    name: "phone number",
  },
  {
    label: "Subject *",
    id: "subject",
    name: "subject",
  },
];

const ContactForm = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Navbar />
      <section className="flex-1 flex items-center justify-center px-10 md:px-1 lg:w-[50%] xl:w-[40%] py-20 mx-auto">
        <form className="h-fit">
          <h2 className="text-2xl font-bold mb-3">Contact Us</h2>
          {fieldTags.map((tags) => (
            <InputField
              label={tags.label}
              id={tags.id}
              key={tags.id}
              name={tags.name}
            />
          ))}
          <div className="input-container textarea-container">
            <textarea
              name="message"
              id="message"
              placeholder=" "
              rows="8"
              cols="10"
            ></textarea>
            <label htmlFor="message" className="input-label">
              Message *
            </label>
          </div>
          <p className="mt-20">
            By submiting this form you are consenting that, ESR Corpotate
            Consultants LLP will store and use these data for further
            communication(s).
          </p>
          <button
            type="submit"
            className=" btn bg-secondaryColor-500 hover:bg-secondaryColor-600 px-8 my-3 text-white"
          >
            Submit
          </button>
        </form>
      </section>
      <Footer />
    </div>
  );
};

export default ContactForm;
