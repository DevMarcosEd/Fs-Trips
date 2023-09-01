import QuickSearch from "@/app/components/QuickSearch";
import RecommendedTrips from "@/app/components/RecommendedTrips";
import TripSearch from "@/app/components/TripSearch";

export default function Home() {
  return (
    <>
      <TripSearch />
      <QuickSearch />
      <RecommendedTrips />
    </>
  );
}
