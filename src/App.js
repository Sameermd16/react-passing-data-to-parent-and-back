import './App.css';
import React from 'react';
import Header from './components/Header';
import Body from './components/Body';
import boxes from './Boxes';
import Box from './components/Box'

function App(props) {

  const [user, setUser] = React.useState("Sam");

  const [squares, setSquares] = React.useState(boxes);

  const styles = {
    backgroundColor: props.darkMode ? 'black' : 'orange'
  }

  function toggle(id) {
    setSquares((prevSquares) => {
      return prevSquares.map((square) => {
        return square.id === id ? {...square, on: !square.on} : square;
      })
    })
  }
  
  
  const squareElements = squares.map((square) => {
    return (
      <Box key={square.id} id={square.id} on={square.on} toggle={toggle} />
    )
  })

  return (
    <div>
      <Header user={user} />  
      <Body user={user} />
      <main>
        {squareElements}
      </main>
    </div>
  );
}

export default App;
