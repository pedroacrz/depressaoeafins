/* eslint-disable react-hooks/rules-of-hooks */
import { NextPage } from "next"
import Link from "next/link";
import { useRouter } from "next/router";

import { Header } from "../components/Header/Header";


function login() {
    const router = useRouter()
    const login = () => { 
        
        router.push('/dashboard')
    }
    return <>
        <Header />

        <section className="mt-36 grid justify-items-center">
            <div className="w-96 pt-10 bg-zinc-800 rounded-xl h-auto p-4">
                <h1 className="text-xl font-bold">Faça login para entrar na plataforma</h1>
                <p className="mt-10">E-mail</p>
                <input type="text" className="w-full mt-3 h-10 rounded bg-zinc-900 pl-3" placeholder="Digite seu email"/>
                <p className="mt-4">Senha</p>
                <input type="password" className="w-full mt-3 h-10 rounded bg-zinc-900 pl-3" placeholder="Digite sua senha"/>
                <p className="text-sm text-right mt-3 cursor-pointer">Esqueci minha senha</p>
                <div className="grid justify-items-center">
                    <button className="bg-zinc-900 h-10 w-28 rounded-md mt-5 cursor-pointer" onClick={() => login()}>Entrar</button>
                    <Link href="/singup">
                        <p className="mt-5 text-sm cursor-pointer">Ainda não tenho conta</p>
                    </Link>
                </div>
            </div>
        </section>
    </>
}

export default login;