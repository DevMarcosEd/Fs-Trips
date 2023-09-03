import _CurrencyInput, { CurrencyInputProps } from "react-currency-input-field"; // Importa o componente _CurrencyInput e tipos relacionados
import { twMerge } from "tailwind-merge"; // Importa a função twMerge para mesclar classes CSS do Tailwind CSS

// Define as propriedades esperadas para o componente CurrencyInput
interface InputProps extends CurrencyInputProps {
    error?: boolean; // Indica se há um erro no componente
    errorMessage?: string; // Mensagem de erro a ser exibida quando houver um erro
}

// Define o componente CurrencyInput
function CurrencyInput({ className, error, errorMessage, ...props }: InputProps) {
    // Gera uma classe CSS para o componente CurrencyInput com base nas condições
    const inputClassName = twMerge(
        "rounded-lg border border-gray-300 bg-white p-2 text-sm font-normal text-primaryDarker placeholder-black placeholder-opacity-20 outline-none transition-all focus:ring-1 focus:ring-primary",
        error ? "border-red-500" : "", // Adiciona a classe `border-red-500` se houver um erro
        className
    );

    return (
        <div className="flex w-full flex-col">
            {/* Componente _CurrencyInput */}
            <_CurrencyInput
                lang="pt-BR" // Configura a linguagem para português do Brasil
                className={inputClassName} // Classe CSS gerada anteriormente
                intlConfig={{ locale: "pt-BR", currency: "BRL" }} // Configurações internacionais para exibição de moeda
                {...props} // Propriedades adicionais do CurrencyInput passadas como spread
            />
            {error && errorMessage && <div className="text-red-500 mt-1 text-xs">{errorMessage}</div>}
            {/* Exibe a mensagem de erro se houver um erro */}
        </div>
    );
}

// Exporta o componente CurrencyInput
export default CurrencyInput;
