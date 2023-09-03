// Importando a biblioteca React
import React from "react";

// Definindo a interface TripDescriptionProps para especificar as propriedades esperadas
interface TripDescriptionProps {
    description: string; // Uma string que contém a descrição da viagem
}

// Componente funcional TripDescription que recebe a propriedade description
const TripDescription = ({ description }: TripDescriptionProps) => {
    return (
        <div className="flex flex-col p-5">
            {/* Título "Sobre a viagem" */}
            <h2 className="font-semibold text-primaryDarker">Sobre a viagem</h2>

            {/* Exibe a descrição da viagem */}
            <p className="text-xs leading-5 text-primaryDarker mt-1">{description}</p>
        </div>
    );
};

// Exporta o componente TripDescription para ser usado em outras partes do aplicativo
export default TripDescription;