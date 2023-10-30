import React, { Component } from 'react'

 class SetState extends Component {


    constructor()
    {
        super()
      this.state=
      {
        count : 0

      }
    }

    Increment()
    {
        this.setState(prevState=>({
            count: prevState.count +1
        }))
    }
  render() {
    return (
        <div>
      <div>Count - {this.state.count}</div>
      <button onClick={()=> this.Increment()}>Increment</button>

</div>
    )
  }
}

export default SetState