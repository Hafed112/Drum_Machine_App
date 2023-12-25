import React from 'react'

const Controler = ({name,changeSoundsGroup}) => {
  return (
    <div className='controle'>
    <h2 id="display" >{name}</h2>
      <button onClick={changeSoundsGroup}>Change Sound Group</button>
    </div>
  )
}

export default Controler
