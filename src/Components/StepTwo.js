import React from "react";
import {
  Box,
  Button,
  Divider,
  Typography,
  Card,
  Grid,
  CardContent,
} from "@material-ui/core";

const starterPlan = [
  "Contactless Delivery",
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
    height: "3rem",
    marginLeft: "15%",
    color: "white",
    textTransform: "none",
  },
  contentCard: {
    marginLeft: "15%",
  },
  heading: {
    color: "red",
    margin: "0",
    textAlign: "center",
    marginBottom: "2em",
  },
  planTitle: {
    color: "red",
    marginLeft: "15%",
    fontWeight: "bold",
  },
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
          {starterPlan.map((plan) => (
            <CardContent style={styles.contentCard} key={plan}>
              {plan}
            </CardContent>
          ))}
          <Button style={styles.btn} onClick={handleNext}>
            Choose Plan
          </Button>
        </Grid>

        <Grid
          style={styles.cardPlans}
          style={styles.gridStyles}
          item
          component={Card}
          xs={12}
          md={3}
        >
          <Typography variant="h5" style={styles.planTitle}>
            Regular Plan
          </Typography>
          {regularPlan.map((plan) => (
            <CardContent style={styles.contentCard} key={plan}>
              {plan}
            </CardContent>
          ))}
          <Button onClick={handleNext} style={styles.btn}>
            Choose Plan
          </Button>
        </Grid>

        <Grid
          style={styles.cardPlans}
          style={styles.gridStyles}
          item
          component={Card}
          xs={12}
          md={3}
        >
          <Typography variant="h5" style={styles.planTitle}>
            Advanced Plan
          </Typography>
          {advancePlan.map((plan) => (
            <CardContent style={styles.contentCard} key={plan}>
              {plan}
            </CardContent>
          ))}
          <Button onClick={handleNext} style={styles.btn}>
            Choose Plan
          </Button>
        </Grid>
        <Button
        onClick={handlePrev}
        >
            Back
        </Button>
      </Grid>
      <Button
        onClick={handlePrev}
        >
            Back
        </Button>
    </>
  );
}

export default StepTwo;
