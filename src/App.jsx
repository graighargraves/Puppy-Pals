import { useState } from 'react'
import {puppyList} from './data.js'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import './App.css'

function App() {
  const [puppies, setPuppies] = useState(puppyList)
  const [featPupId, setFeatPupId] = useState(null)
  const featuredPup = puppies.find((pup)=> pup.id === featPupId)
  console.log(featuredPup)
  return (
      <div className="App">
        
        {featPupId && (
        <div>
          <h2 className='featuredPup'>{featuredPup.name}</h2>
          <ul>
            <li className='featuredPup'>Age: {featuredPup.age}</li>
            <li className='featuredPup'>Email: {featuredPup.email}</li>
          </ul>
        </div>
      )}
        {
          
          puppies.map((puppy)=> {
            return <p onClick={()=>{
              console.log("Clicked:", puppy.id)
              setFeatPupId(puppy.id)}} key={puppy.id}>
              {puppy.name}</p>
          })
        }
      </div>
  )
}

export default App
