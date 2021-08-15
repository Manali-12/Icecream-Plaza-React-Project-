import React from 'react';
import HorizontalScroll from "react-scroll-horizontal";
import { makeStyles, Typography } from "@material-ui/core";
import CardContainer from '../Components/CardContainer';

const useStyles = makeStyles({
    base: {
        width: "95vw",
        height: "90vh",
        margin: "auto",
        border: "30px solid pink"
    },
    hs_div1: {
        backgroundColor: "pink",
        // width: "240em",
    },

})

export default function Base() {

    const classes = useStyles();
    return (
        <>
            <div className={classes.base}><HorizontalScroll reverseScroll >
                <div className={classes.hs_div1}>
                    <CardContainer />
                </div>
            </HorizontalScroll>
            </div>
        </>
    )
}
