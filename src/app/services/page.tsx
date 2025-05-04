import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Services from "@/components/Services";
import Solutions from "@/components/solutions";

export default function Ser() {

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Services />
      <Solutions />
      <Footer />
    </div>
  );
};