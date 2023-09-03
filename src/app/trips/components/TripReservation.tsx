"use client";

import Button from "@/components/Buttons/Button";
import DataPicker from "@/components/Inputs/DataPicker";
import Input from "@/components/Inputs/Input";
import { Trip } from "@prisma/client";
import React from "react";

import { useForm, Controller } from "react-hook-form";

interface TripReservationProps {
    trip: Trip;
}

interface TripReservationForm {
    guests: number;
    startDate: Date | null;
    endDate: Date | null;
}

const TripReservation = ({ trip }: TripReservationProps) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        control
    } = useForm<TripReservationForm>();

    const onSubmit = (data: any) => {
        console.log(data);
    };

    return (
        <div className="flex flex-col px-5">
            <div className="flex gap-4">
                <Controller
                    name="startDate"
                    rules={{
                        required: {
                            value: true,
                            message: "Data inical é obrigatória"
                        },
                    }}
                    control={control}
                    render={({ field }) => (
                        <DataPicker
                            error={!!errors?.startDate}
                            errorMessage={errors?.guests?.message}
                            onChange={field.onChange}
                            selected={field.value}
                            placeholderText="Data de Início"
                            className="w-full"
                        />
                    )}
                />

                <Controller
                    name="endDate"
                    rules={{
                        required: {
                            value: true,
                            message: "Data final é obrigatória"
                        }
                    }}
                    control={control}
                    render={({ field }) => (
                        <DataPicker
                            error={!!errors?.endDate?.message}
                            errorMessage={errors?.guests?.message}
                            onChange={field.onChange}
                            selected={field.value}
                            placeholderText="Data Final"
                            className="w-full"
                        />
                    )}
                />
            </div>

            <Input {...register("guests", {
                required: {
                    value: true,
                    message: "Número de hóspedes é obrigatório"
                }
            })} placeholder={`Número de hóspedes (max: ${trip.maxGuests} )`}
                className="mt-4"
                error={!!errors.guests?.message}
                errorMessage={errors?.guests?.message}
            />

            <div className="flex justify-between mt-2 ">
                <p className="font-medium text-sm text-primaryDarker">Total: </p>
                <p className="font-medium text-sm text-primaryDarker">R$2500 </p>
            </div>

            <div className="pb-10 border-b border-grayLighter w-full">
                <Button onClick={() => handleSubmit(onSubmit)()} className="mt-3 w-full">Reservar agora</Button>
            </div>
        </div>
    );
};

export default TripReservation;