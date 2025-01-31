import { useSelector } from "react-redux";
import {
  CssBaseline,
  StyledEngineProvider,
  ThemeProvider,
} from "@mui/material";

import NavigationScroll from "./layout/NavigationScroll";
import ThemeRoutes from "./routes";

import Snackbar from "./ui-components/Snackbar";
import Theme from "./themes";

// ==============================|| APP ||============================== //

const App = () => {
  const customization = useSelector((state) => state.customization);

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={Theme(customization)}>
        <CssBaseline />
        <NavigationScroll>
          <>
            <ThemeRoutes />
            <Snackbar />
          </>
        </NavigationScroll>
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default App;
