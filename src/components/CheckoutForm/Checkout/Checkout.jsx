import React, { useEffect, useState } from "react";
import {
  Paper,
  Stepper,
  Step,
  StepLabel,
  Typography,
  CircularProgress,
  Divider,
  Button,
} from "@material-ui/core";
import { commerce } from "../../../lib/commerce";
import AddressForm from "../AddressForm";
import PaymentForm from "../PaymentForm";
import useStyles from "./styles";

const steps = ["Shipping address", "Payment details"];

const Checkout = ({ cart }) => {
  const [activeStep, setActiveStep] = useState(0);
  const [checkoutToken, setCheckoutToken] = useState(null);
  const classes = useStyles();

  const generateToken = async () => {
    try {
      const token = await commerce.checkout.generateToken(cart.id, {
        type: "cart",
      });

      setCheckoutToken(token);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    generateToken();
  }, [cart]);

  const Confirmation = () => {
    return <div>Confirmation</div>;
  };

  const Form = () => {
    return (
      <>
        {activeStep === 0 ? (
          <AddressForm checkoutToken={checkoutToken} />
        ) : (
          <PaymentForm />
        )}
      </>
    );
  };

  return (
    <>
      <div className={classes.toolbar} />
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography variant="h4" align="center">
            Checkout
          </Typography>
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map((step) => (
              <Step key={step}>
                <StepLabel>{step}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length ? (
            <Confirmation />
          ) : (
            checkoutToken && <Form />
          )}
        </Paper>
      </main>
    </>
  );
};

export default Checkout;
