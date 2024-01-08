import  { useState } from "react";

const useSquere = () => {
  const [squere, setSquere] = useState(Array(9).fill(null));
  const [XIsTurn, setXIsTurn] = useState(true); 
  const hundelWinner = () => {
    const lignes = [
      [0, 1, 2],
      [0, 3, 6],
      [0, 4, 8],
      [1, 4, 7],
      [2, 4, 6],
      [2, 5, 8],
      [3, 4, 5],
      [6, 7, 8],
    ];
    
    // for (let i = 0; i < lignes.length; i++) {
    //   const [a, b, c] = lignes[i];
    //   if (squere[a] && squere[a] === squere[b] && squere[a] === squere[c]) {
    //     console.log(squere[a])
    //     return squere[a];
    //   }
    // } 
    let winner = null
    lignes.forEach((ligne,index)=>{
        const [a,b,c]=ligne
        if (squere[a] && squere[a] === squere[b] && squere[a] === squere[c]){
        winner = squere[a]
        
       
        }
    })
    console.log(winner)
    return winner; 
  };
  
// console.log(hundelWinner())
  const hundelCklick = (i) => {
const winner = hundelWinner()
    if( winner||squere[i]){
return
    }
    const squereCopy = [...squere];
    squereCopy[i] = XIsTurn ? "X" : "O";
    setSquere([...squereCopy]);
    setXIsTurn(!XIsTurn);

    // console.log(squere);
  };

  return {
    squere,
    hundelCklick,
  };
};

export default useSquere;
