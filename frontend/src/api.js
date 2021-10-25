export const getAccounts = () =>
  fetch("http://localhost:5000/api/accounts/").then((res) => res.json());

export const getAccount = (id) =>
  fetch(`http://localhost:5000/api/accounts/${id}`).then((res) => res.json());

export const createAccount = (account) =>
  fetch("http://localhost:5000/api/accounts/", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(account),
  });

export const updateAccount = (account, id) =>
  fetch(`http://localhost:5000/api/accounts/${id}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(account),
  });

export const deleteAccount = (id) =>
  fetch(`http://localhost:5000/api/accounts/${id}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(),
  }).then((res) => res.json());
