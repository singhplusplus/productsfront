import './App.css'

import '@mantine/core/styles.css';
import { MantineProvider, Button, createTheme } from '@mantine/core';

const appColor = [
  "#ffe9ff",
  "#f8d0ff",
  "#ee9ffc",
  "#e36bf9",
  "#db3ef6",
  "#d624f5",
  "#d515f6",
  "#bc08db",
  "#a800c5",
  "#9300ab"
];
const greenColor = [
  "#e9fce9",
  "#daf3da",
  "#b5e5b6",
  "#8ed490",
  "#6dc76f",
  "#58bf5a",
  "#4bbb4e",
  "#3ca43f",
  "#329335",
  "#237f29"
];
const redColor = [
  "#ffebeb",
  "#fad8d8",
  "#ebb1b1",
  "#dd8788",
  "#d16464",
  "#ca4d4d",
  "#c84040",
  "#b13233",
  "#9e2a2c",
  "#8c2024"
];

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
      <>
        Welcome to app! 
        This is green <Button color="green">Button</Button>
        This is default <Button>Button</Button>
      </> 
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