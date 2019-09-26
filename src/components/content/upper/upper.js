import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import './upper.css';
import HitIt from  "./img/hit it-01.png"


const useStyles = makeStyles(theme => ({
  root: {
    fontFamily: "BebasNeueRegular",
    paddingTop: theme.spacing(10),
    paddingLeft: theme.spacing(9),
    paddingBottom: theme.spacing(15),
    background: 'linear-gradient(to top, #000000, #2a1219, #501a28, #771f35, #a1243f, #b02740, #bf2c3f, #ce313e, #c53438, #bc3632, #b4382c, #ab3927)',
    color: 'white'

  },
  row:{
    marginTop: theme.spacing(1),
  },

  imgRow:{
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(3),
  },

  

  paper:{
    textAlign: "left",
    justifyContent: 'center',
    // background: 'blue'
    

  },

  paperContent:{
    fontWeight: "bold",
    fontSize: "20px",
  },

  leftPart:{
    paddingTop: theme.spacing(5)
  },

  img:{
    marginLeft: theme.spacing(5)
  },

  
}));

function getArtists(result, part)
{
  let artists = [];
  let divs = [];

  if(part == 1)
  {
    for(let i = 0; i < 3; i++)
      artists.push(result[i].name);
  }
  else
  {
    for(let i = 3; i < 6; i++)
      artists.push(result[i].name);
  }


  artists.map((el)=>
  {
    divs.push(<img src={require("./img/" + el)} alt={el} width='150px' height='150px' />)
  });

  return <div>{divs}</div>

}


export default function Upper({result})
{
  const classes = useStyles();
    return (
      <div id="upperContent" className={classes.root}>
        <Grid container>
          
          <Grid item xs={4} className={classes.leftPart}>
              <Grid item xs={6}>
                <div className={classes.paper}>
                  <span className={classes.paperContent} style={{fontWeight: "bold" , fontSize: "-webkit-xxx-large"}}>AMP UP <br/>THOSE DBS</span>
                </div>
              </Grid>

              <Grid item xs={4} className={classes.row}>
                <div className={classes.paper}>
                <span className={classes.paperContent} style={{fontWeight: "normal" , fontSize: "-webkit-x-large"}}>MAKE MUSIC ON THE GO.</span>
                </div>
              </Grid>

              <Grid item xs={4} className={classes.row}>
                <div className={classes.paper} style={{paddingTop: '15px'}}>
                  <img src={HitIt} alt='Hit It!' width="125px" height="70px" />
                </div>
              </Grid>
            </Grid>

            {/* fetch artists here */}
            <Grid item xs={8}>
              <Grid item xs={12} className={classes.imgRow}>
                {getArtists(result,1)}
              </Grid>

              <Grid item xs={12} className={classes.imgRow}>
                {getArtists(result,2)}
              </Grid>

            
            </Grid>
        </Grid>
      </div>
    );
  }
