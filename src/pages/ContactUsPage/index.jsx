import { useRef } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "../../components/Footer";
import InputField from "../../components/InputField";
import Navbar from "../../components/Navbar";
import emailjs from "@emailjs/browser";
import "./index.css";

const fieldTags = [
  {
    label: "Full Name*",
    id: "senderName",
    name: "senderName",
  },
  {
    label: "Email",
    id: "email",
    name: "email",
  },
  {
    label: "Phone Number *",
    id: "phoneNumber",
    name: "phoneNumber",
  },
  {
    label: "Subject *",
    id: "subject",
    name: "subject",
  },
];

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_54v93qc", "template_ekpcwyx", form.current, {
        publicKey: "LHmmOZqeqaBopAuOE",
        privateKey: "9RRNXbIKe6BybTL7RuVtl"
      })
      .then(
        () => {
          toast.success("Email sent successfully!");
        },
        (error) => {
          toast.error("Failed to send email. Please try again later.");
          console.error("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <ToastContainer />
      <Navbar />
      <section className="flex-1 flex items-center justify-center px-10 md:px-1 lg:w-[50%] xl:w-[40%] py-20 mx-auto">
        <form className="h-fit" onSubmit={sendEmail} ref={form}>
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
              placeholder="Enter Query"
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


export default ContactForm