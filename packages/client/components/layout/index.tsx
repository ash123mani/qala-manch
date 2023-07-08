import React from "react";
import Link from "next/link";
import {  Recursive  } from "next/font/google";
import layoutClassNames from "./style.module.scss";

const inter =  Recursive ({ subsets: ["latin"] });

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className={`${inter.className}`}>
      <nav>
        <header className={layoutClassNames["layout-logo"]}>
          <Link href="/" className={layoutClassNames.link}>Qala Manch</Link>
        </header>
      </nav>
      {children}
    </div>
  );
};

export default Layout;
