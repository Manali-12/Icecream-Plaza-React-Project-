import { Button, createTheme, Grid, makeStyles, ThemeProvider, Typography } from '@material-ui/core'
import React from 'react';
import details from '../Info';

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
        display: "flex",
        position: "relative",
        borderRadius: "10px",
        textAlign: "center",
        "&:hover": {
            boxShadow: " 0 4px 8px 0 rgba(0, 0, 0, 0.3), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
            transitionProperty: "box-shadow",
            transitionDuration: ".5s",
        },
    },
    image_box: {
        minWidth: "240px",
        height: "240px",
        margin: "5px"
    },
    image: {
        width: "auto",
        height: "80%",
        padding: "15px 0",
        "&:hover": {
            transitionProperty: "font-size",
            transitionDuration: ".5s",
            fontSize: "15px",
        }
    },
    btndiv: {
        margin: "auto",
        "&:hover": {
            background: "none"
        },
    },
    card_div: {
        margin: "auto",
        padding: "10px 10px"
    },
    card: {
        margin: "5px auto"
    }
}));

export default function Cards(props) {
    const { setclick_Info } = props;
    const handleClick = (e, item) => {
        e.preventDefault();
        setclick_Info(item);
        console.log(item)
    };


    const classes = useStyles();
    return (
        <>
            <ThemeProvider theme={theme}>
                <div className={classes.card_div}>
                    <Grid container >
                        {
                            details.map((item) => {
                                return <Grid item key={item.key} className={classes.card}><form onSubmit={(e) => handleClick(e, item)}>
                                    <div className={classes.root} style={{ backgroundColor: item.color }}>
                                        <div className={classes.btndiv}>
                                            <Button type="submit" key={item.key}
                                            >
                                                <div className={classes.image_box}>
                                                    <img
                                                        className={classes.image}
                                                        src={item.img}
                                                        alt={" "}
                                                    >
                                                    </img></div>
                                                {/* <h6>{item.key}</h6> */}
                                            </Button>
                                        </div>
                                    </div>
                                </form></Grid>
                            }
                            )
                        }

                    </Grid>
                </div>
            </ThemeProvider></>
    )
}
