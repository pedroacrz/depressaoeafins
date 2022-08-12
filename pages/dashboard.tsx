import { NextPage } from "next";
import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import { Header } from "../components/Header/Header";
import { AuthContext } from '../providers/AuthContext';

const Dashboard: NextPage = () => {
    const { user } = useContext(AuthContext);
    const router = useRouter()

    useEffect(() => {
        if(user.logged === false) {
            router.push("/login")
        }
    }, [user])
    return <div>
        <Header />

        <main className="mt-10 text-lg">
            <h1>Seus depoimentos</h1>
        </main>
    </div>
}

export default Dashboard;
