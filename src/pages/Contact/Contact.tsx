import styles from "./styles.module.scss";

import emailjs from "@emailjs/browser";
import { FormEvent, useRef } from "react";
import { useTranslation } from "react-i18next";
import { MdEmail } from "react-icons/md";
import { TbMail, TbBrandWhatsapp, TbMapPin, TbWorld } from "react-icons/tb";
import Input from "../../components/Input/Input";
import TextArea from "../../components/TextArea/TextArea";
import Wrapper from "../../components/Wrapper/Wrapper";
import { notify } from "../../utils/notification";

const MoreInformationCard = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.more_information}>
      <h2>{t("page.contact.information.title")}</h2>
      <nav>
        <a href="https://goo.gl/maps/kU7wxdBnobnL6SC26" target={"_blank"} rel="noreferrer">
          <TbMapPin />
          <span>{t("page.contact.information.address")}</span>
        </a>
        <a href="https://wa.me/5583998107584" target={"_blank"} rel="noreferrer">
          <TbBrandWhatsapp />
          <span>{t("page.contact.information.messager")}</span>
        </a>
        <a href="mailto:contactcodingforfree@gmail.com" target={"_blank"} rel="noreferrer">
          <TbMail />
          <span>{t("page.contact.information.email")}</span>
        </a>
        <a href="/">
          <TbWorld />
          <span>{t("page.contact.information.website")}</span>
        </a>
      </nav>
    </div>
  );
};

const Contact = () => {
  const { t } = useTranslation();
  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) {
      return;
    }

    const response = await emailjs.sendForm(
      import.meta.env.VITE_SERVICE_ID,
      import.meta.env.VITE_TEMPLATE_ID,
      form.current,
      import.meta.env.VITE_PUBLIC_KEY
    );

    if (!response) {
      notify(t("page.contact.form.submit.error"));
      return;
    }

    notify(t("page.contact.form.submit.success"));

    const formElement = e.target as HTMLFormElement;
    formElement.reset();
  };

  return (
    <Wrapper className={styles.container}>
      <div className={styles.form_container}>
        <h2>{t("page.contact.title")}</h2>
        <p>{t("page.contact.description")}</p>
        <form
          ref={form}
          onSubmit={sendEmail}
          className={styles.form}
        >
          <Input
            label={t("page.contact.form.fields.name.label")}
            id="name"
            name="name"
            type="text"
            required
          />
          <Input
            label={t("page.contact.form.fields.email.label")}
            id="email"
            name="email"
            type="email"
            required
          />
          <TextArea
            label={t("page.contact.form.fields.message.label")}
            id="message"
            name="message"
            required
          />
          <button type="submit">
            <span>{t("page.contact.form.button")}</span>
            <MdEmail />
          </button>
        </form>
      </div>
      <MoreInformationCard />
    </Wrapper>
  );
};

export default Contact;
