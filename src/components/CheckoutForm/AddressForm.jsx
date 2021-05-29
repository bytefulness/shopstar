import React, { useState, useEffect } from "react";
import {
  InputLabel,
  Select,
  MenuItem,
  Button,
  Grid,
  Typography,
} from "@material-ui/core";
import { commerce } from "../../lib/commerce";
import { useForm, FormProvider } from "react-hook-form";
import FormInput from "./CustomTextField";

const AddressForm = ({ checkoutToken }) => {
  const [shippingCountries, setShippingCountries] = useState([]);
  const [shippingCounter, setShippingCountry] = useState("");
  const [shippingSubdivisions, setShippingSubdivisions] = useState([]);
  const [shippingSubdivision, setShippingSubdivision] = useState("");
  const [shippingOptions, setShippingOptions] = useState([]);
  const [shippingOption, setShippingOption] = useState("");
  const methods = useForm();

  const fetchShippingCountries = async (checkoutTokenId) => {
    try {
      const { countries } = await commerce.services.localeListShippingCountries(
        checkoutTokenId
      );

      setShippingCountries(countries);
      setShippingCountry(Object.keys(countries)[0]);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchShippingCountries(checkoutToken.id);
  }, []);

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

            {/* <Grid item xs={12} sm={6}>
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
          </Grid> */}
          </Grid>
        </form>
      </FormProvider>
    </>
  );
};

export default AddressForm;