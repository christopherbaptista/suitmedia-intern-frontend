import React from "react";
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import "./Contact.css";

const SignupSchema = yup.object().shape({
  Name: yup.string().required(),
  email: yup
    .string()
    .required("Please enter the required field")
    .matches(
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, // Email Pattern
      "Invalid email address"
    ),
  Messages: yup.string().required(),
});

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(SignupSchema),
  });
  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };

  return (
    <div className="contact-container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>CONTACT US</h1>
        <div>
          <label>Name</label>
          <input {...register("Name")} />
          {errors.Name && <p>{errors.Name.message}</p>}
        </div>
        <div style={{ marginBottom: 10 }}>
          <label>Email</label>
          <input {...register("email")} />
          {errors.email && <p>{errors.email.message}</p>}
        </div>
        <div>
          <label>Message</label>
          <input {...register("Messages")} />
          {errors.Messages && <p>{errors.Messages.message}</p>}
        </div>
        <input type="submit" />
      </form>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Contact />, rootElement);
