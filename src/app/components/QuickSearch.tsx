import Image from "next/image"; // Importa o componente de imagem do Next.js
import React from "react"; // Importa a biblioteca React

const QuickSearch = () => {
    return (
        <div className="container mx-auto p-5">
            {/* Linha divisória */}
            <div className="flex items-center">
                <div className="w-full h-[1px] bg-grayLighter"></div>
                <h2 className='px-5 font-medium text-grayPrimary whitespace-nowrap'>Tente pesquisar por</h2>
                <div className="w-full h-[1px] bg-grayLighter"></div>
            </div>

            {/* Opções de pesquisa rápida */}
            <div className="flex w-full justify-between mt-5">
                {/* Opção "Hotel" */}
                <div className="flex flex-col items-center gap-1">
                    <Image width={35} height={35} src="/hotel-icon.png" alt="Hotel" /> {/* Exibe uma imagem */}
                    <p className='text-sm text-grayPrimary'>Hotel</p> {/* Exibe o texto "Hotel" */}
                </div>

                {/* Opção "Fazenda" */}
                <div className="flex flex-col items-center gap-1">
                    <Image width={35} height={35} src="/farm-icon.png" alt="Fazenda" /> {/* Exibe uma imagem */}
                    <p className='text-sm text-grayPrimary'>Fazenda</p> {/* Exibe o texto "Fazenda" */}
                </div>

                {/* Opção "Chalé" */}
                <div className="flex flex-col items-center gap-1">
                    <Image width={35} height={35} src="/cottage-icon.png" alt="Chalé" /> {/* Exibe uma imagem */}
                    <p className='text-sm text-grayPrimary'>Chalé</p> {/* Exibe o texto "Chalé" */}
                </div>

                {/* Opção "Pousada" */}
                <div className="flex flex-col items-center gap-1">
                    <Image width={35} height={35} src="/inn-icon.png" alt="Pousada" /> {/* Exibe uma imagem */}
                    <p className='text-sm text-grayPrimary'>Pousada</p> {/* Exibe o texto "Pousada" */}
                </div>
            </div>
        </div>
    );
};

export default QuickSearch;
