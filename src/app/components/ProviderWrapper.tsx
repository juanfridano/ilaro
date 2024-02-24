"use client";
import { FC, ReactNode } from "react";
import { SessionProvider } from "next-auth/react";
import { Session } from "next-auth";

/**
 * This wrapper is needed so that it the session provider logic can be rendered in the client.
 * The layout should be rendered in the server because it contains metadata.
**/

interface ProviderProps {
  children?: ReactNode;
  session?: Session;
}

const ProviderWrapper: FC<ProviderProps> = ({ children, session }) => {
  return <SessionProvider session={session}>{children}</SessionProvider>;
};

export default ProviderWrapper;
