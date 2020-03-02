import React from 'react';
import * as ROUTES from '../../constants/routes';
import { Link } from 'react-router-dom';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { green } from '@material-ui/core/colors';
import styled, { withTheme } from 'styled-components';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { blueGrey } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Grid from '@material-ui/core/Grid';

const useTabs = makeStyles({
  root: {
    flexGrow: 1
  },
  tabs: {
    color: green
  }
});

const StyledTabs = styled(Tabs)({
  background: `#180F0F`,
  color: 'white'
});


// {avatar: 'G', },
const teamCards = [{avatar: 'F', title: 'FRASSE', subTitle: 'CS:GO Team', description: `Frasse is a Swedish esports organization formed by Markus "pronax" Wallsten and
entrepreneur Tomas Oropesa Martin. In September 2019, The Final Tribe merged with
Godsent.[1]`, image: "https://liquipedia.net/commons/images/thumb/a/a5/TeamGamerLegion.png/600px-TeamGamerLegion.png"}, 
];


export default function CenteredTabs() {
  const classes = useTabs();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <React.Fragment>
      <Paper className={classes.root}>
        <StyledTabs
          value={value}
          centered
          onChange={handleChange}
          TabIndicatorProps={{
            style: {
              backgroundColor: '#F5F5F5'
            }
          }}
        >
          <Tab label="Login" href={ROUTES.SIGN_IN} />
          <Tab label="Home" />
          <Tab label="Teams" />
          <Tab label="Games" />
          <Tab label="Faq" />
        </StyledTabs>
      </Paper>
      <Grid container direction="row" justify="center" alignItems="center">
        {teamCards.map((card, index) => <CustomReviewCard key={index} avatar={card.avatar} title={card.title} subTitle={card.subTitle} description={card.description} image={card.image} />)}
        <RecipeReviewCard />
        <CustomReviewCard
          key={1}
          avatar="F"
          title="FRASSE"
          subTitle="CS:GO TEAM"
          description={`Frasse is a Swedish esports organization formed by Markus "pronax" Wallsten and
          entrepreneur Tomas Oropesa Martin. In September 2019, The Final Tribe merged with
          Godsent.[1]`}
          image="https://liquipedia.net/commons/images/thumb/a/a5/TeamGamerLegion.png/600px-TeamGamerLegion.png"
        />
        <CustomReviewCard
          key={2}
          avatar="F"
          title="GODSENT"
          subTitle="CS:GO TEAM"
          description={`Frasse is a Swedish esports organization formed by Markus "pronax" Wallsten and
        entrepreneur Tomas Oropesa Martin. In September 2019, The Final Tribe merged with
        Godsent.[1]`}
          image="https://liquipedia.net/commons/images/thumb/a/a5/TeamGamerLegion.png/600px-TeamGamerLegion.png"
        />
      </Grid>
    </React.Fragment>
  );
}

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 250,
    margin: 'auto',
    transition: '0.3s',
    boxShadow: '0px 14px 80px rgba(34, 35, 58, 0.2)',
    position: 'center',
    marginLeft: 'auto',
    overflow: 'initial',
    background: '#ffffff'
    /*     display: 'flex',
    justifyContent: 'space-around',
    flexDirection: 'row',
    alignItems: 'auto', */
    /*     padding: '30px' */
  },
  media: {
    width: '100%',
    backgroundColor: 'black',
    textAlign: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    padding: '30px',
    borderRadius: 6
  },
  title: {
    color: 'black',
    letterSpacing: '2px'
  },

  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: 'rotate(180deg)'
  },
  avatar: {
    backgroundColor: blueGrey[500]
  }
}));

const StyledTypography = withStyles({
  root: {
    color: blueGrey[500]
  }
})(Typography);

export function CustomReviewCard({ avatar, title, description, image, subTitle }) {
  // avatar: 'hej, title: 'hej
  console.log(title);
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root} style={{ backgroundColor: '#271F1F' }}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            {avatar}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={<StyledTypography>{title}</StyledTypography>}
        subheader={<StyledTypography>{subTitle}</StyledTypography>}
      />
      <CardMedia
        component="img"
        className={classes.media.MuiCardMedia}
        height="200"
        image={image}
        title="GODSENT"
      />
      <CardContent>
        <StyledTypography
          /*           variant="body2" */
          lineHeight={1.8}
          fontSize={12}
          component="p"
        >
          {description}
        </StyledTypography>
      </CardContent>
      <CardActions disableSpacing>
       
       
        <IconButton style={{ color: blueGrey[500] }}
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
        

      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <StyledTypography paragraph>Latest Games:</StyledTypography> 
          <StyledTypography paragraph>Matches</StyledTypography>
          <StyledTypography paragraph>Matches</StyledTypography>
          <StyledTypography paragraph>Matches</StyledTypography>
          <StyledTypography>Matches</StyledTypography>
        </CardContent>
      </Collapse>
    </Card>
  );
}

export function RecipeReviewCard() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root} style={{ backgroundColor: '#271F1F' }}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            G
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="GODSENT"
        subheader="CSGO TEAM"
      />
      <CardMedia
        component="img"
        className={classes.media.MuiCardMedia}
        height="200"
        image="https://upload.wikimedia.org/wikipedia/en/3/36/Godsent_logo.png"
        title="GODSENT"
      />
      <CardContent>
        <StyledTypography
          className={classes.root}
          variant="body2"
          color="orange[500]"
          lineHeight={1.8}
          fontSize={12}
          component="p"
        >
          Godsent is a Swedish esports organization formed by Markus "pronax" Wallsten and
          entrepreneur Tomas Oropesa Martin. In September 2019, The Final Tribe merged with
          Godsent.[1]
        </StyledTypography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Latest Games:</Typography>
          <Typography paragraph>Matches</Typography>
          <Typography paragraph>Matches</Typography>
          <Typography paragraph>Matches</Typography>
          <Typography>Matches</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
