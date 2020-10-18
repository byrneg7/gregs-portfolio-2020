import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import { FONT_PURPLE } from "../../../../assets/stylesheets/colors";

const styles = (theme) => ({
  button: {
    margin: theme.spacing.unit,
    backgroundColor: FONT_PURPLE,
    color: "white",
  },
  input: {
    display: "none",
  },
  circularProgress: {
    marginRight: 0,
    marginLeft: theme.spacing.unit,
  },
});

const LoadingButton = (props) => {
  const { classes } = props;
  return (
    <div>
      <Button
        variant="contained"
        className={classes.button}
        type={props.type}
        disabled={props.loading}
      >
        Send
        {props.loading ? (
          <CircularProgress className={classes.circularProgress} size={20} />
        ) : null}
      </Button>
    </div>
  );
};

export default withStyles(styles)(LoadingButton);
