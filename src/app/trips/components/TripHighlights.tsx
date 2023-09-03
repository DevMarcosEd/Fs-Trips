// Importando o componente Image do Next.js para renderizar imagens otimizadas
import Image from "next/image";

// Importando a biblioteca React
import React from "react";

// Definindo a interface TripHighLightsProps para especificar as propriedades esperadas
interface TripHighLightsProps {
    highlights: string[]; // Um array de strings contendo os destaques da viagem
}

// Componente funcional TripHighlights que recebe as propriedades highlights
function TripHighlights({ highlights }: TripHighLightsProps) {
    return (
        <div className="flex flex-col p-5">
            {/* Título "Destaques" */}
            <h2 className="font-semibold text-primaryDarker mb-2">Destaques</h2>

            {/* Container flexível para os destaques da viagem */}
            <div className="flex flex-wrap gap-y3">
                {/* Mapeia os destaques e cria um bloco para cada um */}
                {highlights.map((highlight) => (
                    <div key={highlight} className="flex items-center gap-2 w-1/2">
                        {/* Renderiza uma imagem de ícone de verificação */}
                        <Image src="/check-icon.png" width={15} height={15} alt={highlight} />

                        {/* Exibe o texto do destaque */}
                        <p className="text-grayPrimary text-xs">{highlight}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

// Exporta o componente TripHighlights para ser usado em outras partes do aplicativo
export default TripHighlights;