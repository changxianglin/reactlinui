// import React from 'react'

// import { ExampleComponent } from 'reactlinui'
// import 'reactlinui/dist/index.css'

// const App = () => {
//   return <ExampleComponent text="Create React Library Example 😄" />
// }

// export default App


import React, { Component } from 'react'

import { ColoredHeadingOne, ColoredHeadingTwo } from 'reactlinui'

export default class App extends Component {
  render() {
    return (
      <div>
        <ColoredHeadingOne
          text="Colored heading one is working"
          color={'red'}
        />

        <ColoredHeadingTwo
          text="Colored heading one is working"
          color={'blue'}
        />
      </div>
    )
  }
}