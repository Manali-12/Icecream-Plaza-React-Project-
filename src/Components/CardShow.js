import { makeStyles, Typography } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles({
    card_show: {
        width: "80%",
        padding: "20px",
    },
    card_title: {
        fontSize: "3.5em",
        fontWeight: 200,
        color: "blue",
        padding: "10px 20px",
    },
    card_about: {
        fontSize: "1.5em",
        color: "grey",
        padding: "10px 20px",
    },
    card_img: {
        width: "auto",
        height: "100%",
        margin: "-25% 0 -45px 0",
        opacity: .5,
        overflow: "hidden"
    },
    card_imgbox: {
        width: "80%",
        height: "500px",
        transform: "rotate(20deg)",
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

                <img src={img || "https://i.ibb.co/Ky8970L/t.png"} alt="a" className={classes.card_img} />

            </div>
        </div>
    )
}
