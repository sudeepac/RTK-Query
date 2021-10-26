import React from "react";
import { useGetContactQuery } from "../services/apiSlice";

export const DetailContact = ({ match }) => {
  const {
    data: contact,
    isFetching,
    isSuccess,
  } = useGetContactQuery(match.params.id);
  return (
    <div className="card text-left m-3">
      <h5 className="card-header">Detail View</h5>
      <div className="card-body">
        {contact ? (
          <>
            <p>Name: {contact.name}</p>
            <p>Email: {contact.email}</p>
            <p>Phone: {contact.phone}</p>
            <p>Description: {contact.description}</p>
          </>
        ) : (
          <p>loading</p>
        )}
      </div>
    </div>
  );
};
