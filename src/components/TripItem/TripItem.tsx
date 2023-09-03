import { Trip } from "@prisma/client"; // Importa o tipo Trip do Prisma
import Image from "next/image"; // Importa o componente de imagem do Next.js
import Link from "next/link"; // Importa o componente Link do Next.js para navegação
import React from "react"; // Importa a biblioteca React
import ReactCountryFlag from "react-country-flag"; // Importa o componente ReactCountryFlag para exibir bandeiras de países

// Define as propriedades esperadas para o componente TripItem
interface TripItemProps {
    trip: Trip; // A propriedade trip deve ser um objeto do tipo Trip
}

const TripItem = ({ trip }: TripItemProps) => {
    return (
        // Usando o componente Link para criar um link para detalhes da viagem
        <Link href={`/trips/${trip.id}`}>
            <div className="flex-col">
                <div className="relative h-[280px] w-[280px]">
                    {/* Exibe a imagem de capa da viagem usando o componente Image */}
                    <Image
                        src={trip.coverImage} // URL da imagem de capa da viagem
                        className="rounded-lg shadow-md" // Classes CSS para estilizar a imagem
                        style={{
                            objectFit: "cover", // Estilo para ajustar a imagem à caixa
                        }}
                        fill // Preenche todo o espaço disponível
                        alt={trip.name} // Texto alternativo para acessibilidade
                    />
                </div>

                {/* Nome da viagem */}
                <h3 className="text-primaryDarker font-medium text-sm mt-2">{trip.name}</h3>

                {/* País da viagem e bandeira */}
                <div className="flex items-center gap-1 my-1">
                    <ReactCountryFlag countryCode={trip.countryCode} svg /> {/* Exibe a bandeira do país com base no código do país */}
                    <p className="text-xs text-primaryLighter">{trip.location}</p> {/* Exibe o nome do local da viagem */}
                </div>

                {/* Preço da viagem por dia */}
                <p className="text-xs text-primaryLighter">
                    <span className="text-primary">R${trip.pricePerDay.toString()}</span> por dia
                </p>
            </div>
        </Link>
    );
};

export default TripItem;
