function Employee(){
    return<>
    
    <form className="container">
        <h2 style={{textAlign:"center"}}>Employee Form</h2>
        <div className="row">
           <div className="col-4">
             <label>FirstName</label><br />
             <input type="text" placeholder="Enter your FirstName" className="form-control"  />
           </div>
           <div className="col-4">
            <label>MiddleName</label><br />
            <input type="text" placeholder="Enter your MiddleName" className="form-control"/>
           </div>
           <div className="col-4">
            <label>LastName</label><br />
            <input type="text" placeholder="Enter your LastName" className="form-control" />
           </div>
        </div>
        <div className="row">
           <div className="col-4">
             <label>Birth date</label><br />
             <input type="date" placeholder="Enter your DOB" className="form-control"/>
           </div>
           <div className="col-4">
            <label>Email</label><br />
            <input type="email" placeholder="Enter your Email" className="form-control"/>
           </div>
           <div className="col-4">
            <label>Phone Number</label><br />
            <input placeholder="Enter your Phone Number" className="form-control"/>
           </div>
        </div>
        <div className="row">
           <div className="col-4">
             <label>Select Gender</label><br />
              <select className="form-select">
                <option>Male</option>
                <option>Female</option>
              </select>
           </div>
           <div className="col-4">
            <label>Start time</label><br />
            <input type="time" className="form-control"/>
           </div>
           <div className="col-4">
            <label>End Time</label><br />
            <input type="time" className="form-control"/>
           </div>
        </div>
        <div className="row">
           <div className="col-4">
             <label>Job position</label><br />
             <select className="form-select">
                <option>Manager</option>
                <option>Assistant Manager</option>
             </select>
           </div>
           <div className="col-4">
            <label>Select Teams</label><br />
            <input placeholder="Select" className="form-control"/>
           </div>
           <div className="col-4">
            <label>Select Designation</label><br />
            <input placeholder="Select" className="form-control"/>
           </div>
        </div>
        <div className="row">
            <div className="col-4">
            <label>Billable Hours</label><br />
            <input placeholder="Enter Billable Hours" className="form-control"/>
            </div>
            <div className="col-4">
               <br></br>
                <input type="checkbox" />
                <label>is Billable</label>
            </div>
        </div>
        <div className="row">
            <div style={{textAlign:"center"}}>
            <button style={{backgroundColor:"blue", color:"white", border:"1px solid blue", borderRadius:"5px"}}>Submit</button>
            </div>
        </div>
       
    </form>
    </>
}

export default Employee