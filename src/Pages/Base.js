import React, { useState } from 'react';
import { makeStyles } from "@material-ui/core";
import CardShow from '../Components/CardShow';
import Cards from '../Components/Cards';

const useStyles = makeStyles({
    base: {
        display: "flex",
        width: "80%",
        margin: "5% auto",
        maxHeight: "80vh",
        overflow: "hidden",
    },
    cards_show: {
        backgroundColor: "white",
    },
    cards_div: {
        backgroundColor: "white",
        overflowY: "scroll",
        height: "80vh",
        minWidth: "440px",

    }

})

export default function Base() {

    const classes = useStyles();

    const [click_Info, setclick_Info] = useState("https://i.ibb.co/SJjgQ3B/p.png");
    console.log(click_Info)

    return (
        <>
            <div className={classes.base}>
                <div className={classes.cards_show}>
                    <CardShow click_Info={click_Info} />
                </div>
                <div className={classes.cards_div}>
                    <Cards setclick_Info={setclick_Info} />
                </div>
                <div>

                </div>


            </div>
        </>
    )
}
