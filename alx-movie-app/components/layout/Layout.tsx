import { ComponentProps } from "@/interfaces";
import Header from "./Header";
import Footer from "./Footer";

const Layout: React.FC<ComponentProps> = ({ childeren }) => {
  return (
    <>
      <Header />
      <main className="min-h-screen">{childeren}</main>
      <Footer />
    </>
  );
};

export default Layout;
