import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productApi = createApi({
    reducerPath: "productsApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:9000/" }),
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: () => `stickers`,
        }),
        getProduct: builder.query({
            query: (productID) => `stickers/${productID}`,
        }),
    }),
});

export const { useGetProductsQuery, useGetProductQuery } = productApi;
