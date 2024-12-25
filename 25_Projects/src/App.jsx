import './App.css'
import Accordion from './components/accordion/Accordion'
import RandomColor from './components/random_color/RandomColor'
import StarRating from './components/star_rating/StarRating'
import ImageSlider from './components/image_slider/ImageSlider'
import LoadMore from './components/load_more/LoadMore'

import TreeView from './components/tree_view/TreeView'
import sideMenu from './components/tree_view/data.js'

import QRCodeGenerator from './components/qrcode/QRCode.jsx'
import ThemeSwitch from './components/theme_switch/ThemeSwitch.jsx'
import Scroll from './components/scrolls/scroll_indicator/Scroll.jsx'
import TabTest from './components/tabs/tab-test.jsx'

function App() {
 return (
    <>
      <Accordion />
      <RandomColor />
      <StarRating noOfStars={10}/> {/* npm i react-icons*/}

      {/* The image slide kinda works, but it doesn't show any images, but you can slide through for some reason */}
      <ImageSlider url={"https://picsum.photos/v2/list"} limit={"10"} page={"1"}/>

      <LoadMore />

      <TreeView menus={sideMenu}/>

      <QRCodeGenerator /> {/* npm i react-qr-code */}
      <ThemeSwitch />

      <Scroll url={'https://dummyjson.com/products?limit=50'}/>
      <TabTest />
    </>
  )
}

export default App
