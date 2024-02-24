import { ReactNode } from "react";
import { FC } from "react";
import Nav from "@app/components/Nav";
import "@styles/global.css";
import ProviderWrapper from "@app/components/ProviderWrapper";

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
        <ProviderWrapper>
          <main className="app">
            <Nav/>
            {props.children}
          </main>
        </ProviderWrapper>
      </body>
    </html>
  );
};

export default RootLayout;
