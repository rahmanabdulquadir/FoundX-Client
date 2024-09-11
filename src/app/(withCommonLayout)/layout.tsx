/* eslint-disable prettier/prettier */

import { Providers } from "../providers";

import { Navbar } from "@/src/components/UI/navbar";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
      <div className="relative flex flex-col h-screen">
        <Navbar />
        <main>{children}</main>
      </div>
    </Providers>
  );
};

export default layout;
