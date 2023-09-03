// Importando as bibliotecas React e Image do Next.js para renderizar imagens otimizadas
import React from "react";
import Image from "next/image";

// Importando o componente ReactCountryFlag para exibir a bandeira do país da viagem
import ReactCountryFlag from "react-country-flag";

// Importando o tipo Trip do pacote "@prisma/client"
import { Trip } from "@prisma/client";

// Definindo a interface TripHeaderProps para especificar as propriedades esperadas
interface TripHeaderProps {
    trip: Trip; // O objeto Trip que contém os detalhes da viagem
}

// Componente funcional TripHeader que recebe as propriedades trip
const TripHeader = ({ trip }: TripHeaderProps) => {
    return (
        <div className="flex flex-col">
            {/* Container para a imagem de capa da viagem */}
            <div className="relative h-[280px] w-full">
                {/* Renderiza a imagem de capa da viagem usando o componente Image do Next.js */}
                <Image
                    src={trip?.coverImage} // URL da imagem de capa
                    fill // Mantém a proporção da imagem e preenche o contêiner
                    style={{
                        objectFit: "cover" // Define como a imagem se ajustará ao contêiner
                    }}
                    alt={trip?.name} // Texto alternativo para acessibilidade
                />
            </div>

            {/* Título e informações da viagem */}
            <div className="flex flex-col p-5">
                {/* Título da viagem */}
                <h1 className="font-semibold text-xl text-primaryDarker">{trip.name}</h1>

                {/* Exibe a bandeira do país da viagem */}
                <div className="flex items-center gap-1 my-1">
                    <ReactCountryFlag countryCode={trip.countryCode} svg />
                    {/* Nome da localização da viagem */}
                    <p className="text-xs text-primaryLighter underline">{trip.location}</p>
                </div>

                {/* Preço por dia da viagem */}
                <p className="text-xs text-grayPrimary">
                    {/* Exibe o preço por dia da viagem em reais (R$) */}
                    <span className="text-primary font-medium">R${trip.pricePerDay.toString()}</span> por dia
                </p>
            </div>
        </div>
    );
};

// Exporta o componente TripHeader para ser usado em outras partes do aplicativo
export default TripHeader;