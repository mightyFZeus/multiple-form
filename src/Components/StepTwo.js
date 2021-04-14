import React from "react";
import {

  Button,
  Divider,
  Typography,
  Card,
  Grid,
  CardContent,
} from "@material-ui/core";

const starterPlan = [
  "Fast Delivery",
  "Mobile App",
  "Tracking Services",
  "Checking",
];
const regularPlan = ["Live Coverage", "Analysis", "Onboarding", "Backup"];
const advancePlan = [
  "Marketing App",
  "Delivery App",
  "Chat",
  "Financing Analysis",
];

const styles = {
  gridStyles: {
    height: "auto",
    marginRight: "10px",
    width: "200px",
    margin: "0 !important",
  },
  btn: {
    background: "red",
    width: "50%",
    height: "2rem",
    marginLeft: "15%",
    color: "white",
    textTransform: "none",
  },
  contentCard: {
    marginLeft: "15%",
  },
  heading: {
    
    margin: "0",
    textAlign: "center",
    marginBottom: "2em",
  },
  planTitle: {
    color: "red",
    marginLeft: "15%",
    fontWeight: "bold",
  },
  backBtn: {
    background: "red",
    height: "2rem",
    color: "white",
    textTransform: "none",
    marginTop:'2em',
   
  },
  price:{
      
      marginLeft: "25%",
      letterSpacing:'2px',
      fontWeight:'600'
  }
};

function StepTwo({ handleNext, handlePrev}) {
  return (
    <>
      <Grid justify="center" alignContent="center">
        <Typography style={styles.heading}>
          <h2>Sign Up Complete</h2> <br />
          Choose the plan that suits your needs
        </Typography>
      </Grid>

      <Grid container spacing={3} justify="center">
        <Grid
          item
          component={Card}
          alignContent="center"
          style={styles.gridStyles}
          xs={12}
          md={3}
        >
            
          <Typography variant="h5" style={styles.planTitle}>
            Starter Plan
          </Typography>
          
            <Typography style={styles.price}>
             $3.99/month
            </Typography>
          <Divider />

          
          {starterPlan.map((plan) => (
            <CardContent style={styles.contentCard} key={plan}>
              *{plan}
            </CardContent>
          ))}
          <Button style={styles.btn} onClick={handleNext}>
            Choose Plan
          </Button>
        </Grid>

        <Grid
          style={styles.cardPlans}
          
          item
          component={Card}
          xs={12}
          md={3}
        >
          <Typography variant="h5" style={styles.planTitle}>
            Regular Plan
          </Typography>
          
            <Typography style={styles.price}>
             $5.99/month
            </Typography>
          <Divider />
          {regularPlan.map((plan) => (
            <CardContent style={styles.contentCard} key={plan}>
              *{plan}
            </CardContent>
          ))}
          <Button onClick={handleNext} style={styles.btn}>
            Choose Plan
          </Button>
        </Grid>

        <Grid
          style={styles.cardPlans}
          
          item
          component={Card}
          xs={12}
          md={3}
        >
          <Typography variant="h5" style={styles.planTitle}>
            Advanced Plan
          </Typography>
        
            <Typography style={styles.price}>
             $10.99/month
            </Typography>
          <Divider />
          {advancePlan.map((plan) => (
            <CardContent style={styles.contentCard} key={plan}>
              *{plan}
            </CardContent>
          ))}
          <Button onClick={handleNext} style={styles.btn}>
            Choose Plan
          </Button>
        </Grid>
        
      </Grid>
      <Grid >
          <Button
            style={styles.backBtn}
            onClick={handlePrev}
            >
            Back
        </Button>
      </Grid>
      
    </>
  );
}

export default StepTwo;
