import './App.css';

import '@mantine/core/styles.css';
import { MantineProvider, createTheme } from '@mantine/core';
import { appColor, greenColor, redColor } from './appconstant.js';
import { AppLayout } from './uicommon/AppLayout.jsx'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import { WelcomePage } from './components/WelcomePage.jsx'
import { NavigationPage } from './components/NavigationPage.jsx';
import LoginPage from './components/LoginPage.jsx';

const defaultTheme = createTheme({
  primaryColor: 'appcolor',
  colors: {
    'appcolor': appColor,
    'green': greenColor,
    'red': redColor
  }
});

const appRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<AppLayout />}>
      <Route index element={<WelcomePage />} />
      <Route path="about" element={<NavigationPage />} />
      <Route path="pricing" element={<p>This is pricing page</p>} />
      <Route path="learn" element={<p>This is learn page</p>} />
      <Route path="community" element={<p>This is community page</p>} />
      <Route path="login" element={<LoginPage />} />
    </Route>
  )
)

function App() {
  return (
    <MantineProvider theme={defaultTheme}>
      <RouterProvider router={appRouter} />
    </MantineProvider>

  )
}

export default App