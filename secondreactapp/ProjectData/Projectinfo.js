import { Component } from "react";
import './Projectinfo.css'


class Projectinfo extends Component
{
    constructor()
    {
        super();
        this.state={ProjectName:"unknown",ManagerName:"unknown",startingDate:"unknown"}
        this.updateprojectname=this.updateprojectname.bind(this);
        this.updatemanagername=this.updatemanagername.bind(this);
        this.updatestartingdate=this.updatestartingdate.bind(this);
    }

updateprojectname(event)
{
    console.log(event.target.value)
    this.setState ({ProjectName: event.target.value});

}

updatemanagername(event)
{
    console.log(event.target.value)
    this.setState ({ManagerName: event.target.value});
}


updatestartingdate(event)
{
    console.log(event.target.value)
    this.setState ({startingDate: event.target.value});
}




render()

{
    return (
        <div classname="Formclass">
        <center>
        <form>
          <label id='1s'>Project Name</label>
           <input type="text" name="Projectname " onChange={this.updateprojectname} /><br/>
          <label>Manager name</label>
          <input type="text" name="Managername " onChange={this.updatemanagername} /><br/>
           <label>Starting Date</label>
            <input type="date" name="startingdate " onChange={this.updatestartingdate} /><br/>
            <input type="submit" name="save"  />
            <br></br>
            <b>ProjectName :</b>&nbsp;&nbsp;
           <label>
            {this.state.ProjectName}

          </label>
          <br></br>
          <b>ManagerName :</b>&nbsp;&nbsp;
          <label>
            {this.state.ManagerName}
          </label>
          <br></br>
          <b>startingDate :</b>&nbsp;&nbsp;
          <label>
            {this.state.startingDate}
          </label>
          </form>
          </center>
          </div>

    )
}


}

export default Projectinfo;
