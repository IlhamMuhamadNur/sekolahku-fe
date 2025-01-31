import { useDispatch, useSelector } from "react-redux";
import {
  Alert,
  Button,
  IconButton,
  Snackbar as MuiSnackbar,
} from "@mui/material";
import { IconX } from "@tabler/icons-react";
import { SNACKBAR_CLOSE } from "../store/actions";

const Snackbar = () => {
  const dispatch = useDispatch();
  const snackbars = useSelector((state) => state.snackbar.snackbars);

  const handleClose = (id) => dispatch({ type: SNACKBAR_CLOSE, id });

  return (
    <>
      {[
        ...new Map(
          snackbars.map((snackbar) => [snackbar.message, snackbar])
        ).values(),
      ].map((snackbar, index) => (
        <MuiSnackbar
          key={snackbar.id}
          open={snackbar.open}
          anchorOrigin={snackbar.anchorOrigin}
          autoHideDuration={snackbars.length > 1 ? 5000 : 3000}
          onClose={() => handleClose(snackbar.id)}
          sx={{ marginTop: `${index * 55}px` }}
        >
          <Alert
            variant="filled"
            severity={snackbar.alertSeverity}
            sx={{
              bgcolor: `${snackbar.alertSeverity}.dark`,
              color: snackbar.alertSeverity === "warning" ? "grey.800" : "",
            }}
            action={
              <>
                {snackbar.actionButton && (
                  <Button
                    disableElevation
                    color="inherit"
                    size="small"
                    onClick={() => handleClose(snackbar.id)}
                  >
                    UNDO
                  </Button>
                )}
                {snackbar.close && (
                  <IconButton
                    size="small"
                    color="inherit"
                    onClick={() => handleClose(snackbar.id)}
                  >
                    <IconX fontSize="small" />
                  </IconButton>
                )}
              </>
            }
          >
            {snackbar.message}
          </Alert>
        </MuiSnackbar>
      ))}
    </>
  );
};

export default Snackbar;
