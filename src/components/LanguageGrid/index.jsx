import React from 'react'

const LanguageGrid = ({type}) => {
  return (
    <div>
      {type.map((e)=><h2>{e.name}</h2>)}
    </div>
  )
}

export default LanguageGrid