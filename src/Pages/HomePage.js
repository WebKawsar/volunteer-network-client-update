import { Box, Container, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import React, { useEffect, useState } from 'react';
import Header from '../Components/Header/Header';
import Home from '../Components/Home/Home';


const useStyles = makeStyles((theme) => ({
    intro: {
        textAlign: "center",
        textTransform: "uppercase",
        padding: "40px 0 60px",
        fontWeight: "bold"
    },
    input: {
        padding: "10px 20px",
        width: "350px",
        border: "2px solid lightgrey",
        borderRight: "0",
        borderRadius: "5px 0 0 5px",
        marginTop: "25px"
    },
    submit: {
        padding: "10px 35px",
        border: "2px solid lightgrey",
        borderRadius: "0 5px 5px 0",
        backgroundColor: "#3F90FC",
        color: "white",
        borderLeft: "0",
    },
    section: {
        background: "linear-gradient(0deg, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)), url('https://i.ibb.co/68ggDDs/Mask-Group.png')",
        backgroundSize: "100% 100%",
        height: "500px",
        position: "relative"
    },


}))



const HomePage = () => {
    const classes = useStyles();

    const [events, setEvents] = useState([]);
    useEffect(() => {

        fetch("https://volunteer-network-simple.herokuapp.com/events")
        .then(response => response.json())
        .then(data => setEvents(data))

    }, [])


    const [search, setSearch] = useState("");

    console.log(search);


    return (
        <Box className="home">
            <Box className={classes.section}>
                <Header></Header>
                <Box className={classes.intro}>
                    <h1>i grow by helping people in need</h1>
                    <input className={classes.input} onChange={(e) => setSearch(e.target.value.toLowerCase())} type="text" name="" id="" placeholder="Search..."/>
                    <input className={classes.submit} type="submit" value="Search"/>
                </Box>
                <Container className={classes.eventsItem}>
                    <Grid container>
                        {   
                            events.filter(vol => vol.eventTitle.toLowerCase().includes(search.trim())).map((event, index) => 
                                {
                                    let color = ["red", "blue", "green", "yellow", "purple", "tomato", "cyan"];
                                    let random = Math.floor(Math.random() * 7);

                                    return (<Home color={color[random]} key={event._id} event={event}></Home>)
                                    
                                }
                            
                            )
                        }
                    </Grid>
                </Container>
            </Box>
        </Box>
    );
};

export default HomePage;