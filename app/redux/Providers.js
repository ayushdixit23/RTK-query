"use client";
import React from "react";
import { Provider } from "react-redux";
import { store } from "./store";
import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";
import { Api } from "./Slices/apiSlice";

const Providers = ({ children }) => {
	return (
		<Provider store={store}>
			<ApiProvider api={Api}>{children}</ApiProvider>
		</Provider>
	);
};

export default Providers;
