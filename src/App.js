
import './App.css';
import {Route} from 'react-router-dom'
import MultiStepForm from './Components/MultiStepForm';


import StepOne from './Components/StepOne';
import StepTwo from './Components/StepTwo'




function App() {
  return (
    <div >
      <Route path='/' component={MultiStepForm} />
     
      
     
      
  
    </div>
  );
}

export default App;
