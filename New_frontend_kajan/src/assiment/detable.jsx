import React, { Component } from 'react'
import "./pag.css"
import Head from "./header.jsx"
 import Footer from "./footer.jsx"
 import Axios from 'axios';

export default class Employee extends Component {

    state = {
        defects: [], 
        defectId:"",
        defectName:"",
        defectDescription:"",
        empId:"",
        priorityChoices:"",
        projectId:"",
        severityChoices:"",
        status:"",
      }


      componentDidMount() {
        Axios.get(`http://localhost:8080/dt/api/v1/defect`)
          .then(res => {
            console.log(res);
             this.setState({ defects:res.data });
             console.log( this.setState);
          })
          this.refreshDefect();
    }

    handleAdd=(e)=> { 
      e.preventDefault();
      Axios.post("http://localhost:8080/dt/api/v1/defect",{
        defectId:this.state.defectId,
        defectName:this.state.defectName,
        defectDescription:this.state.defectDescription,
        empId:this.state.empId,
        priorityChoices:this.state.priorityChoices,
        projectId:this.state.projectId,
        severityChoices:this.state.severityChoices,
        status:this.state.status,
      })
      .then(res=>
       {
        console.log( this.state);        
        window.alert("Defect added successfully");
        this.refreshDefect(res);
        
       }
      ) 
      
    }
    
    refreshDefect() {
        Axios.get("http://localhost:8080/dt/api/v1/defect")
        .then(res => {
        //   console.warn("Refresh Service is working");
          this.setState({ defects:res.data });
        });
      }

       handleEdit(id){
        Axios
          .get(
            `http://localhost:8080/dt/api/v1/defect/${id}`
          )
          .then(result => { 
    
            this.setState({             
              defectId:result.data. defectId,
              defectName: result.data.defectName,
              defectDescription: result.data.defectDescription,
              empId:result.data. empId,
              priorityChoices: result.data.priorityChoices,
              projectId: result.data.projectId,
              severityChoices:result.data. severityChoices,
              status: result.data.status ,             
            });
          });
    }

      handleDelete = (id) => {
        Axios.delete("http://localhost:8080/dt/api/v1/defect/" + id)
        .then(res => {
        //   console.warn("Delete Service is working");
          this.refreshDefect(res);  
          window.alert(" defects deleted successfully");
        });
      }

      handleChangedid =(e)=>{
        this.setState({defectId:e.target.value});
        console.log( e);
       }
       handleChangedname=(e)=>{
        this.setState({defectName:e.target.value});
        console.log( e);
       }
       handleChangeddesc =(e)=>{
        this.setState({defectDescription:e.target.value});
        console.log( e);
       }
       handleChangedeid =(e)=>{
        this.setState({empId:e.target.value});
        console.log( e);
       }
       handleChangedpriority =(e)=>{
        this.setState({priorityChoices:e.target.value});
        console.log( e);
       }
       handleChangedpid =(e)=>{
        this.setState({projectId:e.target.value});
        console.log( e);
       }
       handleChangedseverity =(e)=>{
        this.setState({severityChoices:e.target.value});
        console.log( e);
       }
       handleChangedstatus =(e)=>{
        this.setState({status:e.target.value});
        console.log( e);
       }
     

    render() {
        console.log(this.state.defects)
        return (
            <div>
            <Head />
            <a href = "/back"> <button class="editbtn1">HOME</button></a>
               <div className="leftnav">
                 <h1 className="navi">ADD DEFECTS </h1> 
                 
            <form className="for" onSubmit={this.handleAdd}>  

                <label>Id</label><br></br>
                <input type="text" name="defectId" className="txtid" value={this.state.defectId}onChange={this.handleChangedid} required></input>
                <label>Name</label><br></br>
                <input type="text" name="defectName" className="txtid" value={this.state.defectName}onChange={this.handleChangedname} required></input>
                <label>Description</label><br></br>
                <input type="text" name="defectDescription" className="txtid" value={this.state.defectDescription}onChange={this.handleChangeddesc} required></input>   
                <label>Employee ID</label> <br></br>                 
                <input type="text" name="empId" className="txtid" value={this.state.empId}onChange={this.handleChangedeid} required></input>
               
                <label>Priority </label>         
                <select className="txtid" name="priorityChoices" value={this.state.priorityChoices}onChange={this.handleChangedpriority} required> 
                    <option>Low</option>
                    <option>Medium</option>
                    <option>High</option>
                </select>
                
                <label>Project Id</label> 
                <input type="text" name="projectId" className="textarea" value={this.state.projectId}onChange={this.handleChangedpid} required></input>
               
                <label>Severity</label>
                <select className="txtid" name="severityChoices" value={this.state.severityChoices}onChange={this.handleChangedseverity} required>
                    <option>Low</option>
                    <option>Medium</option>
                    <option>High</option>
                </select>
               
                <label>Status</label> 
                <input type="text" name="status" className="txtid" value={this.state.status}onChange={this.handleChangedstatus} required></input><br></br><br></br>                      
                
                &emsp;&emsp; &emsp; &emsp;&emsp; &emsp; &emsp;&emsp;     <button type="submit" className="reset"> &nbsp;Save</button>                       
                 &emsp;<input type="reset" Value="Reset" className="reset"/> 
            </form>                             
            </div>
            
            <div className="rightnavdef">
            <h1 className="navi">DEFECT TRACKER TABLE</h1> 
                   <div className="ad1">                        
                   </div>
            <table  border="1" className="ad1" id="customers">
            <tr>
                <th>ID</th>
                <th>Description</th>
                <th>Name</th>
                <th>Employee Id</th>
                <th>Priority</th>
                <th>Project Id</th>
                <th>Severity</th>
                <th>Status</th>                       
                <th>Action</th>
                             
            </tr>
            { this.state.defects.map(d=>{
            return( 
            <tr>
                <td>{d.defectId}</td>
                <td>{d.defectDescription}</td>
                <td>{d.defectName}</td>
                <td>{d.empId}</td> 
                <td>{d.priorityChoices}</td>
                <td>{d.projectId}</td>
                <td>{d.severityChoices}</td>
                <td>{d.status}</td>
                              
                <td>&nbsp;&nbsp;<button className="editbtn" onClick={()=>this.handleEdit(d.defectId)}>
                &nbsp;&nbsp;&nbsp;Edit</button>
                &nbsp;&nbsp;&nbsp;=|= &nbsp;&nbsp;<button className="editbtn" onClick={()=>this.handleDelete(d.defectId)}>               
                &nbsp;Delete</button></td>

                </tr>) 
                
                }) }
            </table>                                        
            <br></br><br></br><br></br><br></br>
            </div>
            <br></br><br></br><br></br><br></br>
            <Footer />
            </div>
        )
    }
}            