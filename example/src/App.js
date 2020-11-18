// import React from 'react'

// import { ExampleComponent } from 'reactlinui'
// import 'reactlinui/dist/index.css'

// const App = () => {
//   return <ExampleComponent text="Create React Library Example 😄" />
// }

// export default App


import React, { Component } from 'react'

import { ColoredHeadingOne, ColoredHeadingTwo, Button } from 'reactlinui'
import 'reactlinui/dist/index.css'

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

        <Button text="这是按钮" />
        <Button type='primary' text="这是主按钮" />
        <Button type='dashed' text="这是主按钮" />
        <Button type='text' text="这是主按钮" />
        <Button type='link' text="这是主按钮" />

        <Button size='large' text="这是主按钮" />
        <Button size='small' text="这是主按钮" />
      </div>
    )
  }
}