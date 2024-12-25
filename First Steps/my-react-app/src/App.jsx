
import Header from "./Header.jsx"
import Footer from "./Footer.jsx"
import Food from "./Food.jsx"
import Card from "./card/card.jsx"
import Button from "./Button.jsx"
import Student from "./Student.jsx"
import UserGreeting from "./UserGreeting.jsx"
import List from "./List.jsx"
import FirstHook from "./FirstHook.jsx"
import UpdateObjState from "./UpdateObjState.jsx"
import UpdateArrState from "./UpdateArrState.jsx"
import UpdateArrOfObj from "./UpdateArrOfObj.jsx"
import EffectHook from "./EffectHook.jsx"
import EffectCleanUp from "./EffectCleanUp.jsx"
import ComponentA from "./UseContextHook/ComponentA.jsx"
import RefHook from "./RefHook.jsx"

function App() {

  const fruits = [{id: 1, name: "apple", calories: 95}, 
    {id: 2, name: "orange", calories: 45}, 
    {id: 3, name: "banana", calories: 105}, 
    {id: 4, name: "coconut", calories: 159}, 
    {id: 5, name: "pineapple", calories: 37}];
  
  return(
    <>
      <Header />
        <UserGreeting isLoggedIn={true} username="Juan Perez"/>
        <Student name="Zheng" age={30} isStudent={false} />
        <Student name="Fernando" age={21} isStudent={true} />
        <Student />

        {fruits.length > 0 ? <List items={fruits} category="Fruits"/> : null}

        <Card />
        <Card />
        <Button />
        <Food />

        <FirstHook />

        <UpdateObjState />
        <UpdateArrState />
        <UpdateArrOfObj />

        <EffectHook />
        <EffectCleanUp />

        <ComponentA />

        <RefHook />
      <Footer />
    </>
  );
}

export default App
