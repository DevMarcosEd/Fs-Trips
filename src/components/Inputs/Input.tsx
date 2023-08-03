import { ComponentPropsWithoutRef, LegacyRef, forwardRef } from "react";
import { twMerge } from "tailwind-merge";

// Define as propriedades esperadas para o componente Input, estendendo as propriedades de input padrão.
interface InputProps extends ComponentPropsWithoutRef<"input"> {
    error?: boolean;          // Propriedade para indicar se há um erro no input.
    errorMessage?: string;    // Mensagem de erro a ser exibida.
}

// O componente Input é definido como uma função que aceita as props e uma referência.
function Input({ className, error, errorMessage, ...props }: InputProps, ref: LegacyRef<HTMLInputElement> | undefined) {
    // Concatena as classes CSS para o input usando a função twMerge da biblioteca tailwind-merge.
    const inputClassName = twMerge(
        // Classes base do Tailwind CSS para estilizar o input.
        "rounded-lg border border-gray-300 bg-white p-2 text-sm font-normal text-primaryDarker placeholder-black placeholder-opacity-20 outline-none transition-all",
        // Adiciona classes de erro ou foco dependendo das props passadas.
        error ? "border-red-500" : "focus:ring-1 focus:ring-primary",
        className
    );

    // Renderiza o componente Input.
    return (
        <div className="flex w-full flex-col">
            {/* O input propriamente dito, com a referência e as classes calculadas */}
            <input ref={ref} className={inputClassName} {...props} />
            {/* Renderiza a mensagem de erro se houver um erro e uma mensagem de erro definida */}
            {error && errorMessage && <span className="mt-1 text-xs text-red-400">{errorMessage}</span>}
        </div>
    );
}

// Exporta o componente Input como um componente reencaminhado (forwarded) para permitir o uso de refs.
export default forwardRef(Input);
