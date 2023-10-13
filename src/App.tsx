import { useEffect, useContext, useState } from 'react';
import c from './components/AllComponents';
import { Context } from './context/Context';
import { DataCards } from './model/DataCards';
import './App.scss';


function App(){

  const { state, dispatch } = useContext(Context); 
  
  function previewCards(){
    dispatch({ type : 'alter_state', payload : { status : 'preview' }});
  }

  function startTime(){
    dispatch({ type : 'alter_state', payload : { status : 'playing' }});
  }

  function returnForStandart(){
    dispatch({ type : 'alter_state', payload : { status : 'standart' }});
    dispatch({ type : 'default'});    
    dispatch({ type : 'sort_cards'});    
  }

  function stopPreview(){
    dispatch({ type : 'alter_state', payload : { status : 'standart' }});
    dispatch({ type : 'default'});
  }

  return (
    <div className="menu">
      <div className="block-1">

        <h1 className="game-title">MEMORY GAME</h1>
        <div className="placar-container">
          <c.Timer/>
          <c.Points/>
        </div>
        
        <div className="bar-gap">
          <div className="bar-item"></div>
        </div>
        
        <div className="movements-container">
          <c.Movements/>
        </div>
        <div className="play-container">
          {state.gamestate.gameStatus === 'standart'?( 
            <>
              <div className="preview label-text" onClick={previewCards}>
                Preview
              </div>
              <div className="btn-play label-text" onClick={startTime}>Start Game</div> 
            </>                       
          ):state.gamestate.gameStatus === 'preview'?(
              <>
                <div className='preview label-txt'>
                  Preview...
                </div>
                <div className="btn-play label-text" onClick={stopPreview}>Stop Preview</div> 
              </>
            ):state.gamestate.gameStatus === 'playing'? (
              <div className='btn-play label-txt'>
                Playing...
              </div>
            ) 
            :(
              <div className="btn-play label-text" onClick={returnForStandart}>Restart Game</div> 
            )      
          }
        </div>
        <p className="dev-name">By David de Deus Mesquita</p>        
      </div>      
      <c.Card />    
    </div>
  );
}

export default App;