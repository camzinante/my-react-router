import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="/Users/cc/my-react-router/src/react-logo.png"
          title="React Logo"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            React
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            React JS is one of the most in-demand frameworks on the market as of 2021. A whopping 31.3% of worldwide specialists are currently utilizing React over Angular or Vue. See tutorials, projects, and more- or share with a friend! 
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      
        <Button size="small" color="primary">
          Share with a Friend
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
