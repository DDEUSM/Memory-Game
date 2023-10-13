import { useContext, useEffect, useState } from "react";
import { Context } from "../context/Context";

function Movements(){
    
    const {state, dispatch} = useContext(Context);
    const [moveState, setMove] = useState(0);

    useEffect(() => {
        let arrMove = state.cards.filter(item => item.status === 'view')
        if(arrMove.length === 2){
            setMove(moveState + 1);
        }
    }, [state.cards]); 
    
    useEffect(() => {
        if(state.gamestate.gameStatus === 'standart')
        {
            setMove(0);
        }
    },[state.gamestate.gameStatus])

    return(
        <div className="movements-sub-container">
            <label className="label-text">MOVEMENTS</label>
            <div className="value move">{moveState}</div>
        </div>   
    )
}
export default Movements;