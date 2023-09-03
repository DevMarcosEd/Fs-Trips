// Importando o componente QuickSearch do diretório "@/app/components"
import QuickSearch from "@/app/components/QuickSearch";

// Importando o componente RecommendedTrips do diretório "@/app/components"
import RecommendedTrips from "@/app/components/RecommendedTrips";

// Importando o componente TripSearch do diretório "@/app/components"
import TripSearch from "@/app/components/TripSearch";

// Definindo o componente Home como a página inicial
export default function Home() {
  return (
    <>
      {/* Renderiza o componente TripSearch */}
      <TripSearch />

      {/* Renderiza o componente QuickSearch */}
      <QuickSearch />

      {/* Renderiza o componente RecommendedTrips */}
      <RecommendedTrips />
    </>
  );
}
