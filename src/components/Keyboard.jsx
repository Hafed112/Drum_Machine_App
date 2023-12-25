import { useEffect } from "react"

const Keyboard = ({firstSoundsGroup,play}) => {


  const handleKeydown=(e)=>{
    
      firstSoundsGroup.forEach(element => {
          const {keyCode}=element 
          if(keyCode===e.keyCode){
            const audio=document.getElementById(element.key);
            play(element.key,element.id);
            
          }
      });
  }
  useEffect(()=>{
    document.addEventListener('keydown',handleKeydown)
  })
  return (
    <div className="keyboard"> 
    {
    firstSoundsGroup.map(sound=>(
      <>    
      <button className="drum-pad" onClick={()=>play(sound.key)}>
        <audio className='clip' id={sound.key} src={sound.url}/>
        {sound.key}

      </button>
      </>
    ))
    }
    </div>
             
  )

}

export default Keyboard
