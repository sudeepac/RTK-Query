import React, { useMemo } from "react";

import { useDeleteContactMutation } from "../services/contactSlice";

export const DeleteContact = ({ match }) => {
  const [deleteContact, { isLoading: isDeleting, isSuccess }] =
    useDeleteContactMutation();

  useMemo(() => {
    const processDelete = async () => {
      await deleteContact(match.params.id);
    };
    processDelete();
  }, [deleteContact, match.params.id]);

  return (
    <div className="card text-center m-3">
      <h5 className="card-header">DELETE Request with Async/Await</h5>
      <div className="card-body">
        Status: {isDeleting ? "...deleting" : isSuccess && "success!"}
      </div>
    </div>
  );
};
