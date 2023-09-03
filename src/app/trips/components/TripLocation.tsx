// Importando o componente Button do diretório "@/components/Buttons"
import Button from "@/components/Buttons/Button";

// Importando o componente Image do Next.js para renderizar imagens otimizadas
import Image from "next/image";

// Importando a biblioteca React
import React from "react";

// Definindo a interface TripLocationProps para especificar as propriedades esperadas
interface TripLocationProps {
    location: string; // Uma string que contém o nome da localização
    locationDescription: string; // Uma string que contém a descrição da localização
}

// Componente funcional TripLocation que recebe as propriedades location e locationDescription
const TripLocation = ({ location, locationDescription }: TripLocationProps) => {
    return (
        <div className="p-5">
            {/* Título "Localização" */}
            <h2 className="font-semibold text-primaryDarker mb-5">Localização</h2>

            {/* Contêiner para a imagem da localização */}
            <div className="relative h-[280px] w-full">
                {/* Renderiza a imagem da localização usando o componente Image do Next.js */}
                <Image src="/map-mobile.png" alt={location} fill style={{
                    objectFit: "cover"
                }}
                    className="rounded-lg shadow-md"
                />
            </div>

            {/* Nome da localização */}
            <p className="text-primaryDarker text-sm font-semibold mt-3">{location}</p>

            {/* Descrição da localização */}
            <p className="text-xs text-primaryDarker mt-3 leading-5">{locationDescription}</p>

            {/* Botão "Ver no Google Maps" */}
            <Button variant="outlined" className="w-full mt-5">Ver no Google Maps</Button>
        </div>
    );
};

// Exporta o componente TripLocation para ser usado em outras partes do aplicativo
export default TripLocation;