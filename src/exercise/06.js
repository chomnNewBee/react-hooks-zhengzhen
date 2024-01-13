// useEffect: HTTP requests
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'
// 🐨 you'll want the following additional things from '../pokemon':
// fetchPokemon: the function we call to get the pokemon info
// PokemonInfoFallback: the thing we show while we're loading the pokemon info
// PokemonDataView: the stuff we use to display the pokemon info
import {PokemonInfoFallback, PokemonDataView, PokemonForm, fetchPokemon} from '../pokemon'

function PokemonInfo({pokemonName}) {
  const [pokemon , SetPokemon] = React.useState(null)
  const [errorInfo, SetErrorInfo] = React.useState(null)
  console.log(pokemonName)
  React.useEffect(() =>{
    fetchPokemon(pokemonName).then(
      (pokemonData) => {
      SetPokemon(pokemonData)
      },
      (error) => {
        console.log(error)
        SetErrorInfo(error)
      }
    )
    SetPokemon(null)
    //here need set errorInfo to null,otherwise page will always be error page
    SetErrorInfo(null)

  },[pokemonName])


  // 🐨 Have state for the pokemon (null)
  // 🐨 use React.useEffect where the callback should be called whenever the
  // pokemon name changes.
  // 💰 DON'T FORGET THE DEPENDENCIES ARRAY!
  // 💰 if the pokemonName is falsy (an empty string) then don't bother making the request (exit early).
  // 🐨 before calling `fetchPokemon`, clear the current pokemon state by setting it to null.
  // (This is to enable the loading state when switching between different pokemon.)
  // 💰 Use the `fetchPokemon` function to fetch a pokemon by its name:
  //   fetchPokemon('Pikachu').then(
  //     pokemonData => {/* update all the state here */},
  //   )
  // 🐨 return the following things based on the `pokemon` state and `pokemonName` prop:
  //   1. no pokemonName: 'Submit a pokemon'
  //   2. pokemonName but no pokemon: <PokemonInfoFallback name={pokemonName} />
  //   3. pokemon: <PokemonDataView pokemon={pokemon} />

  // 💣 remove this
  if(errorInfo){
    return (<div>{errorInfo.message}</div>)
  }
  if(!pokemonName){
    return "please input a pokemonName"
  }
  else if(!pokemon){
    return <PokemonInfoFallback name={pokemonName} />
  }
  else {
    return <PokemonDataView pokemon={pokemon} />
  }

}

function App() {
  const [pokemonName, setPokemonName] = React.useState('')

  function handleSubmit(newPokemonName) {
    setPokemonName(newPokemonName)
  }

  return (
    <div className="pokemon-info-app">
      <PokemonForm pokemonName={pokemonName} onSubmit={handleSubmit} />
      <hr />
      <div className="pokemon-info">
        <PokemonInfo pokemonName={pokemonName} />
      </div>
    </div>
  )
}

export default App
