import React from 'react'
import ReactDOM from 'react-dom/client'
import { MantineProvider } from '@mantine/core';
import {
  RouterProvider
} from "react-router-dom";

import router from './router';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MantineProvider withGlobalStyles withNormalizeCSS theme={{
      colors: {
        brand: [
          "#F0EFF5",
          "#D4D2E7",
          "#B8B4DD",
          "#9B94D8",
          "#7C71DA",
          "#5A4AE3",
          "#5041CD",
          "#4D41B3",
          "#4D4597",
          "#4B4580",
          "#48446E",
          "#44415F"
        ]
      },
      primaryColor: "brand"
    }}>
      <RouterProvider router={router} />
    </MantineProvider>
  </React.StrictMode>,
)
