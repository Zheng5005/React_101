import { useContext } from "react";
import { GlobalContext } from "../../context/Context";
import RecipeItem from "../../components/recipe-item/RecipeItem";

function Favorites(){
    const { favoritesList, loading } = useContext(GlobalContext);

    if (loading) return <div>Loading...</div>;
  
    return (
      <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
        {favoritesList && favoritesList.length > 0 ? (
          favoritesList.map((item) => <RecipeItem item={item} id={item.id} />)
        ) : (
          <div>
            <p className="lg:text-4x1 text-xl text-center text-black font-extrabold">
              No Recipe Found
            </p>
          </div>
        )}
      </div>
    );
}

export default Favorites