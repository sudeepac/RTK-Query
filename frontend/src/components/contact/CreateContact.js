import React from "react";
import { ContactForm } from "../contact/ContactForm";
import { useAddContactMutation } from "../services/apiSlice";

export const CreateContact = ({ history }) => {
  const [addContact, { isLoading }] = useAddContactMutation();

  const onSubmit = async (data) => {
    await addContact(data);
    history.push("/contacts");
  };

  return (
    <div className="container">
      <div className="mt-3">
        <h3>Create Contact</h3>
        <ContactForm onSubmit={onSubmit} />
      </div>
    </div>
  );
};
