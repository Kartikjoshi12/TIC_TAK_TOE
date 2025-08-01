function Tile ({className,value,onclick,playerTurn}) {

  let hoverclass = null;
  if(value==null && playerTurn!= null){
    hoverclass=`${playerTurn.toLowerCase()}-hover`;
  }
  return (
     <div onClick={onclick} 
     className={`tile ${className} ${hoverclass}`}>
     {value === "X" ? "🦖" : value === "O" ? "🦉" : ""}
  </div>
  )
 
};

export default Tile;
