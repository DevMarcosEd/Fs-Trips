"use client";

import React, { useState } from "react"; // Importa o React e o useState da biblioteca React
import Input from "../../components/Inputs/Input"; // Importa o componente Input
import DataPicker from "../../components/Inputs/DataPicker"; // Importa o componente DataPicker
import CurrencyInput from "../../components/Inputs/CurrencyInput"; // Importa o componente CurrencyInput
import Button from "../../components/Buttons/Button"; // Importa o componente Button

const TripSearch = () => {
    return (
        <div className="container mx-auto p-5 bg-search-background bg-cover bg-center bg-no-repeat">
            {/* Título */}
            <h1 className='font-semibold text-2xl text-primaryDarker text-center'>
                Encontre sua próxima <span className='text-primary'>viagem!</span>
            </h1>

            <div className="flex flex-col gap-4 mt-5">
                {/* Campo de entrada para o destino */}
                <Input placeholder="Onde você quer ir?" />

                {/* Grupo de campos de Data de Ida e Orçamento */}
                <div className="flex gap-4">
                    {/* Campo de seleção de Data de Ida */}
                    <DataPicker placeholderText="Data de Ida" onChange={() => ({})} className='w-full' />

                    {/* Campo de entrada de Orçamento */}
                    <CurrencyInput placeholder='Orçamento' className='w-full' />
                </div>

                {/* Botão de busca */}
                <Button>Buscar</Button>
            </div>
        </div>
    );
};

export default TripSearch;
