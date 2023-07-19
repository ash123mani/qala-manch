import React from "react";
import Link from "next/link";
import {  Recursive  } from "next/font/google";
import layoutClassNames from "./style.module.scss";

const inter =  Recursive ({ subsets: ["latin"] });

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className={`${inter.className} ${layoutClassNames["container"]}`}>
      <nav>
        <header className={layoutClassNames["header"]}>
          <Link href="/" className={layoutClassNames.link}>Qala Manch</Link>
        </header>
      </nav>
      <main className={layoutClassNames["layout"]}>
        {children}
      </main>
    </div>
  );
};

export default Layout;
