import { prisma } from "@/lib/prisma"; // Importa a instância do Prisma para acesso ao banco de dados
import TripItem from "../../components/TripItem/TripItem"; // Importa o componente TripItem
import { Trip } from "@prisma/client"; // Importa o tipo Trip do Prisma
import React from "react"; // Importa a biblioteca React

// Função assíncrona para buscar as viagens recomendadas
async function getTrips() {
    const trips = await prisma.trip.findMany({}); // Consulta o banco de dados para obter todas as viagens

    return trips; // Retorna as viagens encontradas
}

const RecommendedTrips = async () => {
    const data = await getTrips(); // Chama a função assíncrona para obter as viagens recomendadas

    return (
        <div className="container mx-auto p-5">
            <div className="flex items-center">
                <div className="w-full h-[1px] bg-grayLighter"></div>
                <h2 className='px-5 font-medium text-grayPrimary whitespace-nowrap'>Destinos Recomendados</h2>
                <div className="w-full h-[1px] bg-grayLighter"></div>
            </div>

            <div className="flex flex-col items-center mt-5 gap-5">
                {/* Mapeia as viagens encontradas e renderiza o componente TripItem para cada uma */}
                {data.map((trip: Trip) => (
                    <TripItem key={trip.id} trip={trip} /> // Passa a viagem como propriedade para o componente TripItem
                ))}
            </div>
        </div>
    );
};

export default RecommendedTrips;
