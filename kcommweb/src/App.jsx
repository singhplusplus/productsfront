import './App.css';

import '@mantine/core/styles.css';
import { MantineProvider, Button, Title, createTheme } from '@mantine/core';
import { appColor, greenColor, redColor } from './appconstant.js';
import { AppLayout } from './uicommon/AppLayout.jsx'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'

const defaultTheme = createTheme({
  primaryColor: 'appcolor',
  colors: {
    'appcolor': appColor,
    'green': greenColor,
    'red': redColor
  }
});

const dummyContent = <>
  
  <Title order={1}>
          Welcome to app!
        </Title>
        <Title order={2}>
          Welcome to app!
        </Title>
        This is green <Button color="green">Button</Button>
        This is red <Button color="red">Button</Button>
        This is default <Button>Button</Button>
        <Title order={1}>
          Welcome to app!
        </Title>
        <Title order={2}>
          Welcome to app!
        </Title>
        This is green <Button color="green">Button</Button>
        This is default <Button>Button</Button>
        <Title order={1}>
          Welcome to app!
        </Title>
        <Title order={2}>
          Welcome to app!
        </Title>
        This is green <Button color="green">Button</Button>
        This is default <Button>Button</Button>
        <Title order={1}>
          Welcome to app!
        </Title>
        <Title order={2}>
          Welcome to app!
        </Title>
        This is green <Button color="green">Button</Button>
        This is default <Button>Button</Button>
        <Title order={1}>
          Welcome to app!
        </Title>
        <Title order={2}>
          Welcome to app!
        </Title>
        This is green <Button color="green">Button</Button>
        This is default <Button>Button</Button>
        <Title order={1}>
          Welcome to app!
        </Title>
        <Title order={2}>
          Welcome to app!
        </Title>
        This is green <Button color="green">Button</Button>
        This is default <Button>Button</Button>
        <Title order={1}>
          Welcome to app!
        </Title>
        <Title order={2}>
          Welcome to app!
        </Title>
        This is green <Button color="green">Button</Button>
        This is default <Button>Button</Button>
        <Title order={1}>
          Welcome to app!
        </Title>
        <Title order={2}>
          Welcome to app!
        </Title>
        This is green <Button color="green">Button</Button>
        This is default <Button>Button</Button>
        <Title order={1}>
          Welcome to app!
        </Title>
        <Title order={2}>
          Welcome to app!
        </Title>
        This is green <Button color="green">Button</Button>
        This is default <Button>Button</Button>
        <Title order={1}>
          Welcome to app!
        </Title>
        <Title order={2}>
          Welcome to app!
        </Title>
        This is green <Button color="green">Button</Button>
        This is default <Button>Button</Button>
        <Title order={1}>
          Welcome to app!
        </Title>
        <Title order={2}>
          Welcome to app!
        </Title>
        This is green <Button color="green">Button</Button>
        This is default <Button>Button</Button>
        <Title order={1}>
          Welcome to app!
        </Title>
        <Title order={2}>
          Welcome to app!
        </Title>
        This is green <Button color="green">Button</Button>
        This is default <Button>Button</Button>
</>

const appRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<AppLayout />}>
      <Route index element={dummyContent} />
      <Route path="about" element={<p>This is navigation page</p>} />
      <Route path="pricing" element={<p>This is pricing page</p>} />
      <Route path="learn" element={<p>This is learn page</p>} />
      <Route path="community" element={<p>This is community page</p>} />
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