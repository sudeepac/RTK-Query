import React from "react";
import { useForm } from "react-hook-form";

export const AccountForm = ({ account, onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: account ? account.name : "",
      email: account ? account.email : "",
      phone: account ? account.phone : "",
      description: account ? account.description : "",
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
