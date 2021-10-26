import React from "react";
import { AccountForm } from "../account/AccountForm";
import { createAccount } from "../../api.js";

export const CreateAccount = ({ history }) => {
  const onSubmit = async (data) => {
    await createAccount(data);
    history.push("/accounts");
  };

  return (
    <div className="container">
      <div className="mt-3">
        <h3>Create Account</h3>
        <AccountForm onSubmit={onSubmit} />
      </div>
    </div>
  );
};
