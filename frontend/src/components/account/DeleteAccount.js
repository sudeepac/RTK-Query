import React, { useState, useEffect } from "react";
import { useRouteMatch } from "react-router-dom";
import { deleteAccount } from "../../api.js";

export const DeleteAccount = () => {
  const match = useRouteMatch();

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
