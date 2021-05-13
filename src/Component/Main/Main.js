import React, { useState, useEffect } from 'react'
import Charts from '../Charts/Charts'
import SelectsOption from '../Dropdown/Select'
import Styles from '../../App.module.css'
import { Cards } from '../Cards/Cards'
export const Main = ({ resource }) => {
    const data = resource.read();
    const [countries, setCountries] = useState([])
    const [SingleCountryData, setSingleCountryData] = useState({})
    const [state, setState] = useState({
        selectedCountry: 'World'
    });
    useEffect(() => {
        let CountryData = JSON.parse(JSON.stringify(data).replace(/\s(?=\w+":)/g, "")).map(country => {
            country.id = Math.random();
            return country.Country_text
        })
        setCountries(CountryData)

    }, [data])
    const handleChange = (event) => {
        const name = event.target.name;
        setState({
            ...state,
            [name]: event.target.value,
        });
    };
    useEffect(() => {
        let FilterCountryObj = JSON.parse(JSON.stringify(data).replace(/\s(?=\w+":)/g, "")).find(country => {
            country.id = Math.random();
            return country.Country_text === state.selectedCountry
        })
        setSingleCountryData(FilterCountryObj)
    }, [data, state.selectedCountry])
    return <>
        <h1 style={{ textAlign: 'center' }}>COVID_19</h1>
        <Cards SingleCountryData={SingleCountryData} />
        <div className={Styles.DROPDOWN}>
            <SelectsOption handleChange={handleChange} countries={countries} />
        </div>
        <Charts SingleCountryData={SingleCountryData} />
    </>
}
