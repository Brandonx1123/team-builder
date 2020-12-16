
import React, {useState} from 'react';
import TeamMemberForm from './TeamMemberForm'
import Form from '../components/Form'

const initialFormValues = {
  username: '',
  email: '',
  role: '',

}

function App() {

const [user, setUser] = useState([]);
const [formValues, setFormValues] = useState(initialFormValues);

const updateForm = (inputName, inputValue) => {
  setFormValues({
...formValues, [inputName] : inputValue,
  });
};


const submitForm = () => {
  const newUser ={
    username: formValues.username.trim(),
    email: formValues.email.trim(),
    role : formValues.role,
  };
  if (!newUser.username || !newUser.email || !newUser.role) return;

  setUser(user.concat(newUser));
  setFormValues(initialFormValues);
}

  return (
    <div className="App">
      <h1> User Forms</h1>
      <TeamMemberForm 
       values={formValues}
       update={updateForm}
       submit={submitForm}
       />

       {user.map ((person) => {
        return <Form key={person.id} details={person}/>;
      })}
     </div>
  );
}

export default App;
