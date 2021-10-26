import React from "react";
import { useForm } from "react-hook-form";

export const ContactForm = ({ contact, onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: contact ? contact.name : "",
      email: contact ? contact.email : "",
      phone: contact ? contact.phone : "",
      description: contact ? contact.description : "",
    },
  });

  console.log(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="name" {...register("name", {})} />
      <input type="text" placeholder="email" {...register("email", {})} />
      <input type="text" placeholder="phone" {...register("phone", {})} />
      <input
        type="text"
        placeholder="description"
        {...register("description", {})}
      />

      <input type="submit" />
    </form>
  );
};
