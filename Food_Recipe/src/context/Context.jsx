import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
  const [searchParam, setSearchParam] = useState("");
  const [loading, setLoading] = useState(false);
  const [recipeList, setRecipeList] = useState([]);
  const [recipeDetailsData, setRecipeDetailsData] = useState(null);
  const [favoritesList, setFavoritesList] = useState([])

  const navigate = useNavigate()

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const res = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParam}`
      );

      const data = await res.json();
      if (data?.data?.recipes) {
        setRecipeList(data?.data?.recipes);
        setLoading(false);
        setSearchParam("");
        navigate('/')
      }
    } catch (e) {
      console.log(e);
      setLoading(false);
      setSearchParam("");
    }
  }

  function handleAddToFavorite(getCurrentItem){
    let cpyFavoriteList = [...favoritesList]
    const index = cpyFavoriteList.findIndex(item => item.id === getCurrentItem.id)

    if(index === -1){
      cpyFavoriteList.push(getCurrentItem)
    }else{
      cpyFavoriteList.splice(index)
    }

    setFavoritesList(cpyFavoriteList)
  }

  return (
    <GlobalContext.Provider
      value={{
        searchParam,
        loading,
        recipeList,
        recipeDetailsData,
        favoritesList,
        setSearchParam,
        setRecipeDetailsData,
        handleSubmit,
        handleAddToFavorite
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}