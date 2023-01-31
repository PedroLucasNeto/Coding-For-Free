import "./Contact.scss";
import { TbMail, TbPhone, TbMapPin, TbWorld } from "react-icons/tb";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { contactInfo } from "../../utils/email_key";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const sent = () =>
    toast("Email sent successfully!", {
      draggable: true,
      position: toast.POSITION.BOTTOM_LEFT,
    });

  const notSent = () =>
    toast("Email couldn't be sent. Please try again!", {
      draggable: true,
      position: toast.POSITION.BOTTOM_LEFT,
    });

  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: any) => {
    e.preventDefault();

    if (!form.current) return;
    emailjs
      .sendForm(
        contactInfo.serviceId,
        contactInfo.templateId,
        form.current,
        contactInfo.publicKey
      )
      .then(
        (result) => {
          console.log(result.text);
          sent();
          setTimeout(() => {}, 3000);
        },
        (error) => {
          notSent();
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  // const form = useRef<HTMLFormElement | null>(null);
  return (
    <div className="main_container">
      <ToastContainer />
      <div>
        <form
          ref={form}
          onSubmit={sendEmail}
          className="form_container"
          action=""
        >
          <h2>Contact Us!</h2>
          <p>
            Send us an email message and we'll be glad to respond you as soon as
            we can!
          </p>
          <label htmlFor="name" placeholder="Ex: Pedro Lucas">
            Your Name
          </label>
          <input type="text" name="user_name" required />
          <label htmlFor="name">Email</label>
          <input type="email" name="user_email" required />
          <label htmlFor="name">Message</label>
          <textarea name="message" required />
          <button type="submit">Send Message</button>
        </form>
      </div>

      <div className="info_container">
        <h2>More info</h2>
        <ul>
          <li>
            <TbMapPin className="" />
            <span className="title">Address:</span> Campina Grande, Paraíba,
            Brazil.
          </li>
          <li>
            <TbPhone className="" />
            <span className="title">Phone:</span> +55 83 9 9810-7584
          </li>
          <li>
            <TbMail className="" />
            <span className="title">Email:</span> contactcodingforfree@gmail.com
          </li>
          <li>
            <TbWorld className="" />
            <span className="title">Site: </span>
            <a href="https://harlon.netlify.app/" target={"_blank"}>
              https://harlon.netlify.app/
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;
