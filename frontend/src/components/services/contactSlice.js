// Or from '@reduxjs/toolkit/query' if not using the auto-generated hooks

// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { apiSlice } from "./apiSlice";

export const contactSlice = apiSlice.injectEndpoints({
  // reducerPath: "contactsApi",
  // baseQuery: fetchBaseQuery({ baseUrl: "/api" }),
  tagTypes: ["Contact"],
  endpoints: (build) => ({
    getContacts: build.query({
      query: () => "/contacts",
      // Provides a list of `Contacts` by `id`.
      // If any mutation is executed that `invalidate`s any of these tags, this query will re-run to be always up-to-date.
      // The `LIST` id is a "virtual id" we just made up to be able to invalidate this query specifically if a new `Contacts` element was added.
      providesTags: (result) =>
        // is result available?
        result
          ? // successful query
            [
              ...result.map(({ id }) => ({ type: "Contact", id })),
              { type: "Contact", id: "LIST" },
            ]
          : // an error occurred, but we still want to refetch this query when `{ type: 'Contact', id: 'LIST' }` is invalidated
            [{ type: "Contact", id: "LIST" }],
    }),
    addContact: build.mutation({
      query(body) {
        return {
          url: `/contacts`,
          method: "POST",
          body,
        };
      },
      // Invalidates all Post-type queries providing the `LIST` id - after all, depending of the sort order,
      // that newly created contact could show up in any lists.
      invalidatesTags: [{ type: "Contact", id: "LIST" }],
    }),
    getContact: build.query({
      query: (id) => `/contacts/${id}`,
      providesTags: (result, error, id) => [{ type: "Contact", id }],
    }),
    updateContact: build.mutation({
      query(data) {
        const { id, ...body } = data;
        return {
          url: `/contacts/${id}`,
          method: "PUT",
          body,
        };
      },
      // Invalidates all queries that subscribe to this Contact `id` only.
      // In this case, `getContact` will be re-run. `getContacts` *might*  rerun, if this id was under its results.
      invalidatesTags: (result, error, { id }) => [
        { type: "Contact", id },
        { type: "Contact", id: "LIST" },
      ],
    }),
    deleteContact: build.mutation({
      query(id) {
        return {
          url: `/contacts/${id}`,
          method: "DELETE",
        };
      },
      // Invalidates all queries that subscribe to this Contact `id` only.
      invalidatesTags: (result, error, id) => [
        { type: "Contact", id },
        { type: "Contact", id: "LIST" },
      ],
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetContactsQuery,
  useAddContactMutation,
  useGetContactQuery,
  useUpdateContactMutation,
  useDeleteContactMutation,
} = contactSlice;
