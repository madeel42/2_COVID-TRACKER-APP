import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));
export default function SelectsOption({ countries, handleChange }) {
  const classes = useStyles();
  return <>
    <FormControl className={classes.formControl} >
      <NativeSelect
        onChange={handleChange}
        name="selectedCountry"
        className={classes.selectEmpty}
        defaultValue={"World"}
      >
        {countries && countries.map((country, i) => {
          return country === undefined ? '' : <option key={i} value={country}>{country}</option>
        })}
      </NativeSelect>
    </FormControl>

  </>
}