import React, { Component } from 'react'
import "./pag.css"
import Head from "./header.jsx"
 import Footer from "./footer.jsx"
 import Axios from 'axios';

export default class Project extends Component {

    state  = {
        projects: [], 
        projectId:"",
        projectName:'',
        projectDescription:'', 
      }
    
    componentDidMount() {    

      Axios.get("http://localhost:8080/dt/api/v1/project")
          .then(res => {
            
             this.setState({ projects:res.data });
                      })
          this.refreshProject();
    }

    handleAdd=(e)=>{ 
      e.preventDefault();
      Axios.post("http://localhost:8080/dt/api/v1/project/",{projectId:this.state.projectId,projectName:this.state.projectName,projectDescription:this.state.projectDescription})
      .then(res=>
       {
        console.log( this.state);        
        window.alert("Project added successfully");
        this.refreshProject(res);
        
       }
      ) 
      
    }
   
    refreshProject() {
        Axios.get("http://localhost:8080/dt/api/v1/project")
        .then(res => {
        //   console.warn("Refresh Service is working");
          this.setState({ projects:res.data });
        });
      }

      handleEdit(id){
        Axios
          .get(
            `http://localhost:8080/dt/api/v1/project/${id}`
          )
          .then(result => { 
    
            this.setState({             
              projectId:result.data.projectId,
              projectName: result.data.projectName,
              projectDescription: result.data.projectDescription
              
            });
          });
    }
    
    handleDelete = (id) => {
      Axios.delete("http://localhost:8080/dt/api/v1/project/" + id)
      .then(res => {
      //   console.warn("Delete Service is working");
        this.refreshProject(res);  
        window.alert(" Project deleted successfully");
      });
    }  
   
    handleChangepid =(e)=>{
      this.setState({projectId:e.target.value});
      console.log( e);
     }

    handleChangepname =(e)=>{
      this.setState({projectName:e.target.value});
      console.log( e);
     }

     handleChangepdes =(e)=>{
      this.setState({projectDescription:e.target.value});
      console.log( e);
     }
  
    render() {
      
        return (
            <div>
            <Head />
            &emsp;    <a href = "/back"> <button class="editbtn1">HOME</button></a>
                    
            <div className="leftnav">
                <h1  className="navi">ADD PROJECTS </h1> 
                    <form className="for" onSubmit={this.handleAdd}>   
                    <label>Id</label><br></br>
                    <input type="text" name="projectId" className="text" value={this.state.projectId}onChange={this.handleChangepid} required ></input>  
                    <label>Name</label>
                    <input type="text" name="projectName" className="text" value={this.state.projectName}onChange={this.handleChangepname} required></input>    
                    <label>Description</label>                
                    <input type="text" name="projectDescription" className="text" value={this.state.projectDescription}onChange={this.handleChangepdes} required></input>
              
                    &emsp;&emsp; &emsp; &emsp;&emsp; &emsp; &emsp;&emsp;  <button className="reset" type="submit">&nbsp;Save</button>                                         
                  &emsp;&emsp; <input type="reset" Value="Reset" className="reset"/> 
                </form>                             
                </div>

                {/* table */}
                <div className="rightnav">
                <h1 className="ad1">PROJECTS TABLE</h1> 

                <div className="ad1"> 
                <table border="1" className="ad1" id="customers">
               
                <tr>
                    <th>ID</th>
                    <th>Name</th>  
                    <th>Description</th>                                         
                    <th>Action</th>                    
                </tr>

                { this.state.projects.map(p=>{
                 return(                
                   <tr>
                    <td>{p.projectId}</td>
                    <td>{p.projectName}</td>
                    <td>{p.projectDescription}</td>                   
                    <td>&nbsp;&nbsp; <button className="editbtn" onClick={()=>this.handleEdit(p.projectId)}>
                    &nbsp;Edit</button>
                    &nbsp;&nbsp;&nbsp;=|= &nbsp;&nbsp;
                    <button className="editbtn" onClick={()=>this.handleDelete(p.projectId)}>&nbsp;Delete</button>
                    </td>

                </tr>) 

                }) }

                </table>                                               
                <br></br><br></br><br></br><br></br>
                <br></br><br></br><br></br><br></br>
                </div>
                </div>
                <Footer />
            </div>
        );
    }
}
