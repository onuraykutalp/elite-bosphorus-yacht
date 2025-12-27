import BreadcrumbBanner from "@/components/BreadcrumbBanner";
import { MenuCards } from "@/components/MenuCards";
import React from "react";
import { tours } from "../../../data/Tours";

export default function Page() {
  return (
    <>
    <BreadcrumbBanner
        title="bosphorus-yacht-tours.title"
        breadcrumb={[
          { label: "common.home", href: "/" },
          { label: "common.tours" },
        ]}
      />
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
    </>
  );
}