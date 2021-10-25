import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getAccounts } from "../../api.js";

export const ListAccount = () => {
  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    const fetchAccounts = async () => {
      const accounts = await getAccounts();
      setAccounts(accounts);
    };
    fetchAccounts();
  }, []);

  return (
    <div className="container">
      <div className="mt-3">
        <h3>Account List</h3>
        <table className="table table-striped mt-3">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Description</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {accounts.map((account) => (
              <tr key={account._id}>
                <td>{account.name}</td>
                <td>{account.email}</td>
                <td>{account.phone}</td>
                <td>{account.description}</td>
                <td>
                  <Link to={`/accounts/view/${account._id}`}>View</Link> &nbsp;
                  <Link to={`/accounts/edit/${account._id}`}>Edit</Link> &nbsp;
                  <Link to={`/accounts/delete/${account._id}`}>Delete</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
