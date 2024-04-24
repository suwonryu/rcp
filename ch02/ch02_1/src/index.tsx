import React from 'react'
import ReactDOM from 'react-dom/client'

const pVirtualDOOM = React.createElement('p', null, 'Hello Virtual DOM world!')
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(pVirtualDOOM)
