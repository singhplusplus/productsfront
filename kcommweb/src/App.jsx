import './App.css';

import '@mantine/core/styles.css';
import { MantineProvider, Button, Title, createTheme } from '@mantine/core';
import { appColor, greenColor, redColor } from './appconstant.js';
import { AppLayout } from './uicommon/AppLayout.jsx'

const defaultTheme = createTheme({
  primaryColor: 'appcolor',
  colors: {
    'appcolor': appColor,
    'green': greenColor,
    'red': redColor
  }
});

function App() {

  return (

    <MantineProvider theme={defaultTheme}>
      <AppLayout>

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
        <Title order={1}>
          Welcome to app!
        </Title>
        <Title order={2}>
          Welcome to app!
        </Title>
        This is green <Button color="green">Button</Button>
        This is default <Button>Button</Button>
      </AppLayout>

    </MantineProvider>

  )
}

export default App


/***
 * 
 * <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
 */