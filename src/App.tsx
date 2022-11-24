import ButtonAppBar from "./components/ButtonAppBar";
import {
  Experimental_CssVarsProvider as CssVarsProvider,
  experimental_extendTheme as extendTheme,
} from "@mui/material/styles";
import LeaksChart from "./components/LeaksChart";
const theme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: "#3F1475",
        },
      },
    },
  },
});

function App() {
  return (
    <CssVarsProvider theme={theme}>
      <ButtonAppBar />
      <LeaksChart />
    </CssVarsProvider>
  );
}

export default App;
