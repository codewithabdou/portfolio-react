import React from "react";
import {HeroImageSecond,Form} from "../";
import ImageUrl from "../../assets/contact-bg.jpg";

const Contact = () => {
  return (
    <div>
      <HeroImageSecond
        title={"CONTACT."}
        description={"Let's have a chat"}
        ImageUrl={ImageUrl}
      />
      <Form/>
    </div>
  );
};

export default Contact;
