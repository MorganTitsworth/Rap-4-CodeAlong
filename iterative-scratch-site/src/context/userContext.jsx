import react, {createContext} from react; 
import userData from '../components/userData'

const UserContext = createContext();
export function userProvider({children}){
    return ( 
        <UserContext.Provider value = {{userData}}>
        {children}
        </UserContext.Provider>
    )
};    