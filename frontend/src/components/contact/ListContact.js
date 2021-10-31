import React from "react";
import { Link } from "react-router-dom";
import { useGetContactsQuery } from "../services/contactSlice";

export const ListContact = () => {
  const {
    data: contacts = [],
    isLoading,
    isFetching,
    isSuccess,
    isError,
    error,
  } = useGetContactsQuery();

  return (
    <div className="container">
      <div className="mt-3">
        <h3>Contact List</h3>
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
            {contacts.map((contact) => (
              <tr key={contact._id}>
                <td>{contact.name}</td>
                <td>{contact.email}</td>
                <td>{contact.phone}</td>
                <td>{contact.description}</td>
                <td>
                  <Link to={`/contacts/view/${contact._id}`}>View</Link> &nbsp;
                  <Link to={`/contacts/edit/${contact._id}`}>Edit</Link> &nbsp;
                  <Link to={`/contacts/delete/${contact._id}`}>Delete</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
