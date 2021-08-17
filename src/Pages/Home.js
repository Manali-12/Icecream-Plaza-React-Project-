import { Button, makeStyles, Typography } from '@material-ui/core'
import React from 'react';
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
    heading: {
        color: "#012443",
        fontSize: "640%",
        fontWeight: 600,
        maxWidth: "80%",
        margin: "auto"
    },
    cover: {
        backgroundImage: `url(${`https://thumbs.dreamstime.com/b/variety-colorful-summer-popsicles-ice-cream-treats-overhead-view-scattered-pink-background-221139232.jpg`})`,
        height: "80vh",
        width: "100vw",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        padding: "15% 0 0 0",
        position: "relative"

    },
    headingBlock: {
        background: "linear-gradient(90deg, rgba(255,253,253,0) 0%, rgba(255,253,253,0.9587185215883228) 18%, rgba(255,255,255,0.9363095580028886) 77%, rgba(255,255,255,0) 100%)",
        width: "80%",
        textAlign: "center",
        borderTop: "8px double white",
        borderBottom: "8px double white",
        height: "auto",
        padding: "4% 0",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%)",

    },
    para: {
        maxWidth: "60%",
        textAlign: "center",
        margin: "auto",
        color: "#FF6B6B",
        padding: "2%",
        fontSize: "180%",
    }
});
export default function Home() {

    const classes = useStyles();
    let history = useHistory();
    function handleClick() {
        history.push("/explore");
    }

    return (
        <>
            <div className={classes.cover}>
                <div className={classes.headingBlock}>
                    <Typography variant="h1" className={classes.heading}> Ice-Cream Plaza </Typography>
                    <Typography variant="body1" className={classes.para}>You can't buy happiness, but you can buy ice cream and that is pretty much the same thing.</Typography>
                    <Button variant="contained" size="large" color="secondary" onClick={handleClick}>Explore Ice-Creams</Button>
                </div>
            </div>
        </>
    )
}

