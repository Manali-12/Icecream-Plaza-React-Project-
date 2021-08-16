import { makeStyles } from "@material-ui/core";
import Base from "./Pages/Base";
import Home from "./Pages/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"


const useStyles = makeStyles({
  app: {

  },


})

function App() {

  const classes = useStyles();


  return (
    <div className={classes.app}>

      <Router>
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/explore" exact component={Base}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;






