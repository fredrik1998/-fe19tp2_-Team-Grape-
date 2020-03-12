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

const StyledGrid = styled(Grid)({
  background: `#252830`,
  color: 'white',
  display: 'flex',
  flexDirection: 'row'
});


const useTabs = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  tabs: {
    color: green,
  },
  large: {
    width: theme.spacing(12),
    height: theme.spacing(12),
  },

}));

const StyledTabs = styled(Tabs)({
  background: `#252830`,
  color: 'white',
});


// {avatar: 'G', },
const teamCards = [{avatar: 'G', title: 'GODSENT', subTitle: 'CS:GO Team', description: ` Swedish esports organization formed by former Fnatic in-game leader Markus "pronax" Wallsten and entrepreneur Tomas Oropesa Martin. The organization ceased operation following the sale of its roster to Red Reserve and RFRSH's withdrawal from the team's operations.[1]
`, image: "https://liquipedia.net/commons/images/thumb/a/a3/GODSENT.png/900px-GODSENT.png"}, 
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
          {/* <Tab label="Login" className={classes.large} href={ROUTES.SIGN_IN} /> */}
        </StyledTabs>
      </Paper>
      <StyledGrid container direction="row" justify="center" alignItems="center">
        {teamCards.map((card, index) => <CustomReviewCard key={index} avatar={card.avatar} title={card.title} subTitle={card.subTitle} description={card.description} image={card.image} />)}
        
        <CustomReviewCard
          key={1}
          avatar="G"
          title="GamerLegion"
          subTitle="CS:GO TEAM"
          description={`Team GamerLegion is a German esports organization founded in 2017. They are mostly known for their League of Legends team, but they also field active rosters in Global Offensive and Rainbow Six.[1]`}
          image src="GODSENT.png"
        />
        <CustomReviewCard
          key={2}
          avatar="N"
          title="Ninjas In Pyjamas"
          subTitle="CS:GO TEAM"
          description={`Ninjas in Pyjamas is a Swedish esports organization which was founded in 2000. The team competed in Counter-Strike until their dissolution in 2007. In 2012, the team returned with a now heavily renowned Counter-Strike: Global Offensive squad.[1]`}
          image="https://upload.wikimedia.org/wikipedia/en/thumb/d/d0/Ninjas_in_Pyjamas_logo.svg/1200px-Ninjas_in_Pyjamas_logo.svg.png"
        />
        <CustomReviewCard
          key={3}
          avatar="F"
          title="Fnatic"
          subTitle="CS:GO TEAM"
          description={`Fnatic, occasionally stylized as fnatic and abbreviated as FNC, is a world leader in multiple games, such as League of Legends, Dota 2 and more. 

          In Europe, the US, India, and South America, Fnatic stad 2009.
          
          Thed.`}
          image="https://liquipedia.net/commons/images/thumb/9/96/Fnatic_2020_infoboximage.png/900px-Fnatic_2020_infoboximage.png"
        />
        <CustomReviewCard
          key={2}
          avatar="N"
          title="Navi"
          subTitle="CS:GO TEAM"
          description={`Natus Vincere Latin: "born to win", often abbreviated as NaVi is a leading multi-game esports organization from Ukraine. It is the first team in Counter-Strike history to win three major tournaments in one calendar year - IEM Season IV, ESWC 2010 and WCG 2010.`}
          image="https://liquipedia.net/commons/images/thumb/d/d6/Natus_Vincere.png/900px-Natus_Vincere.png"
        />
      </StyledGrid>
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
    color: blueGrey[500],
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




 
