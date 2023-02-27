import React from 'react'
import ReactDOM from 'react-dom/client'
import RavenModal from '../../src/components/RavenModal'
require('../../dist/esm/styles/index.css')
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
const change = true
root.render(
  <React.StrictMode>
    <div>
      <h2>Raven Input Password</h2>
      <RavenModal
        onBtnClick={() => {
          change
        }}
        visble={true}
      />
    </div>
  </React.StrictMode>,
)
