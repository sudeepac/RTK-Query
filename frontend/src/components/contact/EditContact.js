import React from "react";
import { ContactForm } from "../contact/ContactForm";
// import { useHistory } from "react-router-dom";
import {
  useGetContactQuery,
  useUpdateContactMutation,
} from "../services/apiSlice";

export const EditContact = ({ match, history }) => {
  const { data: contact } = useGetContactQuery(match.params.id);

  const [updateContact, { isLoading }] = useUpdateContactMutation();

  const onSubmit = async (data) => {
    await updateContact({ id: match.params.id, ...data });
    history.push(`/contacts/view/${match.params.id}`);
  };

  return contact ? (
    <div className="container">
      <div className="mt-3">
        <h3>Edit Contact Item</h3>
        <ContactForm contact={contact} onSubmit={onSubmit} />
      </div>
    </div>
  ) : (
    <div>Loading...</div>
  );
};
