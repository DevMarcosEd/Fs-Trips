// Importações necessárias
import Image from "next/image"; // Importa o componente Image do Next.js para exibir imagens otimizadas
import React from "react"; // Importa a biblioteca React

// Define o componente Footer
const Footer = () => {
    return (
        <div className="bg-walterWhite p-5 justify-center flex flex-col items-center">
            {/* Exibe o logotipo da aplicação */}
            <Image src="/logo.png" width={133} height={23} alt="Full Stack Week" />

            {/* Exibe um texto de direitos autorais */}
            <p className="text-sm font-medium mt-1 text-primaryDarker">Todos os direitos reservados</p>
        </div>
    );
};

// Exporta o componente Footer
export default Footer;
