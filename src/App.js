
import './App.css';
import {Route} from 'react-router-dom'
import MultiStepForm from './Components/MultiStepForm';
import Form from './ComponentsTwo/Form';







function App() {
  return (
    <div >
      <Route path='/' component={MultiStepForm} />
      <Form />
      
     
      
     
      
  
    </div>
  );
}

export default App;
