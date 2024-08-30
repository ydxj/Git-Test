import Card from './Card.jsx'
import Button from './Button.jsx'
import List from './List.jsx'


function App() {
  const names = [{id: 1,nom: "Omar", age: 20},
    {id: 2,nom: "Oumaima", age: 20},
    {id: 6,nom: "Zakaria", age: 29},
    {id: 3,nom: "Ranya", age: 21},
    {id: 4,nom: "Ahmed", age: 19},
    {id: 5,nom: "Ilham", age: 15},
    ];
  const Employes = [
    {id: 1,nom: "Omar Zerhouni", age: 20 , bio:"Hello my name is omar zerhouni i'm full stuck dev"},
    {id: 2,nom: "Oumaima Hassouni", age: 20 , bio:"Hello my name is Oumaima Hassouni i'm full stuck dev"},
    {id: 6,nom: "Zakaria Ben", age: 29 , bio:"Hello my name is Zakaria Ben i'm full stuck dev"},
    {id: 3,nom: "Ranya Bouzidi", age: 21, bio:"Hello my name is Ranya Bouzidi i'm full stuck dev"},
    {id: 4,nom: "Ahmed Sbara", age: 19, bio:"Hello my name is Ahmed Sbara i'm full stuck dev"},
    {id: 5,nom: "Ilham lkelba", age: 15, bio:"Hello my name is Ilham lkelba i'm full stuck dev"},
    ];
  return (
    <>
      {/* <Card name="Zerhouni Omar" bio="Hello my name is omar zerhouni i'm full stuck dev"/>
      <Card name="Oumaima Hassouni" bio="Hello my name is Oumaima Hassouni i'm full stuck dev"/>
       */}
      <Card items={Employes}/>
      
      {/* <List items={names}/> */}
      
    </>
  )
}

export default App
