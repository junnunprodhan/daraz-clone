"use client";
import { SessionProvider } from "next-auth/react";
import React from "react";
import { Provider as ReduxProvider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistedStore, store } from "../store/store";

function Provider({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <ReduxProvider store={store}>
        <PersistGate loading={false} persistor={persistedStore}>
          {children}
        </PersistGate>
      </ReduxProvider>
    </SessionProvider>
  );
}

export default Provider;
