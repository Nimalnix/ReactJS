import {Component} from "react";

import User from "./User.js"

 

class UserDetails extends Component{

    UserArray = [];

    cnt=0;

    constructor(){

        super();

        this.state = {

            firstName:"Unknown",

            lastName:"Unknown",

            Address:"Unknown",

            updateCount:0

        };

       this.updateFirstName = this.updateFirstName.bind(this);

       this.updateLastName = this.updateLastName.bind(this);

       this.updateAddress = this.updateAddress.bind(this);

       this.confirmReset = this.confirmReset.bind(this);

       this.addUser = this.addUser.bind(this);

   

    }

    /*

      This function gets execcuted the tag is getting load in the mounting phase

 

      use this function to initialize the state to perform some initial task like DB connection or authentication

    */

    // componentDidMount(){

    //     this.setState({firstName:''});

    //     this.setState({lastName:''});

    //     this.setState({Address:''});

    //     console.log("Tag loaded and initialized");

    // }

    // componentDidUpdate(){

    //     var today = new Date();

    //     //this.setState({updateCount:this.state.updateCount + 1});

    //     console.log('Got updated on ' + today.getHours() + " : " + today.getMinutes() + " for " + this.state.updateCount + " times");

    // }

    // componentWillUnmount(){

    //     var today = new Date();

    //     console.log('Tog unmounted on ' + today.getHours()+' : ' + today.getMinutes())

    // }

 

    updateFirstName(event){

        this.setState({firstName:event.target.value});

        this.setState({updateCount:this.state.updateCount+1});

    }

    updateLastName(event){

        this.setState({lastName:event.target.value});

        this.setState({updateCount:this.state.updateCount+1});

    }

    updateAddress(event){

        this.setState({Address:event.target.value});

        this.setState({updateCount:this.state.updateCount+1});

    }

    confirmReset(){

        var v = window.confirm("do you want to reset the form? Yes/No");

        return v;

    }

    addUser(event){

        event.preventDefault();

        var u = new User(this.state.firstName,this.state.lastName,this.state.Address)

        this.UserArray.push(u);

        this.setState({ firstName: "", lastName: "", Address: "" });

        console.log(this.userArray);

    }

    deleteUser(index) {
        this.UserArray.splice(index, 1);
        
        this.setState({firstName: "", lastName: "", Address: "" }); // Update the state to trigger a re-render
      }

    render(){

        return (

            <div>

                <form onReset={this.confirmReset} onSubmit={this.addUser}>

                    <center>

                    <label>firstName</label>

                    <input type="text" value={this.state.firstName} onChange={this.updateFirstName}/><br />

                    <label>lastName</label>

                    <input type="text" value={this.state.lastName} onChange={this.updateLastName}/><br />

                    <label>Address</label>

                    <input type="text" value={this.state.Address} onChange={this.updateAddress}/><br />

                    <input type="submit" value="save"/>&nbsp;

                    <input type="reset" value="reset"/>&nbsp;

                    <input type="submit" value="delete" />

                    </center>

                </form>
                
                <table align="center" border="4px" bgcolor="lavender" >
                   

                    <thead>
                   

                    <tr>

                        <td>First Name</td>

                        <td>Last Name</td>

                        <td>Address</td>

                        <td>Delete</td>

                    </tr>
                 

                    </thead>
                  

                    <thead>

 

                    {//react makes observor when {} it is opened it is design pattern it used to model that is observed

                       

                        this.UserArray.map((usr, index) => (

                       

                        <tr key={index}>

 

                           <td> {usr.firstName}&nbsp;</td>

 

                            <td>{usr.lastName}&nbsp;</td>

 

                            <td>{usr.Address}</td>

 

                            <td><button onClick={()=>this.deleteUser(index)}>Delete</button></td>

 

                        </tr>

 

                        ))

 

                    }

                    </thead>

 

               </table>


            </div>

        )

    }

}

export default UserDetails;