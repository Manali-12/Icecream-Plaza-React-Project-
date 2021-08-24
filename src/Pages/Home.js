import { Button, makeStyles, Typography } from '@material-ui/core'
import React from 'react';
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({

    cover: {
        backgroundColor: "white",
        position: "relative",
        width: "80vw",
        minHeight: "80vh",
        margin: "4% auto",
        borderRadius: "10px",
        display: "flex",
        height: "auto"
    },
    headingBlock: {
        padding: "5% 0 0 10%"
    },

    heading: {
        color: "#012443",
        fontSize: "620%",
        fontWeight: 600,
    },
    para: {
        color: "#FF6B6B",
        fontSize: "180%",
        maxWidth: "50%",
        margin: "10px 0 20px 0"
    },
    img: {
        position: "absolute",
        bottom: "-70px",
        right: "-60px",
        minWidth: "70%",
        transform: "rotate(-20deg)",
    },
    btn: {
        color: "white",
        borderRadius: "10px",
        backgroundColor: "#A73489",
        width: "220px",
        height: "50px",
        '&:hover': {
            backgroundColor: "#ECA3F5",
            color: "white",
        },


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
                    <Button variant="contained" size="large" onClick={handleClick} className={classes.btn}>Ice-Creams        </Button>

                </div>
                <div>
                    <img src="https://i.ibb.co/Ky8970L/t.png" alt="ice-cream" className={classes.img}></img>
                </div>
            </div>
        </>
    )
}

