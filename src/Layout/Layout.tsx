import { ReactNode } from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

type typeData = {
  children: ReactNode;
};

export const Layout = ({ children }: typeData) => {
  return (
    <div className="h-full">
      <Header />
      {children}
      <Footer />
    </div>
  );
};
