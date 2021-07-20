import React, { useState, useEffect } from 'react'

const App = () => {
  const [name, setName] = useState([])

  useEffect(() => {
    fetch('https://enigmatic-shore-92552.herokuapp.com/generate')
      .then((res) => res.json())
      .then((nme) => setName([nme]))
  }, [])

  return (
    <h1>{name}</h1>
  )
}

export default App


heroku create namegeatorback
Creating ⬢ namegeatorback... done
https://namegeatorback.herokuapp.com

heroku create nameneralient -b https://github.com/mars/create-react-app-buildpack.git
Creating ⬢ nameneralient... done
Setting buildpack to https://github.com/mars/create-react-app-buildpack.git... done
https://nameneralient.herokuapp.com/ | https://git.heroku.com/nameneralient.git