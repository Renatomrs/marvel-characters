import React from "react"

import "./styles.css"

const Card = ({ character, children }) => {
  return (
    <article className="card">
      <img
        className="cardImg"
        src={`${character.thumbnail.path}.${character.thumbnail.extension}`} 
        alt="Avatar"
      />

      <div>
        <div>
          <span>{character.name}</span>
        </div>

        {children}
      </div>
    </article>
  )
}

export default Card
