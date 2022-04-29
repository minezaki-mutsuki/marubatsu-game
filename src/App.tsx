import './App.css';
import { useState, type MouseEvent } from 'react';
const App = () => {
  const [board, setBoard] = useState<(string|null)[]>(new Array(9).fill(null))
  const [state, setState] = useState<number>(0);
  const [player, setPlayer] = useState<string>('O');
  const f = (v: number) => {
    const onClick = (e: MouseEvent) => {
      let isChanged = false;
      setBoard(board.map((tile, index) => {
        if (v === index && tile === null) {
          isChanged = true;
          return player;
        } else {
          return tile;
        }
      }));
      if (isChanged) {
        if (state % 2 == 0){
          setPlayer('X')
        } else {
          setPlayer('O')
        }
        setState(state + 1);
      }
      
    }
    return onClick;
  }
  const Reset =(e: MouseEvent)=>{
    setState(0)
    setPlayer('O')
    setBoard(new Array(9).fill(null))
  }
  return (
    <div className="App">
      <header className="App-header">React Workshop</header>
      <main className="App-main">
        <div id="board">
          {board.map((value , index) => {
            return(
              <div key={index} className="tile" onClick={f(index)}>{value}</div>
            )
          })}
        </div>
        <p>Turn: {player}</p>
        <p onClick={Reset}>リセット</p>
      </main>
    </div>
  );
}

export default App;
