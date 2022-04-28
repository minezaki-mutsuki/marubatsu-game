import  { useState, type MouseEvent } from 'react';
import './App.css';
import { judgeBoard } from './t3';

type Player = 'O' | 'X';
const App = () => {
  const [board, setBoard] = useState<(Player | null)[]>(
    new Array(9).fill(null)
  );
  const [player, setPlayer] = useState<Player>("O");
  const [result, setResult] = useState<string>('');
  const res = judgeBoard(board);
  if (res !== null && !result) {
    setResult(`${res} is winner!`);
    document
      .querySelectorAll(".tile")
      .forEach((el) => el.classList.add("filled"));
  }
  const onClick = (s: number) => (e: MouseEvent) => {
    e.preventDefault();
    if (!e || e.currentTarget.classList.contains('filled')) return;
    setBoard(board.map((el, i) => (i === s ? player : el)));
    e.currentTarget.classList.add('filled');
    setPlayer(player === "O" ? "X" : "O");
  }
  const reset = (e: MouseEvent) => {
    setBoard(new Array(9).fill(null));
    setPlayer('O');
    setResult('')
    document.querySelectorAll(".tile").forEach(el => el.classList.remove('filled'));
  }
  return (
    <div className="App">
      <header className="App-header">React Workshop</header>
      <main className="App-main">
        <div id="board">
          {board.map((e, idx) => (
            <div className="tile" key={`tile-${idx}`} onClick={onClick(idx)}>
              {e === null ? "" : e}
            </div>
          ))}
        </div>
        <p>Turn: {player}</p>
        {result ? <p>{result}</p> : <></>}
        <span onClick={reset} className="reset">リセット</span>
      </main>
    </div>
  );
}

export default App;
