import MenuList from "./menu-list";
import "./style.css";

function TreeView({menus = []}){
    return(<>
    <div className="menu-list-container">
        <MenuList list={menus}/>
    </div>
    </>)
}

export default TreeView