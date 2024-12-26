import "./App.css";
import FeatureFlag from "./components/feature_flag/FeatureFlag.jsx";
import FeatureFlagGlobalState from "./components/feature_flag/context/Context.jsx";

function App() {
  return (
    <>
        <FeatureFlagGlobalState>
          <FeatureFlag />
        </FeatureFlagGlobalState>

      {/* The code below has every component on it's own, but the code above will render everything, but if you want to see an specific component
          in action just comment the code above and put the component you want (you should import it)
       */}
      {/*
        <Accordion />
        <RandomColor />
        <StarRating noOfStars={10} /> -> npm i react-icons

        <ImageSlider
        url={"https://picsum.photos/v2/list"}
        limit={"10"}
        page={"1"}
        />

        <LoadMore />
        <TreeView menus={sideMenu} />
        <QRCodeGenerator /> -> npm i react-qr-code
        
        <ThemeSwitch />
        <Scroll url={"https://dummyjson.com/products?limit=50"} />
        <TabTest />
        <ModalTest />
        <ProfileFinder />
        <Search />
       */}
    </>
  );
}

export default App;
