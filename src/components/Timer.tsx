import { useContext, useState, useEffect } from "react";
import { Context } from "../context/Context";

function Timer(){

    const { state, dispatch } = useContext(Context);    
    const [timerStatus, setTimer] = useState('00:00');
    const [timerFunc, setTimerFunc] = useState<any>()

    function previewCards(minutes: number){        
        let seconds = 59;
        minutes --;
        setTimer(`00:${seconds < 10? `0${seconds}` : seconds}`); 
        return setInterval(() => {
            
            seconds --;
            if(seconds == 0){
                if(minutes > 0){
                    minutes --;
                    seconds = 60;
                }           
            }                        
            setTimer(`00:${seconds < 10? `0${seconds}` : seconds}`);            

        }, 1000)
      }
    
    function startTime(){                   
        let seconds = 0;
        let minutes = 0;
        return setInterval(() => {            
            if( seconds < 60){
            seconds ++;
            }else{
            seconds = 0;
            minutes ++;
            }
            setTimer(`${minutes < 10? `0${minutes}`: minutes}:${seconds < 10? `0${seconds}`: seconds}`);           

        }, 1000)        
    }

    function verifyMatches(){
        let arr = state.cards.filter(item => item.status === 'founded');        
        return arr.length === 12;
    }

    function verifyStatus(){
        return state.gamestate.gameStatus === 'standart'? true : false;
    }

    useEffect(() => {
        if(state.gamestate.gameStatus === 'preview'){
            setTimerFunc(previewCards(1));
        }
        if(state.gamestate.gameStatus === 'playing'){
            setTimerFunc(startTime());
        }
        
    }, [state.gamestate.gameStatus]);

    useEffect(() => {
        console.log(state.gamestate.gameStatus);
        if(verifyStatus()){
            clearInterval(timerFunc);
            console.log('Timer cancelado!');
        }
        if(verifyMatches()){
            clearInterval(timerFunc);
            dispatch({ type : 'alter_state', payload : { status : 'finished' }});
            console.log('Timer cancelado!')
        }
    }, [timerStatus]);

    return(
        <div className="time-container">
            <label className="label-text">TIME</label>
            {state.gamestate.gameStatus === 'standart'? (
                <div className="value">00:00</div>
            ) : (
                <div className="value">{timerStatus}</div>
            )}
        </div>
    )
}

export default Timer;