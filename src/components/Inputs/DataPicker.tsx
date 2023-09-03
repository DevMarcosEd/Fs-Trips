import { LegacyRef, forwardRef } from "react"; // Importa o `forwardRef` para permitir o uso de referências no componente
import { twMerge } from "tailwind-merge"; // Importa a função `twMerge` para mesclar classes CSS do Tailwind CSS
import _DatePicker, { ReactDatePickerProps, registerLocale } from "react-datepicker"; // Importa o componente `_DatePicker` do react-datepicker e tipos relacionados
import ptBR from "date-fns/locale/pt-BR"; // Importa as configurações de localização em português do Brasil
import "react-datepicker/dist/react-datepicker.css"; // Importa o arquivo de estilo CSS do react-datepicker

// Registra o local de data e hora em português do Brasil para o componente DatePicker
registerLocale("pt-BR", ptBR);

// Define as propriedades esperadas para o componente DatePicker
interface InputProps extends ReactDatePickerProps {
    error?: boolean; // Indica se há um erro no componente
    errorMessage?: string; // Mensagem de erro a ser exibida quando houver um erro
}

// Define o componente DatePicker
function DatePicker({ className, error, errorMessage, ...props }: InputProps, ref: LegacyRef<HTMLInputElement> | undefined) {
    // Gera uma classe CSS para o componente DatePicker com base nas condições
    const datePickerClassName = twMerge(
        "rounded-lg border border-gray-300 bg-white p-2 text-sm font-normal text-primaryDarker placeholder-black placeholder-opacity-20 outline-none transition-all focus:ring-1 focus:ring-primary",
        error ? "border-red-500" : "", // Adiciona a classe `border-red-500` se houver um erro
        className
    );

    return (
        <div className="flex w-full flex-col">
            {/* Componente _DatePicker */}
            <_DatePicker
                dateFormat="dd/MM/yyyy" // Formato da data exibida
                locale="pt-BR" // Localização em português do Brasil
                wrapperClassName="w-full" // Classe CSS para o contêiner do DatePicker
                className={datePickerClassName} // Classe CSS gerada anteriormente
                enableTabLoop={false} // Desativa a navegação por tabulação dentro do DatePicker
                {...props} // Propriedades adicionais do DatePicker passadas como spread
            />
            {error && errorMessage && <div className="text-red-500 mt-1 text-xs">{errorMessage}</div>}
            {/* Exibe a mensagem de erro se houver um erro */}
        </div>
    );
}

// Exporta o componente DatePicker com suporte a referências
export default forwardRef(DatePicker);
