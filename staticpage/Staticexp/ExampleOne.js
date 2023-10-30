import React,{Component} from 'react'
class ExampleOne extends Component
{
    constructor()
    {
        super()
        this.state={
            message:"welcome Visitor"
        }
    }
   
    changeMessage()
    {
        this.setState({
            message: 'Welcome to the world of reactjs'
        })
    }

   render()
   {
    return(
        <div>
            <h1>{this.state.message}</h1>
       
            <button onClick={()=> this.changeMessage()}>NEXT</button>

</div>
    )
   }

}


export default ExampleOne;