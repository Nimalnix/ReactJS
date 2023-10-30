import React, { Component } from 'react'

export class LifecycleOfA extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:'harish'
      }
      console.log('lifecycleA constructor')
    }

    componentDidMount()
    {
      console.log('Lifecycle ComponmentDidMount')
    }
  render() {
    
        console.log('LifecycleA render')
     return <div>Lifecycle A</div>
    
  }
}

export default LifecycleOfA