// Importações necessárias
import { ComponentPropsWithoutRef } from "react"; // Importa o tipo ComponentPropsWithoutRef do React para definir as propriedades do botão
import { twMerge } from "tailwind-merge"; // Importa a função twMerge para mesclar classes CSS do Tailwind CSS

// Define as propriedades esperadas para o componente Button
interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
    variant?: "primary" | "outlined" | "danger"; // Define um tipo enumerado para as variantes do botão
}

// Define o componente Button
function Button({ className, variant = "primary", ...props }: ButtonProps) {
    // Define as classes CSS para diferentes variantes do botão
    const variantClasses = {
        primary: "bg-primary text-white hover:bg-primaryDarker", // Variante primária
        outlined: "bg-transparent border-2 border-primary text-primary", // Variante contornada
        danger: "text-red-500 border-red-500 border hover:bg-red-600 bg-transparent hover:text-white", // Variante de perigo
    };

    // Mescla as classes da variante com classes padrão do botão
    const _className = twMerge(
        variantClasses[variant], // Classes da variante selecionada
        "appearance-none rounded-lg p-2 text-sm font-medium shadow transition-all", // Classes padrão do botão
        className // Classes personalizadas passadas como propriedade
    );

    return (
        <button className={_className} {...props}>
            {props.children}
        </button>
    );
}

// Exporta o componente Button
export default Button;
