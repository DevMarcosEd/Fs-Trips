"use client";

import Button from "@/components/Buttons/Button";
import DataPicker from "@/components/Inputs/DataPicker";
import Input from "@/components/Inputs/Input";
import { Trip } from "@prisma/client";
import React from "react";

interface TripReservationProps {
    trip: Trip;
}

const TripReservation = ({ trip }: TripReservationProps) => {
    return (
        <div>
            <div className="flex flex-col px-5">
                <div className="flex gap-4">
                    <DataPicker placeholderText="Data de Início" onChange={() => { }} className="w-full" />
                    <DataPicker placeholderText="Data Final" onChange={() => { }} className="w-full" />
                </div>

                <Input placeholder={`Número de hóspedes (max: ${trip.maxGuests} )`} className="mt-4" />

                <div className="flex justify-between mt-2 ">
                    <p className="font-medium text-sm text-primaryDarker">Total: </p>
                    <p className="font-medium text-sm text-primaryDarker">R$2500 </p>
                </div>

                <Button className="mt-3">Reservar agora</Button>
            </div>
        </div>
    );
};

export default TripReservation;