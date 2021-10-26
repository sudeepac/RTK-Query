import React, { useState, useEffect } from "react";

import { deleteAccount } from "../../api.js";

export const DeleteAccount = ({ match }) => {
  const [status, setAccount] = useState();

  useEffect(() => {
    const fetchAccount = async () => {
      await deleteAccount(match.params.id);
      setAccount("deleted");
    };
    fetchAccount();
  }, [match.params.id]);

  return (
    <div className="card text-center m-3">
      <h5 className="card-header">DELETE Request with Async/Await</h5>
      <div className="card-body">Status: {status}</div>
    </div>
  );
};
