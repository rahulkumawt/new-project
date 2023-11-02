import './AddGroup.css';
import { useState } from 'react';
import axios from 'axios';
import { apiurlgroup } from '../apiurl';

function AddGroup() {

  const [ gname , setGroupName ] = useState();

  const [ ptitle , setGroupTitle ] = useState();
  const [ pstream , setGroupStream ] = useState();
  const [ pdescription , setGroupDescription ] = useState();
  const [ output , setOutput ] = useState();
  const [ file , setFile ] = useState();

  const handleChange=(event)=>{
    setFile(event.target.files[0])
  }

  const handleSubmit=(event)=>{
    event.preventDefault();
    var formData = new FormData();
    formData.append('gname', gname);

    formData.append('ptitle', ptitle);
    //formData.append('pstream', pstream);
    //formData.append('pdescription', pdescription);
    //formData.append('file', file);

    const config = {
      'content-type': 'multipart/form-data'
    };

    axios.post(apiurlgroup+"save", formData, config).then((response) => {
      
      setGroupName("");
      setGroupTitle("");
      //setStream("");
      //setGroupDescription("");
      setOutput("Group Added Successfully....");
    });  

  };

  return (
    <>
    {/* About Start */}
         <div class="container-fluid bg-secondary p-0">
            <div class="row g-0"style={{"background":"white"}}>
              <div class="col-lg-12 py-6 px-5">
<h1 class="display-5 mb-4">Add Group Here!!!</h1>
<font color="blue">{output}</font>
<form>
  <div class="form-group">
    <label for="gname">Group Name:</label>
    <input type="text" class="form-control" value={gname} onChange={e => setGroupName(e.target.value)} />
   


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

export default AddGroup;
