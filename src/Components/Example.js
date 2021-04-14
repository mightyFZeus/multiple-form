import React from 'react'
import {Stepper, Step, StepLabel, Typography, Button} from '@material-ui/core'

const test = ['olumide', 'olakunle', 'olaide', 'olusola', 'olabisi']

function Example() {
    return (
        <div>
            
                <ul>
                    {test.map(step =>
                        <li key={step}>
                            {step}
                        </li>
                        )}
                </ul>
          
            
        </div>
    )
}

export default Example
