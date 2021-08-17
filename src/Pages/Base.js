import React, { useState } from 'react';
import { makeStyles } from "@material-ui/core";
import CardShow from '../Components/CardShow';
import Cards from '../Components/Cards';

const useStyles = makeStyles({
    base: {
        display: "flex",
        width: "90%",
        margin: "20px auto",
        maxHeight: "95vh",
        overflow: "hidden"
    },
    cards_show: {
        width: "200em",
        backgroundColor: "white",
        borderRadius: "25px",
    },
    cards_div: {
        margin: "auto",
        backgroundColor: "white",
        borderRadius: "25px",
        overflowY: "scroll",
        height: "95vh"
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
