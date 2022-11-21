function AddStudent() {
    const[student,setStudent]=useState({
        first_name:"",
        last_name:"",
        email:"",

    })
    return (
        <>
        <div className="row">
        <div className="col-md-12 text-center">
            <h1>
                add student
                
            </h1>
        
        
        </div>
        </div>
        <div className="row">
            <div className="col-md-6">first name</div>
            <div className="col-md-6">
<input type="text" name="first_name" className="form-control"/>

            </div>
        </div>
        <div className="row">
            <div className="col-md-6">last name</div>
            <div className="col-md-6">
<input type="text" name="last_name" className="form-control"/>

            </div>
        </div>
        <div className="row">
            <div className="col-md-6">email</div>
            <div className="col-md-6">
<input type="email" name="email" className="form-control"/>

            </div>
        </div>

        <div className="row">
            <div className="col-md-12">
                <input type="submit" name="submit" value="Add Student" className="btn btn-warning"/>
            </div>
        </div>
        </>
          );
        }
        
        export default AddStudent;