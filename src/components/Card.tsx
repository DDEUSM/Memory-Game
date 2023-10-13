import React, { useState, useContext, useEffect } from "react";
import { CardObjectType } from "../reducers/CardReducer";
import { Context } from "../context/Context";


function Card(){
   
    const { state, dispatch } = useContext(Context);
    
    function handleEvent(obj : CardObjectType, e : React.MouseEvent<HTMLDivElement>){
      console.log('objeto');
      console.log(obj)
      console.log(e.currentTarget)
      dispatch({ type : 'select_a_card', payload : { id : obj.id }});                              
    }

    useEffect(() => {
      let arr = state.cards.filter(item => {
        return item.status === 'view';
      });
      if(arr.length == 2){
        if(arr[0].group === arr[1].group){
          dispatch({type : 'founded_a_group'});          
        }else{
          dispatch({type : 'not_found_a_group'});
        }
      } 
      console.log(state.cards);
    }, [state.cards])

    return (
      <div className="block-2">
        <div className="cards-container">                
          { state.cards.length > 0?
          (
            state.cards.map((item) => {
              return (
                state.gamestate.gameStatus === 'playing'?
                (
                  item.status === 'view' || item.status === 'founded'? (
                    <div className='card-item selected' key={item.id}>
                      <img src={item.url} alt="card icon" />
                    </div>
                  ):(
                    <div className='card-item' key={item.id} onClick={(e) => {handleEvent(item, e)}}>
                      <p className='card-back'>?</p>
                    </div>
                  )
                ) 
                : 
                (
                  state.gamestate.gameStatus === 'preview'? (
                    <div className='card-block selected' key={item.id}>
                      <img src={item.url} alt="card icon" />
                    </div>
                  ) : (
                    <div className='card-block' key={item.id}>
                      <p className='card-back'>?</p>
                    </div>
                  )
                )
              )
            })
          ) 
          : 
          (
            <>
            </>
          )
          }
        </div> 
      </div> 
    )
}

export default Card;