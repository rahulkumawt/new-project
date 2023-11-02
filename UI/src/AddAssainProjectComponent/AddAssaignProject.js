import './AddAssaignProject.css';
import { useState } from 'react';
import axios from 'axios';
import { apiurlassaignproject } from '../apiurl';

function AddAssaignProject() {
  const [ assaignid , setAssaignProjectId ] = useState();
const [ ptitle , setAssaignProjectTitle ] = useState();
  const [ pgroup , setAssaignProjectPgroup] = useState();
  const [ pstartdeath , setAssaignProjectPstartdeath ] = useState();
  const [ penddeath , setAssaignProjectPenddeath ] = useState();
  const [ pinfo , setAssaignProjectPinfo] = useState();


  const [ output , setOutput ] = useState();
  const [ file , setFile ] = useState();

  const handleChange=(event)=>{
    setFile(event.target.files[0])
  }

  const handleSubmit=(event)=>{
    event.preventDefault();
    var formData = new FormData();
    formData.append('assaignid', assaignid);
     formData.append('ptitle', ptitle);
     formData.append('pgroup', pgroup);

    formData.append('pstartdeath', pstartdeath);
    formData.append('penddeath', penddeath);
    formData.append('pinfo',pinfo);

    const config = {
      'content-type': 'multipart/form-data'
    };

    axios.post(apiurlassaignproject+"save", formData, config).then((response) => {
      setAssaignProjectId("");

      setAssaignProjectTitle("");
      setAssaignProjectPgroup("");
      setAssaignProjectPstartdeath("");
      setAssaignProjectPenddeath("");
      setAssaignProjectPinfo("");

      setOutput("AssaignProject Added Successfully....");
    });  

  };

  return (
    <>
    {/* About Start */}
         <div class="container-fluid bg-secondary p-0">
            <div class="row g-0"style={{"background":"white"}}>
              <div class="col-lg-12 py-6 px-5">
<h1 class="display-5 mb-4">Add AssaignProject Here!!!</h1>
<font color="blue">{output}</font>
<form>
  <div class="form-group">
    <label for="Assaignid">AssaignProject Id:</label>
    <input type="text" class="form-control" value={assaignid} onChange={e => setAssaignProjectId(e.target.value)} />
  </div>    
  <br/>
  <div class="form-group">
    <label for="ptitle">Project Title:</label>
    <textarea class="form-control" value={ptitle} onChange={e => setAssaignProjectTitle(e.target.value)} >
  </textarea>
  </div>
  <br/>
  <div class="form-group">
  <div class="form-group">
    <label for="pgroup">AssaignProject Group:</label>
    <select class="form-control" value={pgroup} onChange={e => setAssaignProjectPgroup(e.target.value)} >
    <option>Select Group</option>
    <option>Student</option>
    <option>Student1</option>
    <option>Student2</option>
    <option>Student3</option>
    </select>
    </div>
    <div class="form-group">
    <label for="pstartdeath">Project Start Death:</label>
    <input type="text" class="form-control" value={pstartdeath} onChange={e => setAssaignProjectPstartdeath(e.target.value)} />
  </div>    
  <br/>
  <div class="form-group">
    <label for="Penddeath">Project End Death:</label>
    <input type="text" class="form-control" value={penddeath} onChange={e => setAssaignProjectPenddeath(e.target.value)} />
  </div>    
  <br/>

  
  </div>
  <br/>
  <div class="form-group">
    <label for="pinfo">Project information:</label>
    <input type="text" class="form-control" value={pinfo} onChange={e => setAssaignProjectPinfo(e.target.value)} />

  </div>
  <br/>
  <button type="button" onClick={handleSubmit} class="btn btn-success">Submit</button>
</form>



              </div>
          </div>
      </div>
      {/* About End */}
     </>		
  );
}

export default AddAssaignProject;


