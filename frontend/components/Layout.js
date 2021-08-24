import NavBar from "./NavBar";
import Header from "./Header";
import Meta from "./Meta";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
