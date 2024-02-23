import { ReactNode } from "react";
import { FC } from "react";
import Nav from "@components/Nav";
import "@styles/global.css";
import Provider from "@components/Provider";

export const metadata = {
  title: "Ilaro",
  description: "Developer tools and news",
};

interface RootLayoutProps {
  children?: ReactNode[];
}

const RootLayout: FC<RootLayoutProps> = (props) => {
  return (
    <html lang="en">
      <body>
        <Provider>
          <div className="main">
            <div className="gradient" />
          </div>
          <main className="app">
            <Nav/>
            {props.children}
          </main>
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;
