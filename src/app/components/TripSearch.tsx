"use client";

import React, { useState } from "react";
import Input from "../../components/Inputs/Input";
import DataPicker from "../../components/Inputs/DataPicker";
import CurrencyInput from "../../components/Inputs/CurrencyInput";
import Button from "../../components/Buttons/Button";

const TripSearch = () => {
    return (
        <div className="container mx-auto p-5 bg-search-background bg-cover bg-center bg-no-repeat">
            <h1 className='font-semibold text-2xl text-primaryDarker text-center'>
                Encontre sua próxima <span className='text-primary'>viagem!</span>
            </h1>

            <div className="flex flex-col gap-4 mt-5">
                <Input placeholder="Onde você quer ir?" />

                <div className="flex gap-4">
                    <DataPicker placeholderText="Data de Ida" onChange={() => ({})} className='w-full' />
                    <CurrencyInput placeholder='Orçamento' className='w-full' />
                </div>

                <Button>Buscar</Button>
            </div>
        </div>
    );
};

export default TripSearch;