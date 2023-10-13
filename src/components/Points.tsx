import { useContext, useEffect, useState } from "react";
import { Context } from "../context/Context";

function Points(){

    const { state, dispatch } = useContext(Context);
    const [pointsState, setPoint] = useState(0);

    useEffect(() => {
        let arr = state.cards.filter(item => item.status === 'founded')
        setPoint((arr.length / 2));
    }, [state.cards])

    return (
        <div className="points-container">
            <label className="label-text">POINTS</label>
            <div className="value point">{pointsState}</div>
        </div>
    )
}

export default Points;