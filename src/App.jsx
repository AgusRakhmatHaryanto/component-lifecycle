import  { useState } from "react";
// import React from "react";
import Counter from "./components/Counter";
import GameOver from "./components/GameOver";

export default function App(){
  const [isGameOver, setIsGameOver] = useState(false);

  const finishGame = () => {
    setIsGameOver(true);
  }
  return (
    <>
    <div
    style={styles.container}
    >
      {isGameOver ? <GameOver /> : <Counter finishGame={finishGame} />}
    </div>
    </>
  )
}


const styles = {
  container: {
    textAlign: 'center',
    marginTop: '30px,',
  },
}