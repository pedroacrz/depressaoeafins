import { NextPage } from "next"
import Link from "next/link";
import { Header } from "../components/Header/Header";

const login: NextPage = () => {
    return <>
        <Header />

        <section className="mt-36 grid justify-items-center">
            <div className="w-96 pt-10 bg-zinc-800 rounded-xl h-auto p-4">
                <h1 className="text-xl font-bold">Crie sua conta</h1>
                <p className="mt-10">Nome</p>
                <input type="text" className="w-full mt-1 h-10 rounded bg-zinc-900 pl-3" placeholder="Digite seu nome" />
                <p className="mt-4">E-mail</p>
                <input type="text" className="w-full mt-1 h-10 rounded bg-zinc-900 pl-3" placeholder="Digite seu email" />
                <p className="mt-4">Senha</p>
                <input type="password" className="w-full mt-1 h-10 rounded bg-zinc-900 pl-3" placeholder="Digite sua senha" />
                <div className="grid justify-items-center">
                    <button className="bg-zinc-900 h-10 w-28 rounded-md mt-5 cursor-pointer">Entrar</button>

                    <Link href="/login">
                        <p className="mt-5 text-sm cursor-pointer">Já tenho conta</p>
                    </Link>
                </div>
            </div>
        </section>
    </>
}

export default login;