import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

import { useForm } from "react-hook-form";

import { setCredentials } from "../services/authSlice";
import { useLoginMutation } from "../services/apiSlice";

export const Login = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [login, { isLoading }] = useLoginMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // const onSubmit = (data) => console.log(data);

  const onSubmit = async (data) => {
    const user = await login(data).unwrap();
    dispatch(setCredentials(user));
    history.push("/contacts");
  };

  console.log(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="email" placeholder="email" {...register("email", {})} />
      <input type="text" placeholder="password" {...register("password", {})} />

      <input type="submit" />
    </form>
  );
};
