import React, { useEffect, useState } from 'react';
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
export default function SelectsOption({ resource,handleCallBack }) {
  const [countries, setCountries] = useState([])
  const classes = useStyles();
  const [state, setState] = useState({
    selectedCountry: 'World'
  });
  let data = resource.read()
  useEffect(() => {
    // console.log(data)
    let CountryData = JSON.parse(JSON.stringify(data).replace(/\s(?=\w+":)/g, "")).map(country => {
      country.id = Math.random();
      return country.Country_text
    })
    setCountries(CountryData)
  }, [])
  useEffect(()=>{
    FilterCountryStatics()
  },[state.selectedCountry])
  const handleChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };
  const FilterCountryStatics = () => {
    let filterData =  JSON.parse(JSON.stringify(data).replace(/\s(?=\w+":)/g, "")).find(country => {
      country.id = Math.random();
      return country.Country_text === state.selectedCountry
    })
    handleCallBack(filterData)
  }
  return <>
    <FormControl className={classes.formControl} >
      <NativeSelect
        // value={state.age}
        onChange={handleChange}
        name="selectedCountry"
        className={classes.selectEmpty}
        defaultValue={"World"}
      // inputProps={{ 'aria-label': 'age' }}
      >
        {countries && countries.map((country, i) => {
          return country === undefined ? '' : <option key={i} value={country}>{country}</option>
        })}
      </NativeSelect>
    </FormControl>

  </>
}