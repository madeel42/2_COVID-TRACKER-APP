import React, { Suspense, useState } from 'react'
import classes from './App.module.css'
import { Cards } from './Component/Cards/Cards'
import Charts from './Component/Charts/Charts'
import CreateResource from './Component/Api/Resource'
import CircularStatic from './Component/Loader/Loader'
import SelectsOption from './Component/Dropdown/Select'

function App() {
  const resource = CreateResource();
  const [SingleCountryData, setSingleCountryData] = useState({})
  const handleCallBack = (e) => {
    setSingleCountryData(e)
  }
  console.log(SingleCountryData)
  return <>
    <h1 style={{ textAlign: 'center' }}>COVID_19</h1>
    <Suspense fallback={<div style={{
      width: '100%',
      display: 'flex',
      justifyContent: 'center'

    }}> <CircularStatic /></div>}>
      <Cards SingleCountryData={SingleCountryData}/>
      <div className={classes.DROPDOWN}>
        <SelectsOption resource={resource} handleCallBack={(e) => handleCallBack(e)} />
      </div>
    </Suspense>

    <Charts />
  </>
}

export default App;
