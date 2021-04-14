import React, {useState} from 'react'
import {Stepper, Step, StepLabel, Typography, Button} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
import StepOne from './StepOne'
import StepTwo from './StepTwo'
import StepThree from './StepThree'





const useStyles =makeStyles({
    root:{
      //  border:'1px solid #999',
        width:'80%',
        height:'auto',
        margin:'6rem auto',
        
    
    "& .MuiStepIcon-root.MuiStepIcon-active":{
        color:'red'
    }
},
})

const steps =['SIGN UP','CHOOSE PLAN', 'CHECKOUT']



const MultiStepForm = () => {
 //React Hooks   
const [activeStep, setActiveStep] = useState(0)

const handleNext = () =>{
    setActiveStep(prevActiveStep =>prevActiveStep + 1 )
}

const handlePrev = () =>{
    setActiveStep(prevActiveStep =>prevActiveStep - 1 )
}
     

   function  getStepsContents (stepIndex) {
        switch (stepIndex) {
            case 0:
                return <StepOne
                        handleNext={handleNext}
                        activeStep={activeStep}
                        steps={steps} 
                        
                        />;
            case 1:
                return <StepTwo 
                        handleNext={handleNext}
                        activeStep={activeStep}
                        steps={steps}
                        handlePrev={handlePrev}
                        />
            case 2:
                return <StepThree 
                            handlePrev={handlePrev}
                            />
               
        
            default: return 'Unknow step'
               
        }
    }
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <Stepper  activeStep={activeStep} alternativeLabel>
                <Step>
                    <StepLabel>
                        SIGN UP
                    </StepLabel>
                </Step>
                <Step>
                    <StepLabel>
                        CHOOSE PLAN
                    </StepLabel>
                </Step>
                <Step>
                    <StepLabel>
                       CHECKOUT
                    </StepLabel>
                </Step>
                </Stepper>
                <br />
                {activeStep === 3? 'The steps Completed' : (
                    <>
                    {getStepsContents(activeStep)}
                {/* <Button onClick={handleNext}>
                    {activeStep === 3? 'Finish' : 'Next'}
                </Button> */}
                </>
            )}
            
            
            
            
            
        </div>
    )
}

export default MultiStepForm
