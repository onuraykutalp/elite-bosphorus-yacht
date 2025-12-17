import BreadcrumbBanner from '@/components/BreadcrumbBanner'
import React from 'react'
import TourDetail from '@/components/TourDetail'
import { tours } from '../../../../data/Tours'
import { notFound } from 'next/navigation'

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const tour = tours[slug as keyof typeof tours];
  
  if (!tour) {
    notFound();
  }
  
  return (
    <>
    <BreadcrumbBanner
        title="Bosphorus Yacht Tours"
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Tours" },
        ]}
      />
      <TourDetail tour={tour} />
    </>
  )
}