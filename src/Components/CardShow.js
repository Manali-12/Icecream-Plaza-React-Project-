import { makeStyles, Typography } from '@material-ui/core'
import React from 'react';


const useStyles = makeStyles({
    "@global": {
        "@keyframes fadeIn": {
            "0%": {
                opacity: 0,

            },
            "100%": {
                opacity: 0.7,
            }
        },
    },

    card_show: {
        width: "80%",
        padding: "20px",
        position: "relative"
    },
    card_title: {
        fontSize: "3.5em",
        fontWeight: 200,
        color: "#2D2424",
        padding: "10px 20px",
        fontFamily: " 'Oswald', sans- serif",
    },
    card_about: {
        fontSize: "1.5em",
        color: "grey",
        padding: "10px 20px",
    },
    card_img: {
        width: "auto",
        height: "60%",
        overflow: "hidden",
        objectFit: "cover",
        animation: "$fadeIn 1s ease-in-out",
        opacity: .7

    },
    card_imgbox: {
        height: "600px",
        position: "absolute",
        left: "-15%",
        top: "110%",

    }
})

export default function CardShow({ click_Info }) {
    const classes = useStyles();
    const { cc, img } = click_Info;
    return (
        <div className={classes.card_show}>
            <Typography className={classes.card_title}>Kulfi</Typography>
            <Typography className={classes.card_about}>{cc || "Click on the ice-Cream you want to know about"}</Typography>
            <div className={classes.card_imgbox} >
                <img src={img || "https://i.ibb.co/r7ckjS3/m.png"} alt="a" className={classes.card_img} />
            </div>
        </div>
    )
}
