import { Box, Grid, Paper, useMediaQuery } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import React from 'react';



const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%"
    },
    image: {
        width: "100%",
    },
    paper: {
        overflow: "hidden",
        padding: "20px 20px",
        position: "relative",
        boxShadow: "10px 10px 40px grey"
    },
    cancel: {
        padding: "12px 45px",
        border: "none",
        borderRadius: "5px",
        position: "absolute",
        right: "20px",
        bottom: "20px"
    },
    item: {
        padding: "20px"
    },
    container: {
        display: "flex",
        justifyContent: "space-between"
    },
    taskContent: {
        marginLeft: "20px"
    }


}))

const Tasks = (props) => {
    
    const classes = useStyles()
    const matches = useMediaQuery('(max-width:959px)');


    const {_id, library, date, img} = props.activity;
    const handleClick = (id) => {

        fetch(`https://volunteer-network-simple.herokuapp.com/deleteTask/${id}`, {
            method: "DELETE"
        })
        .then(data => {

            alert("You have successfully cancel an event");
            props.handleDelete()
        })

    }

    return (
        
            <Grid item md={6} sm={6} className={classes.item}>
                <Paper className={classes.paper}>
                    <Grid container className={classes.container}>
                        <Grid md={5} sm={12} item xs={12}>
                            <img className={classes.image} src={`https://volunteer-network-simple.herokuapp.com/${img}`} alt=""/>
                        </Grid>
                        <Grid md={7} sm={12} item xs={12}>
                            <Box className={classes.taskContent}>
                                <h3>{library}</h3>
                                <h5>{date}</h5>
                                <button onClick={() => handleClick(_id)} className={classes.cancel}>Cancel</button>
                            </Box>
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>
         
    );
};

export default Tasks;