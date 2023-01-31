import "./Contact.scss";
import { TbMail, TbPhone, TbMapPin, TbWorld } from "react-icons/tb";
import { useState, useRef } from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  // const form = useRef<HTMLFormElement | null>(null);
  return (
    <div className="main_container">
      <div>
        <form className="form_container" action="">
          <h2>Contact Us!</h2>
          <p>
            Send us an email message and we'll be glad to respond you as soon as
            we can!
          </p>
          <label htmlFor="name" placeholder="Ex: Pedro Lucas">
            Your Name
          </label>
          <input type="text" />
          <label htmlFor="name">Email</label>
          <input type="text" />
          <label htmlFor="name">Message</label>
          <textarea />
          <button>Send Message</button>
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
