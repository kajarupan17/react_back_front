import React, { Component } from 'react'
import "./pag.css"
import Head from "./header.jsx"
 import Footer from "./footer.jsx"
 import Axios from 'axios';

export default class Employee extends Component {
    state = {
          emp: [],
           empId:"",
           empName:'',
            empType:'',
             projectId:'',
          }

    componentDidMount() {
        Axios.get(`http://localhost:8080/dt/api/v1/emp`)
          .then(res => {
            //console.log(res);
             this.setState({ emp:res.data });
            // console.log( this.setState);
          })
          this.refreshEmp();
    }

    refreshEmp() {
        Axios.get("http://localhost:8080/dt/api/v1/emp")
        .then(res => {       
          this.setState({ emp:res.data });
        });
      }


      handleDelete = (id) => {
        Axios.delete("http://localhost:8080/dt/api/v1/emp/" + id)
        .then(res => {
        //   console.warn("Delete Service is working");
          this.refreshEmp(res);  
          window.alert(" Employee deleted successfully");
        });
      }

      handleEdit(id){
        Axios
          .get(
            `http://localhost:8080/dt/api/v1/emp/${id}`
          )
          .then(result => { 
    
            this.setState({             
              empId:result.data.empId,
              empName: result.data.empName,
              empType: result.data.empType,
              projectId: result.data.projectId,
              
            });
          });
    }

      handleAdd=(e)=>{ 
        e.preventDefault();
        Axios.post("http://localhost:8080/dt/api/v1/emp/",{
          empId:this.state.empId,
          empName:this.state.empName,
          empType:this.state.empType,
          projectId:this.state.projectId
        })
        .then(res=>
         {
          console.log( this.state);        
          window.alert("Employee added successfully");
          this.refreshEmp(res);
          }
        ) 
        
      }

      handleChangeeid =(e)=>{
        this.setState({empId:e.target.value});
        console.log( e);
       }

      handleChangeempname =(e)=>{
        this.setState({empName:e.target.value});
        console.log( e);
       }

       handleChangeptype =(e)=>{
        this.setState({empType:e.target.value});
        console.log( e);
       }

       handleChangepid =(e)=>{
        this.setState({projectId:e.target.value});
        console.log( e);
       }

    render() {
        console.log(this.state.emp)
        return (
            <div>
            <Head />
            <a href = "/back"><button class="editbtn1">HOME</button></a>
            <div className="leftnav">
              <h1 className="navi">ADD EMPLOYEE </h1> 
            <form className="for" onSubmit={this.handleAdd}>

                <label>Id</label><br></br>
                <input type="text" name="empId" className="txtid" value={this.state.empId}onChange={this.handleChangeeid} required></input>
                <label>Name</label><br></br>
                <input type="text" name="empName" className="txtid" value={this.state.empName}onChange={this.handleChangeempname} required></input>   
                <label>Type</label> <br></br>                 
                <input type="text" name="empType" className="txtid" value={this.state.empType}onChange={this.handleChangeptype} required></input>
                <label>Project Id</label> <br></br>          
                <input type="text" name="projectId" className="txtid" value={this.state.projectId}onChange={this.handleChangepid} required></input>
               
                &emsp;&emsp; &emsp; &emsp;&emsp; &emsp; &emsp;&emsp;<button className="reset" type="submit"> &nbsp;Save</button>                       
                &emsp;&emsp;    &emsp;<input type="reset" Value="Reset" className="reset"/> 

            </form>                             
            </div>
           <div className="rightnavemp">
                <h1 className="ad1">EMPLOYEE TABLE</h1> 
                <div className="ad1">                    
                    
            
          <table border="1" className="ad1" id="customers">
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Type</th>
                <th>Project Id</th>           
                <th>Action</th>
            </tr>
                             
            { this.state.emp.map(e=>{
            return( 
            <tr>
                <td>{e.empId}</td>
                <td>{e.empName}</td>
                <td>{e.empType}</td>
                <td>{e.projectId}</td>    
                            
                <td>&nbsp;&nbsp;<button className="editbtn" onClick={()=>this.handleEdit(e.empId)}>&nbsp;Edit</button>
                &nbsp;&nbsp;&nbsp; =|= &nbsp;&nbsp;<a href={`/update/${e.empId}`}><button className="editbtn" onClick={()=>this.handleDelete(e.empId)}>
                 &nbsp;Delete</button></a>
                 </td>
                </tr>) 
                }) }            
            </table>  
             <br></br>                                     
            </div>
            </div>
            <br></br><br></br><br></br><br></br><br></br>
            <Footer />
            </div>
        )
    }
}               