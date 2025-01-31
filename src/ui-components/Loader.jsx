import { LinearProgress, styled } from "@mui/material";

// styles
const LoaderWrapper = styled("div")({
  position: "fixed",
  top: 0,
  left: 0,
  zIndex: 1301,
  width: "100%",
  height: "100%",
});

const BorderLinearProgress = styled(LinearProgress)(() => ({
  height: 4,
}));

// ==============================|| LOADER ||============================== //
const Loader = () => (
  <LoaderWrapper>
    <BorderLinearProgress color="primary" />
  </LoaderWrapper>
);

export default Loader;
