import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx' 
import { ListProductsProvider } from './contexts/CartContext.tsx'
import { FormProvider } from './contexts/FormContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <FormProvider>
      <ListProductsProvider>
          <App />
      </ListProductsProvider>
    </FormProvider>
  </React.StrictMode>,
)
