import React from 'react'
import details from "../Info"
import Cards from './Cards';
import Masonry from "react-masonry-css"
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({

    grid: {
        '& div': {
            width: "25em"
        },

    }

})

export default function CardContainer() {
    const classes = useStyles();
    return (
        <Masonry className={classes.mason} columnClassName={classes.grid} breakpointCols={9} >
            {
                details.map((item) => {
                    return <div key={item.key}><Cards items={item} /></div>
                }
                )
            }</Masonry>
        // </div>
    )
}
