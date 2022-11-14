import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { MdCancel } from "react-icons/md";

import "./FormStyles.css";

const Form = () => {
  const [submitted, setSubmitted] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    if (
      e.target[0]._valueTracker.getValue().length &&
      e.target[1]._valueTracker.getValue().length &&
      e.target[2]._valueTracker.getValue().length &&
      e.target[3]._valueTracker.getValue().length
    )
      emailjs
        .sendForm(
          "service_ojxksbs",
          "template_otg214f",
          form.current,
          "h4y1f4VnyhWjUSNim"
        )
        .then(
          (result) => {
            console.log(result.text);
            setSubmitted(true);
          },
          (error) => {
            console.log(error.text);
          }
        );
  };

  return (
    <div className="form">
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <br />
        <input
          type="text"
          name="user_name"
          placeholder="Example : Habouche Abderrahmène"
        ></input>
        <br />
        <label>Email</label>
        <br />
        <input
          type="email"
          name="user_email"
          placeholder="Example : kk_habouche@esi.dz"
        ></input>
        <br />
        <label>Subject</label>
        <br />
        <input
          type="text"
          name="user_subject"
          placeholder="Example : Collaboration ,encouragement ..."
        ></input>
        <br />
        <label>Message</label>
        <br />
        <textarea
          name="user_message"
          type="text"
          rows="6"
          placeholder="Type your message here"
        ></textarea>
        <br />
        <button type="submit" className="btn">
          submit
        </button>
      </form>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        {submitted && (
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              backgroundColor: "rgba(2, 230, 127, 0.929)",
              marginTop: "1rem",
              padding: "0.5rem",
              borderRadius: "1rem",
              maxWidth: "20rem",
              borderWidth: 1,
              borderStyle: "solid",
              borderColor: "rgba(255, 255, 255, 0.4)",
            }}
          >
            <p
              style={{
                fontSize: "0.8rem",
                color: "black",
                marginRight: "0.5rem",
              }}
            >
              Your message has been sent succesfully
            </p>
            <MdCancel
              size={20}
              onClick={() => setSubmitted(false)}
              style={{
                cursor: "pointer",
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Form;
