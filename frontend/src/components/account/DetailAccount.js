import React, { useState, useEffect } from "react";

import { getAccount } from "../../api.js";

export const DetailAccount = ({ match }) => {
  const [account, setAccount] = useState();

  useEffect(() => {
    const fetchAccount = async () => {
      const account = await getAccount(match.params.id);

      setAccount(account);
    };
    fetchAccount();
  }, [match.params.id]);

  return (
    <div className="card text-left m-3">
      <h5 className="card-header">Detail View</h5>
      <div className="card-body">
        {account ? (
          <>
            <p>Name: {account.name}</p>
            <p>Email: {account.email}</p>
            <p>Phone: {account.phone}</p>
            <p>Description: {account.description}</p>
          </>
        ) : (
          <p>loading</p>
        )}
      </div>
    </div>
  );
};
