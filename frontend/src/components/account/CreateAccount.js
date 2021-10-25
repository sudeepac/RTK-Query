import React from "react";
import { AccountForm } from "../account/AccountForm";
import { useHistory } from "react-router-dom";
import { createAccount } from "../../api.js";

export const CreateAccount = () => {
  const history = useHistory();

  const onSubmit = async (data) => {
    await createAccount(data);
    history.push("/accounts");
  };

  return (
    <div className="container">
      <div className="mt-3">
        <h3>Create Todo Item</h3>
        <AccountForm onSubmit={onSubmit} />
      </div>
    </div>
  );
};
