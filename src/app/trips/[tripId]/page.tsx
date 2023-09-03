// Importando a instância prisma do diretório "@/lib/prisma"
import { prisma } from "@/lib/prisma";

// Importando a biblioteca React
import React from "react";

// Importando componentes relacionados aos detalhes da viagem
import TripHeader from "../components/TripHeader";
import TripReservation from "../components/TripReservation";
import TripDescription from "../components/TripDescription";
import TripHighlights from "../components/TripHighlights";
import TripLocation from "../components/TripLocation";

// Função assíncrona para obter os detalhes da viagem com base em um tripId
const getTripDetails = async (tripId: string) => {
    const trip = await prisma.trip.findUnique({
        where: {
            id: tripId,
        },
    });

    return trip;
};

// Componente TripDetails que recebe os parâmetros "params" contendo "tripId"
const TripDetails = async ({ params }: { params: { tripId: string } }) => {
    // Chama a função para obter os detalhes da viagem com base no tripId
    const trip = await getTripDetails(params.tripId);

    // Se a viagem não for encontrada, retorna null
    if (!trip) return null;

    // Renderiza os detalhes da viagem
    return (
        <div className="container mx-auto">
            {/* Renderiza o cabeçalho da viagem com os detalhes */}
            <TripHeader trip={trip} />

            {/* Renderiza a seção de reserva da viagem */}
            <TripReservation trip={trip} />

            {/* Renderiza a descrição da viagem */}
            <TripDescription description={trip.description} />

            {/* Renderiza os destaques da viagem */}
            <TripHighlights highlights={trip.highlights} />

            {/* Renderiza a localização da viagem e sua descrição */}
            <TripLocation location={trip.location} locationDescription={trip.locationDescription} />
        </div>
    );
};

// Exporta o componente TripDetails para ser usado em outras partes do aplicativo
export default TripDetails;