import React from 'react'
import {Box, Button, Divider,Typography, Card, Grid, CardContent} from '@material-ui/core'

const starterPlan = ['Contactless Delivery', 'Mobile App', 'Tracking Services', 'Checking']
const regularPlan = ['Live Coverage', 'Analysis', 'Onboarding', 'Backup',   ]
const advancePlan= ['Marketing App', 'Delivery App', 'Chat','Financing Analysis', ]

const styles ={
    gridStyles:{
        height: 'auto',
        marginRight:'10px',
        width:'200px',
        margin:'0 !important',
       
    },
    btn:{
        background: 'red',
        width:'50%',
        height: '3rem',
        marginLeft:'15%',
        color:'white',
        textTransform: 'none'
    },
    contentCard:{
        marginLeft:'15%'

    },
    heading:{
        color:'red'
    }
}

function StepTwo({handleNext,activeStep, steps}) {
    return (
        <>
            
                <Grid container spacing={3} justify="center"  >
                    <Grid item component={Card} 
                    alignContent="center"
                     style={styles.gridStyles} 
                     xs={12} md={3}>
                         <Typography style={styles.heading}>
                             Sign Up Complete <br />
                             Choose the plan that suits your needs
                         </Typography>
                        {starterPlan.map(plan =>
                            <CardContent style={styles.contentCard} 
                            key={plan}>
                            
                            
                                        {plan}
                                 
                            </CardContent>
                            )}
                            <Button 
                            style={styles.btn}
                            onClick={handleNext}
                            >
                                Choose Plan
                            </Button>
                            
                    </Grid>

                    <Grid style={styles.cardPlans}
                     style={styles.gridStyles}
                    item component={Card} xs={12} md={3}>
                        {regularPlan.map(plan =>
                            <CardContent
                            style={styles.contentCard} 
                            key={plan}>
                            
                          
                                
                                        {plan}
                                    
                            </CardContent>
                            )}
                            <Button 
                            onClick={handleNext}
                            style={styles.btn}>
                                Choose Plan
                            </Button>
                    </Grid>

                    <Grid style={styles.cardPlans}  
                    style={styles.gridStyles}item 
                    component={Card} xs={12} md={3}>
                        {advancePlan.map(plan =>
                            <CardContent
                            style={styles.contentCard}
                            key={plan}>
                            
                           
                                        {plan}
                              
                            </CardContent>
                            )}
                            <Button
                            onClick={handleNext}
                            style={styles.btn}>
                               
                            </Button>
                    </Grid>




                </Grid>
                
               
                    

               
                
                    

               
           
        </>
    )
}

export default StepTwo
