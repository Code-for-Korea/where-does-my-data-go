import ButtonAppBar from "./components/ButtonAppBar";
import {
  Experimental_CssVarsProvider as CssVarsProvider,
  experimental_extendTheme as extendTheme,
} from "@mui/material/styles";
import LeaksChart from "./components/LeaksChart";
import Parallax from "./components/Parallax";
import Terms from "./components/Terms";
import Events from "./components/Events";
import LeakedStats from "./components/LeakedStats";
import Footer from "./components/Footer";
import useScript from "./components/useScript";
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
  useScript("https://public.flourish.studio/resources/embed.js");
  return (
    <CssVarsProvider theme={theme}>
      <ButtonAppBar />
      <Parallax />
      <LeaksChart />
      <Terms />
      <Events />
      <LeakedStats />
      <Footer />
    </CssVarsProvider>
  );
}

export default App;
