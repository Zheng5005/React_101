import { useContext } from "react";
import { FeatureFlagsContext } from "./context/Context";

import Accordion from "../accordion/Accordion";
import RandomColor from "../random_color/RandomColor";
import StarRating from "../star_rating/StarRating";
import ImageSlider from "../image_slider/ImageSlider";
import LoadMore from "../load_more/LoadMore";

import TreeView from "../tree_view/TreeView";
import sideMenu from "../tree_view/data.js";

import QRCodeGenerator from "../qrcode/QRCode";
import ThemeSwitch from "../theme_switch/ThemeSwitch";
import Scroll from "../scroll_indicator/Scroll";
import TabTest from "../tabs/tab-test";
import ModalTest from "../modal_popup/modal-test";
import ProfileFinder from "../profile_finder/ProfileFinder";
import Search from "../search_autocomplete/search";


function FeatureFlag() {
  const { loading, enableFlags } = useContext(FeatureFlagsContext);

  const componentsToRender = [
    {
      key: "showAccordion",
      component: <Accordion />,
    },
    {
      key: "showRandomColorGenerator",
      component: <RandomColor />,
    },
    {
      key: "showStarRating",
      component: <StarRating noOfStars={10} />,
    },
    {
      key: "showImageSilder",
      component: (
        <ImageSlider
          url={"https://picsum.photos/v2/list"}
          limit={"10"}
          page={"1"}
        />
      ),
    },
    {
      key: "showLoadMore",
      component: <LoadMore />,
    },
    {
      key: "showTreeView",
      component: <TreeView menus={sideMenu} />,
    },
    {
      key: "showQRCodeGenerator",
      component: <QRCodeGenerator />,
    },
    {
      key: "showLightAndDarkmode",
      component: <ThemeSwitch />,
    },
    {
      key: "showScroll",
      component: <Scroll url={"https://dummyjson.com/products?limit=50"} />,
    },
    {
      key: "showTabs",
      component: <TabTest />,
    },
    {
      key: "showModal",
      component: <ModalTest />,
    },
    {
      key: "showProfile",
      component: <ProfileFinder />,
    },
    {
      key: "showSearch",
      component: <Search />,
    },
  ];

  function checkEnableFlags(getCurrentKey) {
    return enableFlags[getCurrentKey];
  }

  if (loading) return <h1>Loading...</h1>;

  return (
    <div>
      {componentsToRender.map((componentItem) =>
        checkEnableFlags(componentItem.key) ? componentItem.component : null
      )}
    </div>
  );
}

export default FeatureFlag;
