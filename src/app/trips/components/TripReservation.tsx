"use client";

// Importações de componentes e tipos
import Button from "@/components/Buttons/Button"; // Importa o componente Button
import DataPicker from "@/components/Inputs/DataPicker"; // Importa o componente DataPicker
import Input from "@/components/Inputs/Input"; // Importa o componente Input
import { Trip } from "@prisma/client"; // Importa o tipo Trip do Prisma
import React from "react"; // Importa a biblioteca React

// Importações do React Hook Form
import { useForm, Controller } from "react-hook-form"; // Importa o useForm e o Controller do React Hook Form

// Declaração de interfaces
interface TripReservationProps {
    trip: Trip; // Define a interface para as propriedades do TripReservation
}

interface TripReservationForm {
    guests: number;
    startDate: Date | null;
    endDate: Date | null;
}

// Componente principal TripReservation
const TripReservation = ({ trip }: TripReservationProps) => {
    // Configura o useForm para controlar o formulário
    const {
        register,
        handleSubmit,
        formState: { errors },
        control
    } = useForm<TripReservationForm>();

    // Função para lidar com o envio do formulário
    const onSubmit = (data: any) => {
        console.log(data);
    };

    return (
        <div className="flex flex-col px-5">
            <div className="flex gap-4">
                {/* Controle para o campo de data de início */}
                <Controller
                    name="startDate" // Define o nome do campo controlado, deve corresponder ao nome no estado interno do formulário
                    rules={{ // Define regras de validação para o campo
                        required: {
                            value: true, // Define que o campo é obrigatório
                            message: "Data inicial é obrigatória" // Mensagem de erro a ser exibida se a validação falhar
                        },
                    }}
                    control={control} // Associa o controle do campo ao useForm
                    render={({ field }) => ( // Função de renderização que fornece o campo controlado
                        <DataPicker
                            error={!!errors?.startDate} // Verifica se há erros relacionados à data de início
                            errorMessage={errors?.guests?.message} // Exibe a mensagem de erro se houver
                            onChange={field.onChange} // Liga a função de alteração do DataPicker à função de alteração do campo controlado
                            selected={field.value} // Define o valor selecionado no DataPicker com o valor do campo controlado
                            placeholderText="Data de Início" // Define o texto de espaço reservado no DataPicker
                            className="w-full" // Define as classes CSS para o DataPicker
                        />
                    )}
                />

                {/* Controle para o campo de data final */}
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
                            error={!!errors?.endDate}
                            errorMessage={errors?.endDate?.message}
                            onChange={field.onChange}
                            selected={field.value}
                            placeholderText="Data Final"
                            className="w-full"
                        />
                    )}
                />
            </div>

            {/* Campo de entrada para o número de hóspedes */}
            <Input
                {...register("guests", { // Registra o campo "guests" com o React Hook Form
                    required: { // Define a regra de validação como obrigatória
                        value: true, // O campo deve ter um valor preenchido
                        message: "Número de hóspedes é obrigatório" // Mensagem de erro a ser exibida se a validação falhar
                    }
                })}
                placeholder={`Número de hóspedes (max: ${trip.maxGuests})`} // Define o texto de espaço reservado no input
                className="mt-4" // Define as classes CSS para o input
                error={!!errors.guests} // Verifica se há erros relacionados ao campo "guests"
                errorMessage={errors?.guests?.message} // Exibe a mensagem de erro se houver
            />

            {/* Exibe o total */}
            <div className="flex justify-between mt-2 ">
                <p className="font-medium text-sm text-primaryDarker">Total: </p>
                <p className="font-medium text-sm text-primaryDarker">R$2500 </p>
            </div>

            {/* Botão de reserva */}
            <div className="pb-10 border-b border-grayLighter w-full">
                <Button onClick={() => handleSubmit(onSubmit)()} className="mt-3 w-full">Reservar agora</Button>
            </div>
        </div>
    );
};

export default TripReservation;
