"use client";

// Importações necessárias
import Image from "next/image"; // Importa o componente Image do Next.js para exibir imagens otimizadas
import React, { useState } from "react"; // Importa a biblioteca React e a função useState para criar estados locais
import { signIn, signOut, useSession } from "next-auth/react"; // Importa funções relacionadas à autenticação do NextAuth e useSession para obter o status da sessão do usuário
import { AiOutlineMenu } from "react-icons/ai"; // Importa o ícone de menu da biblioteca React-icons
import Link from "next/link"; // Importa o componente Link do Next.js para navegação

// Define o componente Header
const Header = () => {
    // Define um estado local para controlar a abertura/fechamento do menu
    const [menuIsOpen, setMenuIsOpen] = React.useState(false);

    // Obtém o status da sessão e os dados do usuário usando useSession
    const { status, data } = useSession();

    // Função para lidar com o clique no botão de login
    const handleLoginClick = () => signIn();

    // Função para lidar com o clique no botão de logout
    const handleLogoutClick = () => {
        setMenuIsOpen(false); // Fecha o menu
        signOut(); // Realiza o logout
    };

    // Função para lidar com o clique no ícone de menu
    const handleMenuClick = () => setMenuIsOpen(!menuIsOpen);

    return (
        <div className="container mx-auto p-5 py-0 h-[93px] flex justify-between items-center">
            {/* Link para a página inicial */}
            <Link href="/">
                <div className="relative h-[32px] w-[182px]">
                    {/* Exibe o logotipo da aplicação */}
                    <Image width={183} height={32} src="/logo.png" alt="Full Stack Week" />
                </div>
            </Link>

            {/* Exibe o botão de login se o usuário não estiver autenticado */}
            {status === "unauthenticated" && (
                <button className="text-primary text-sm font-semibold" onClick={handleLoginClick}>
                    Login
                </button>
            )}

            {/* Exibe informações do usuário e opção de logout se o usuário estiver autenticado */}
            {status === "authenticated" && data?.user && (
                <div className="flex items-center gap-3 border-grayLighter border border-solid rounded-full p-2 px-3 relative">
                    {/* Ícone de menu para abrir o menu */}
                    <AiOutlineMenu size={16} onClick={handleMenuClick} className="curson-pointer" />

                    {/* Exibe a imagem do usuário */}
                    <Image width={32} height={35} src={data.user.image!} alt={data.user.name!} className='rounded-full shadow-md' />

                    {/* Exibe o menu se o estado menuIsOpen for verdadeiro */}
                    {menuIsOpen && (
                        <div className="absolute top-14 left-0 w-full h-full bg-white rounded-lg shadow-md flex flex-col justify-center items-center">
                            {/* Botão de logout no menu */}
                            <button className="text-primary text-sm font-semibold" onClick={handleLogoutClick}>
                                Logout
                            </button>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

// Exporta o componente Header
export default Header;
