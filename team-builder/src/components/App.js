
import React, {useState} from 'react';
import TeamMemberForm from '../components/TeamMember'
import Form from '../components/Form'

const intialFormValues = {
  username: '',
  email: '',
  role: '',

}

function App() {

const [forms, setForms] = useState([]);
const [formValues, setFormValues] = useState(intialFormValues);

const updateForm = (inputName, inputValue) => {
  setFormValues( {
    ...formValues, [inputName] : inputValue
  })
}


const submitForm = () => {
  const newUpdateForm ={
    username: formValues.username.trim(),
    email: formValues.email.trim(),
    role : formValues.role.trim(),
  }
}

  return (
    <div className="App">
      <h1> User Forms</h1>
      <TeamMemberForm 
      values={formValues}
       update={updateForm}
       submit={submitForm}  />
     </div>
  );
}

export default App;
