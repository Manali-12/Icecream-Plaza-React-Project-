import { makeStyles } from "@material-ui/core";
import Base from "./Pages/Base"

const useStyles = makeStyles({
  app: {

  },


})

function App() {

  const classes = useStyles();


  return (
    <div className={classes.app}>
      <Base />
    </div>
  );
}

export default App;






