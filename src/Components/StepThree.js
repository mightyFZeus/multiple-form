import React from "react";
import { Button, Typography, Card, Grid } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";

const styles = {
  proccedBtn: {
    width: "100%",
    background: "red",
    textTransform: "none",
    color: "white",
  },
  backBtn: {
    background: "red",
    height: "2rem",
    color: "white",
    textTransform: "none",
    marginTop:'2em',
   
  }
};

function StepThree({ handlePrev }) {
  return (
    <div>
      <Grid justify="center" spacing={3}>
        <Grid
          alignContent="center"
          item
          component={Card}
          alignContent="center"
          xs={12}
          md={8}
        >
          <Typography>Checkout</Typography>
          <Button style={styles.proccedBtn} endIcon={<SendIcon />}>
            Procced
          </Button>
        </Grid>

        <Grid>
          <Button style={styles.backBtn} onClick={handlePrev}>
            Back
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}

export default StepThree;
