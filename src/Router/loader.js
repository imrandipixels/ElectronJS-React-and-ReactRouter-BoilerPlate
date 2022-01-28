import React from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Skeleton from '@material-ui/lab/Skeleton';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles(() => ({
  image: {
    width: '100%',
  },
}));

function SkeletonChildrenDemo(props) {
  const { loading = false } = props;
  const classes = useStyles();

  return (
    <div>
      <Box display="flex" alignItems="center">
        <Box margin={1}>
          {loading ? (
            <Skeleton variant="circle">
              <Avatar />
            </Skeleton>
          ) : (
            <Avatar src="https://pbs.twimg.com/profile_images/877631054525472768/Xp5FAPD5_reasonably_small.jpg" />
          )}
        </Box>
        <Box width="100%">
          {loading ? (
            <Skeleton width="100%">
              <Typography>.</Typography>
            </Skeleton>
          ) : (
            <Typography>Ted</Typography>
          )}
        </Box>
      </Box>
      {loading ? (
        <Skeleton variant="rect" width="100%">
          <div style={{ paddingTop: '57%' }} />
        </Skeleton>
      ) : (
        <img
          className={classes.image}
          src="https://pi.tedcdn.com/r/talkstar-photos.s3.amazonaws.com/uploads/72bda89f-9bbf-4685-910a-2f151c4f3a8a/NicolaSturgeon_2019T-embed.jpg?w=512"
          alt=""
        />
      )}
    </div>
  );
}

SkeletonChildrenDemo.propTypes = {
  loading: PropTypes.bool,
};

export default function SkeletonChildren() {
  return (
    <Grid container >
      <Grid item sm={6} xs={6} style={{ marginLeft:'25%',marginTop:'8%', position:'relative',marginBottom:'15%'}}>
        <SkeletonChildrenDemo loading />
        <span style={{position:'absolute', top:'45%', left:'30%', justifyContent:'center', textAlign:'center'}}>
        <div style={{color:'white', marginBottom:'5%', fontSize:'40px'}}>MTehseen.com</div>
        <CircularProgress style={{color:'#858585'}} />
            Loading...
        </span>
      </Grid>
      
    </Grid>
  );
}
