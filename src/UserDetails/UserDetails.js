import { Component } from "react";



class UserDetails extends Component
{
       constructor()
       {
        super();
        this.state={FirstName:'hi',LastName:'hello'};
        this.updatefirstname=this.updatefirstname.bind(this);
        this.updatelastname=this.updatelastname.bind(this);

       }


     updatefirstname(event)
     {
        console.log(event.target.value)
        //store the value of the firstname textboox into
        //firstname field in the state
        this.setState({FirstName: event.target.value});
     }

     updatelastname(event)
     {
        console.log(event.target.value)
         //store the value of the Lastname textboox into
        //Lastname field in the state
        this.setState({LastName: event.target.value});
     }



    //This class must implement function callled render to display HTML tags
     render()
     {
        return (
            <div className="Formclass">
                <center>
               <form>
                   <label>First Name</label>
                   <input type="text" name="FirstName" value={this.state.FirstName} onChange={this.updatefirstname} /><br/>
                   <label>Last Name</label>
                   <input type="text" name="LastName" value={this.state.LastName}onChange={this.updatelastname} /><br/>
                   <input type="submit" value="save"></input>
                   <br></br>
                   <b>your full name Mr/Mrs</b>&nbsp;&nbsp;
                   <label>
                    {this.state.FirstName}&nbsp;&nbsp;
                   {this.state.LastName}
                   </label>

               </form>
               </center>
            </div>
        )
     }
}


export default UserDetails;