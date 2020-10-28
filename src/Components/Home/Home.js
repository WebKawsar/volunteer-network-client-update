import { Grid } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { useHistory } from 'react-router-dom';




const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    position: "relative",
    borderRadius: "10px"
  },
  item: {
      padding: "20px 20px"
  },
  content: {
      textAlign: "center",
      position: "absolute",
      bottom: "0",
      width: "100%",
      height: "90px",
      backgroundColor: "#3F90FC",
      color: "white"
  }

});


const Home = (props) => {
    const classes = useStyles();

    const {_id, eventTitle, img} = props.event;
    const history = useHistory();
    const handleClick = (id) => {
        history.push(`/register/volunteer/${id}`)
    }


    return (

            <Grid className={classes.item} item md={3} sm={6} xs={12}>
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            onClick={() => handleClick(_id)}
                            alt="Contemplative Reptile"
                            image={`https://volunteer-network-simple.herokuapp.com/${img}`}
                            title="Contemplative Reptile"
                        />

                        <CardContent onClick={() => handleClick(_id)} style={{ backgroundColor: `#${Math.floor(Math.random() * 16777215).toString(16)}` }} className={classes.content}>
                            <Typography variant="h6" component="h6">
                                {eventTitle}
                            </Typography>
                        </CardContent>

                    </CardActionArea>
                </Card>
            </Grid>
            
    );
};

export default Home;