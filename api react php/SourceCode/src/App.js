//src/App.js
import React from 'react';
 
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {employee: []};
        this.headers = [
            { key: 'id', label: 'Id'},
            { key: 'name', label: 'Name' },
            { key: 'position', label: 'Position' },
            { key: 'office', label: 'Office' },
            { key: 'age', label: 'Age' },
            { key: 'salary', label: 'Salary' }
        ];
        this.state = { checkedBoxes: [] };
        this.deleteEmployee = this.deleteEmployees.bind(this);
        this.toggleCheckbox = this.toggleCheckbox.bind(this);
    }
     
    deleteEmployees = (event) => {
        event.preventDefault();
        if(window.confirm('Are you sure, want to delete the selected employee?')) {
            alert(this.state.checkedBoxes + " Succesfully Deleted");
        }
    }
     
    toggleCheckbox = (e, item) => {      
        if(e.target.checked) {
            let arr = this.state.checkedBoxes;
            arr.push(item.id);
             
            this.setState = { checkedBoxes: arr};
        } else {            
            let items = this.state.checkedBoxes.splice(this.state.checkedBoxes.indexOf(item.id), 1);
             
            this.setState = {
                checkedBoxes: items
            }
        }       
        console.log(this.state.checkedBoxes);
    }
     
    componentDidMount() {
        fetch('http://localhost/devtest/reactjs/employee.php')
        .then(response => {
     console.log(response);      
            return response.json();  


            
//       .then((response) => response.json())
//       .then((data) => {
//          console.log(data);
           
          }).then(result => {
            // Work with JSON data here
            console.log(result);
            this.setState({
                employee_rs:result
            }); 
          }).catch(err => {
            // Do something for an error here
            console.log("Error Reading data " + err);
          });
    }
         
    render() {
        const employeeFound = this.state.employee_rs && this.state.employee_rs.length;
        if(employeeFound) {
            return (
                <div className="container"><h1>ReactJS Fetch Data from Database with PHP Mysql</h1>
                    <div id="msg"></div>
                    <button type="button" className="btn btn-danger" onClick={this.deleteEmployees}>Delete Selected Employee(s)</button>
                    <table className="table table-bordered table-striped">
                        <thead>
                            <tr>
                                {
                                    this.headers.map(function(h) {
                                        return (
                                            <th key={h.key}>{h.label}</th>
                                        )
                                    })
                                }
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.employee_rs.map(function(item, index) {
                                return (
                                    <tr key={index}>
                                      <td><input type="checkbox" className="selectsingle" value="{item.id}" checked={this.state.checkedBoxes.find((p) => p.id === item.id)} onChange={(e) => this.toggleCheckbox(e, item)}/>
                                        {item.id}
                                      </td>
                                      <td>{item.name}</td>
                                      <td>{item.position}</td>
                                      <td>{item.office}</td>
                                      <td>{item.age}</td>
                                      <td>{item.salary}</td>
                                    </tr>
                                )}.bind(this))
                            }
                        </tbody>
                    </table>
                </div>
            )
        } else {
            return (
                <div id="container">
                    No employee found
                </div>
            )
        }
    }
}
export default App;






// import {useEffect, useState}from 'react';
// function App() {


   
// const [posts, setPosts] = useState([]);
// useEffect(() => {
//    fetch('http://localhost/devtest/reactjs/employee.php/')

//       .then((response) => response.json())
//       .then((data) => {
//          console.log(data);
//          setPosts(data);
//       })
//       .catch((err) => {
//          console.log(err.message);
//       });
// }, []);


//   return (
//     <div className="posts-container">
//        {posts.map((post) => {
//           return (
            
//              <div className="card" style={{width: "18rem",border:"solid black 1px"}}  key={post.id}>
           
//   <div class="card-body">
//     <h5 class="card-title">{post.name}</h5>
// {/*    
//     <p class="card-text">{post.body}</p> */}

  
// </div>
//              </div>
//           );
//        })}
//     </div>
//     );

// // function App() {
// //   const[catFact, setCatFact]=useState("");
// //   useEffect(()=>{
// // Axios.get("https://catfact.ninja/fact").then((res)=>{
// //   setCatFact(res.data.fact);
// //   console.log(res.data)
// // })
// //   },[]);

// //   return (
// //     <div className="App">

// // <p>{catFact}</p>

// //     </div>
// //   );

// }

// export default App;
