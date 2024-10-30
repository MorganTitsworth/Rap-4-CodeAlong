import react, {createContext} from react; 
import userData from '../components/userData'


useEffect(() => {
    try {
      let response = axios.get(
        `https://api.spoonacular.com/recipes/random?apiKey=1700ab22148d4c39a98a22bfa3f36c38`
      );
      setCard(response.data);
    } catch (error) {
      console.error(error);
    }
  }),[];

const UserContext = createContext();
export function userProvider({children}){
    return ( 
        <UserContext.Provider value = {{userData}}>
        {children}
        </UserContext.Provider>
    )
};    