import React, { useState, useEffect } from "react";
import { AccountForm } from "../account/AccountForm";
import { useRouteMatch, useHistory } from "react-router-dom";
import { getAccount, updateAccount } from "../../api.js";

export const EditAccount = () => {
  const match = useRouteMatch();
  const [account, setAccount] = useState();
  const history = useHistory();

  useEffect(() => {
    const fetchAccount = async () => {
      const account = await getAccount(match.params.id);
      setAccount(account);
    };
    fetchAccount();
  }, [match.params.id]);

  const onSubmit = async (data) => {
    await updateAccount(data, match.params.id);
    history.push("/accounts");
  };

  return account ? (
    <div className="container">
      <div className="mt-3">
        <h3>Edit Account Item</h3>
        <AccountForm account={account} onSubmit={onSubmit} />
      </div>
    </div>
  ) : (
    <div>Loading...</div>
  );
};
