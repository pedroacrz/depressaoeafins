import { NextPage } from "next";
import { useContext } from "react";
import { Header } from "../components/Header/Header";
import { AuthContext } from '../providers/AuthContext';

const Dashboard: NextPage = () => {
    const { user } = useContext(AuthContext);
    return <div>
        <Header />
        <h1>Seus depoimentos</h1>
        <p>{user?.name}</p>
    </div>
}

export default Dashboard;