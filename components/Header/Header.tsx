import Link from 'next/link'

export const Header = () => {
    
    return <header className='flex justify-between'>
        <Link href="/">
            <h1 className='text-2xl cursor-pointer'>
                Depressão e afins
            </h1>
        </Link>

        <div className='flex items-center'>
            <Link href="/login">
                <p className='cursor-pointer'>Entrar</p>
            </Link>
            <Link href="/singup">
            <p className='mr-4 ml-4 cursor-pointer'>Cadastrar</p>
            </Link>
        </div>
    </header>
}