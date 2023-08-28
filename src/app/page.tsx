"use client";

import QuickSearch from "@/components/QuickSearch/QuickSearch";
import RecommendedTrips from "@/components/RecommendedTrips/RecommendedTrips";
import TripSearch from "@/components/Search/TripSearch";

export default function Home() {
  return (
    <>
      <TripSearch />
      <QuickSearch />
      <RecommendedTrips />
    </>
  );
}
