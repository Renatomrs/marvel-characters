import React, { useState, useEffect } from "react"

import api from '../../services/api'

import { useParams } from "react-router-dom"

import { useNavigate } from "react-router-dom"

import Header from "../../components/Header"
import Card from "../../components/Card"

const CharacterDetails = () => {
  const [characters, setCharacters ] = useState([])

  const { id } = useParams()
  
  const navigate = useNavigate()

  useEffect(() => {
    api.get(`/characters/${id}`)
      .then(response => { 
      setCharacters(response.data.data.results)
    })
    .catch(err => console.log(err))
  }, [])

  return (
    <>
      <Header>
        <button onClick={() => navigate("/")}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            {/* <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --> */}
            <path d="M512 256C512 273.7 497.7 288 480 288H160.1l0 72c0 9.547-5.66 18.19-14.42 22c-8.754 3.812-18.95 2.077-25.94-4.407l-112.1-104c-10.24-9.5-10.24-25.69 0-35.19l112.1-104c6.992-6.484 17.18-8.218 25.94-4.406C154.4 133.8 160.1 142.5 160.1 151.1L160.1 224H480C497.7 224 512 238.3 512 256z"/>
          </svg>

          <span>Back</span>
        </button>
      </Header>

      <h1>Character Details</h1>
    
      <section>
        {characters.map(character => {
          return (
            <Card key={character.id} character={character}>
              <p>
                {character.description}
              </p>
            </Card>
          )
        })}
      </section>
    </>
  )
}

export default CharacterDetails
