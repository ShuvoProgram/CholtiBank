import Footer from "@/components/Layout/Footer/Footer";
import Header from "@/components/Layout/Header/Header";

const HomePageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default HomePageLayout;
