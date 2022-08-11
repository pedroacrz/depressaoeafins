import { createContext, useState } from "react";

export const AuthContext = createContext({} as ReturnType<typeof useValue>);

const useValue = () => {
    const [user, setUser] = useState<User>({ name: 'aaa', logged: false })

    return {
        user,
        setUser
    }
}

export const AuthProvider = (props: any) => {

    return <AuthContext.Provider value={useValue()}>
        {props.children}
    </AuthContext.Provider>
}

type User = {
    logged: boolean,
    name: string
}

