import Head from "next/head";
import Image from "next/image";
import Departments from "../components/departments/Departments";
import Footer from "../components/footer/Footer";
import GalleryContainer from "../components/gallery/GalleryContainer";
import Header from "../components/header/Header";
import Hero from "../components/hero/Hero";
import Instalations from "../components/instalations/Instalations";
import Reviews from "../components/reviews/Reviews";
import Slider from "../components/slider/Slider";
import whatsapp from "../public/whatsapp.png";
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Domus Lake Resort</title>
        <meta name="description" content="Hotel Carlos Paz Resort" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
        <link rel="icon" href="/favicons/favicon.png" />
      </Head>

      <div className="contenedor">
        <Header />
        <Hero />
        <div className="whastapp">
          <a href="https://wa.me/3516989361?text=holis" rel="noreferrer" target="_blank">
          <Image alt="whatsapp" src={whatsapp} layout='responsive'/>
          </a >
        
        </div>
        <Departments/>
        <Slider />
        <Instalations />
        <GalleryContainer/>
        <Reviews/>
        <Footer/>
      </div>
    </>
  );
}
