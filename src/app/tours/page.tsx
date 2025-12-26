import BreadcrumbBanner from "@/components/BreadcrumbBanner";
import { MenuCards } from "@/components/MenuCards";
import React from "react";

const menuItems = [
    {
      id: 1,
      name: "Sunset Cruise Tour",
      subtitle: "Golden Hour on the Bosphorus",
      slug: "sunset-cruise-tour",
      details: "2 Hours Yacht Tour",
      tour: "Panoramic Bosphorus Route",
      service:
        "Enjoy a romantic sunset cruise along the Bosphorus with breathtaking views of Istanbul’s skyline.",
      price: "€ 100",
      image: "/services/sunset.jpg",
    },
    {
      id: 2,
      name: "Dinner Cruise Tour",
      subtitle: "Dinner with Bosphorus View",
      slug: "dinner-cruise-tour",
      details: "3 Hours Evening Cruise",
      tour: "Dinner & Entertainment on Board",
      service:
        "Experience a luxury dinner cruise with delicious meals and night views of the Bosphorus.",
      price: "Contact For Price",
      image: "/services/dinner-2.jpg",
    },
    {
      id: 3,
      name: "Swimming Tour",
      subtitle: "Swim in Hidden Bays",
      slug: "swimming-tour",
      details: "Half Day Yacht Tour",
      tour: "Swimming & Sunbathing Stops",
      service:
        "Escape the city and enjoy a refreshing swimming tour in peaceful bays along the Bosphorus.",
      price: "Contact For Price",
      image: "/services/swimming.jpeg",
    },
    {
      id: 4,
      name: "Special Celebration",
      subtitle: "Birthday, Proposal & Events",
      slug: "special-celebration-tour",
      details: "Private Yacht Experience",
      tour: "Customized Event Program",
      service:
        "Celebrate your special moments on a private luxury yacht with a fully customized Bosphorus tour.",
      price: "Contact For Price",
      image: "/services/celebration.jpg",
    },
  ];
  

export default function Page() {
  return (
    <>
    <BreadcrumbBanner
        title="Bosphorus Yacht Tours"
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Tours" },
        ]}
      />
      <MenuCards items={menuItems} />
    </>
  );
}