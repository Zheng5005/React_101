import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { GlobalContext } from "../../context/Context";

function NavBar() {
  const { searchParam, setSearchParam, handleSubmit } = useContext(GlobalContext);
  console.log(searchParam)

  return (
    <nav className="flex justify-between items-center py-8 container mx-auto flex-col lg:flex-row gap-5 lg:gap:0">
      <h2 className="text-2x1 font-semibold">
        <NavLink to={"/"}>FoodRecipe</NavLink>
      </h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="search"
          value={searchParam}
          onChange={(event) => setSearchParam(event.target.value)}
          placeholder="Enter Items..."
          className="bg-white/75 p-3 px-8 rounded-full outline-none lg:w-96 shadow-lg shadow-red-100 focus:shadow-red-200 content-center"
        />
      </form>
      <h2 className="text-2x1 font-semibold">
        <NavLink
          to={"/"}
          className="text-black hover:text-gray-700 duration-300"
        >
          Home
        </NavLink>
      </h2>
      <h2 className="text-2x1 font-semibold">
        <NavLink
          to={"/favorites"}
          className="text-black hover:text-gray-700 duration-300"
        >
          Favorites
        </NavLink>
      </h2>
    </nav>
  );
}

export default NavBar;
