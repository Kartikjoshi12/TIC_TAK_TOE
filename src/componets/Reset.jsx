import GameState from "./GameState"
function Reset ({gameState,onReset}) {
    // if(gameState===GameState.inprogress){
    //     return;
    // }
  return (  <>
  
      <button className="reset-button" onClick={onReset} >Play Again 😀 </button>
  </>) 
}

export default Reset
