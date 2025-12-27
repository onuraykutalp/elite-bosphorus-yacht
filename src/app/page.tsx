import Image from "next/image";
import Header from "@/components/Header";
import Slider from "@/components/Slider";
import { MenuCards } from "@/components/MenuCards";
import Footer from "@/components/Footer";
import AboutUs from "@/components/AboutUs";
import { tours } from "../../data/Tours";

export default function Home() {


  return (
    <main>
    <Slider />
    <MenuCards items={Object.entries(tours).map(([slug, tour]) => ({
      id: slug,
      name: tour.title,
      subtitle: tour.subtitle,
      details: tour.duration,
      tour: tour.menu.title,
      service: tour.service,
      price: tour.price,
      slug: slug,
      image: tour.images[0],
    }))} />
    <AboutUs />
    </main>
  );
}
