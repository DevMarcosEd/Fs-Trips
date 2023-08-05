'use client'

import QuickSearch from "@/components/QuickSearch/QuickSearch"
import TripSearch from "@/components/Search/TripSearch"

export default function Home() {
  return (
    <>
      <TripSearch />
      <QuickSearch />
    </>
  )
}
