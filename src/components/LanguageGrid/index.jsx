import React from 'react'

const LanguageGrid = ({type}) => {
  return (
    <div>
      {type.map((e,index)=><h2 key={index}>{e.name}</h2>)}
    </div>
  )
}

export default LanguageGrid