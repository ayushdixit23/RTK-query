import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const Api = createApi({
	reducerPath: "api",
	baseQuery: fetchBaseQuery({
		baseUrl: "https://dummyjson.com/"
	}),
	endpoints: (builder) => ({
		getAllProducts: builder.query({
			query: () => "products"
		}),
		getSearchedProduct: builder.query({
			query: (name) => `products/search?q=${name}`
		})
	})
})

export const { useGetAllProductsQuery, useGetSearchedProductQuery } = Api