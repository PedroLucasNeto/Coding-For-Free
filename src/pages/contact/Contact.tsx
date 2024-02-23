import "./Contact.scss";
import { TbMail, TbBrandWhatsapp, TbMapPin, TbWorld } from "react-icons/tb";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();
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
        import.meta.env.SERVICE_ID,
        import.meta.env.TEMPLATE_ID,
        form.current,
        import.meta.env.PUBLIC_KEY
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
          <h2>{t("contact-page-title")}</h2>
          <p>{t("contact-page-description")}</p>
          <label htmlFor="name" placeholder="Ex: Pedro Lucas">
            {t("contact-page-label1")}
          </label>
          <input type="text" name="user_name" required />
          <label htmlFor="name">Email</label>
          <input type="email" name="user_email" required />
          <label htmlFor="name">{t("contact-page-label2")}</label>
          <textarea name="message" required />
          <button type="submit">{t("contact-page-button")}</button>
        </form>
      </div>

      <div className="info_container">
        <h2>{t("contact-page-title2")}</h2>
        <ul>
          <li>
            <a
              href="https://goo.gl/maps/kU7wxdBnobnL6SC26"
              target={"_blank"}
              className="title"
            >
              <TbMapPin />
              <h3>{t("contact-page-info1")}</h3>
            </a>
          </li>
          <li>
            <a
              href="https://wa.me/5583998107584"
              target={"_blank"}
              className="title"
            >
              <TbBrandWhatsapp />
              <h3>WhatsApp</h3>
            </a>
          </li>
          <li>
            <a
              href="mailto:contactcodingforfree@gmail.com"
              target={"_blank"}
              className="title"
            >
              <TbMail />
              <h3>Email</h3>
            </a>
          </li>
          <li>
            <a href="/" className="title">
              <TbWorld />
              <h3>{t("contact-page-info2")}</h3>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;
