import React, { Suspense } from 'react'
import CircularStatic from './Component/Loader/Loader'
import { Main } from './Component/Main/Main'
import CreateResource from './Component/Api/Resource'
import ErrorBoundary from './Component/Errorboundary/ErrorBoundary'
function App() {
  const resource = CreateResource();
  return <>
    <Suspense fallback={<div style={{
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: '290px',

    }}> <CircularStatic /></div>}>
      <ErrorBoundary>
        <Main resource={resource} />
      </ErrorBoundary>
    </Suspense>
  </>
}

export default App;
