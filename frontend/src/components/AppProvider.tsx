import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export const AppProvider = ({ children }: Props) => {
  return <>{children}</>;
};