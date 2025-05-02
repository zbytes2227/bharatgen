import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Aboutteams from "@/components/Aboutteams";

export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
     <Header />
    <section className="py-12 lg:py-24 bg-teal-900 min-h-screen flex flex-col">
     
      <div className="container mx-auto px-4 flex-grow">
        <div className="flex flex-wrap -mx-4 mb-24">
          <div className="w-full md:w-1/2 px-4 mb-6 md:mb-0">
            <h1 className="font-heading text-6xl text-white">About Us</h1>
          </div>
          <div className="w-full md:w-1/2 px-4">
            <div className="lg:max-w-lg md:ml-auto">
              <p className="text-xl font-medium text-gray-50 mb-10">
                At Quantam, we&apos;re committed to a sustainable future. As a pioneering force in the green energy sector, we&apos;ve been at the forefront of the transition to clean, renewable power sources. Our mission is simple yet profound: to create a world where energy is not only abundant but also environmentally responsible. We believe that by harnessing the power of nature, we can power the world and protect it simultaneously.
              </p>
              <a
                className="inline-flex py-4 px-6 items-center justify-center text-lg font-medium text-teal-900 border border-lime-500 hover:border-teal-900 bg-lime-500 hover:bg-white rounded-full transition duration-300"
                href="#"
              >
                Read More
              </a>
            </div>
          </div>
        </div>
        <div className="border-t w-full border-gray-800"></div>
          
       <Aboutteams />
         
      </div>
    
    </section>
      <Footer />
      </div>
  );
}