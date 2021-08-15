import { Button, Card, CardContent, CardMedia, Collapse, createTheme, makeStyles, ThemeProvider, Typography } from '@material-ui/core'
import React, { useState } from 'react';
import clsx from 'clsx';

const theme = createTheme({
    overrides: {
        MuiButton: {
            root: {
                backgroundColor: "rgba(0, 0, 0, 0)",
                color: "rgba(0, 0, 0, 0)",
                "&:hover":
                {
                    backgroundColor: "rgba(0, 0, 0, 0)",
                    color: "rgba(0, 0, 0, 0)",
                }

            }
        }
    }
})

const useStyles = makeStyles((theme) => ({
    root: {
        margin: "15px 0",
        display: "flex",
        width: "500px",
        position: "relative",
        borderRadius: "10px",
        textAlign: "center"
    },
    image: {
        width: "14em",
        height: "auto",
        padding: "15px 25px",

        "&:hover": {
            transitionProperty: "font-size",
            transitionDuration: ".5s",
            fontSize: "15px",
        }
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(-10deg)',
    },

    about: {
        maxWidth: "250px",
        textAlign: "center",
        margin: "5px auto"
    },
    heading: {
        margin: "5px"
    },
    btndiv: {
        margin: "auto",
        "&:hover": {
            background: "none"
        },
    },
    aboutdiv: {
        background: "linear-gradient(90deg, rgba(255,253,253,0.9587185215883228) 26%, rgba(255,255,255,0.9363095580028886) 84%)",
        position: 'absolute',
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%)",
        zIndex: 100,
        fontWeight: 300,
        borderRadius: "25px",

    }
}));

export default function Cards(items) {
    const { key, img, color, c1, cc } = items.items;
    const [expanded, setExpanded] = useState(false);
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    const classes = useStyles();
    return (
        <ThemeProvider theme={theme}>
            <div style={{ backgroundColor: color }} className={classes.root}>
                <div className={classes.btndiv}>
                    <Button
                        className={clsx(classes.expand, {
                            [classes.expandOpen]: expanded,
                        })}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}>
                        <img

                            className={classes.image}
                            src={img}
                            alt={" "}>
                        </img>
                        {/* <h6>{key}</h6> */}
                    </Button>
                </div>
                <div className={classes.aboutdiv} style={{ color: c1 }} onClick={handleExpandClick} >
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                        <Typography variant="h5" className={classes.heading}>
                            Icecream
                        </Typography>
                        <Typography className={classes.about} variant="body2">
                            {cc}
                        </Typography>
                    </Collapse>
                </div>
            </div >
        </ThemeProvider>
    )
}
