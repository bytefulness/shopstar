import React,{useState} from "react";
import {
  InputLabel,
  Select,
  MenuItem,
  Button,
  Grid,
  Typography,
} from "@material-ui/core";
import { useForm, FormProvider } from "react-hook-form";
import FormInput from "./CustomTextField";

function AddressForm() {
  const [shippingCountries, setShippingCountries] = useState([]);
  const [shippingCounter, setShippingCountry] = useState('');
  const [shippingSubdivisions, setShippingSubdivisions] = useState([]);
  const [shippingSubdivision, setShippingSubdivision] = useState('');
  const [shippingOptions, setShippingOptions] = useState([]);
  const [shippingOption, setShippingOption] = useState('');



  const methods = useForm();

  return (
    <>
      <Typography variant="h6" gutterBottom>
        Shipping Address
      </Typography>
      <FormProvider {...methods}>
        <form onSubmit="">
          <Grid container spacing={3}>
            <FormInput required name="firstName" label="First name" />
            <FormInput required name="lastName" label="Last name" />
            <FormInput required name="addres1" label="Address" />
            <FormInput required name="email" label="Email" />
            <FormInput required name="zip" label="ZIP / Postal code" />
          </Grid>

          <Grid item xs={12} sm={6}>
            <InputLabel>Shipping Country</InputLabel>
            <Select value={ } fullWitdh onChange={ }>
              <MenuItem key={ } value={ }>
                Select Me
              </MenuItem>
            </Select>
          </Grid>

          <Grid item xs={12} sm={6}>
            <InputLabel>Shipping Country</InputLabel>
            <Select value={ } fullWitdh onChange={ }>
              <MenuItem key={ } value={ }>
                Select Me
              </MenuItem>
            </Select>
          </Grid>

          <Grid item xs={12} sm={6}>
            <InputLabel>Shipping Country</InputLabel>
            <Select value={ } fullWitdh onChange={ }>
              <MenuItem key={ } value={ }>
                Select Me
              </MenuItem>
            </Select>
          </Grid>
        </form>
      </FormProvider>
    </>
  );
}

export default AddressForm;
