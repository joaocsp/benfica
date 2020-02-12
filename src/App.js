// DevOps João Project
import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import AllInclusiveTwoToneIcon from '@material-ui/icons/AllInclusiveTwoTone';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://www.linkedin.com/in/jo%C3%A3o-carlos-soeiro-paulo-1649a13/">
        Joao linkedin, Today
      </Link>{' '}
      {new Date().getMonth()}
      {'/'}
      {new Date().getDate()}
      {'/'}
      {new Date().getUTCFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(https://www.sovereignconsult.com/wp-content/uploads/2019/08/DevOps-Development.png)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'dark' ? theme.palette.grey[900] : theme.palette.grey[50],
    backgroundSize: 'contain',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));



export default function DevOpsMetrics() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    fod: '',
    ltfc: '',
    mttr: '',
    efr: '',
  });

  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value });
  };

  async function handleSubmit(event) {
    event.preventDefault();

    //console.log(values.fud)
  }


  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
        <Avatar className={classes.avatar}>
            <AllInclusiveTwoToneIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            DevOps Outcomes
          </Typography>
          <form className={classes.form} noValidate onSubmit={handleSubmit}>
          <Typography component="h1" variant="h6">
            Team name
          </Typography>
          <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              label="You team name"
              name="name"
              autoFocus
            /> 
          <Typography component="h1" variant="h6">
            Your Email
          </Typography>
          <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="email"
              name="email"
              type="email"
              autoComplete="email"
              autoFocus
            />
          <Typography component="h1" variant="h6">
            DevOps Metrics
          </Typography>  
          <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="fod"
              label="Frequency of Deployment"
              name="fod"
              value={values.fod}
              onChange={handleChange('fod')}
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="ltfc"
              label="Lead Time For Changes"
              name="ltfc"
              value={values.ltfc}
              onChange={handleChange('ltfc')}
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="mttr"
              label="Mean Time To Restore From Service"
              name="mttr"
              value={values.mttr}
              onChange={handleChange('mttr')}
              aria-describedby="standard-weight-helper-text"
              inputProps={{
                'aria-label': 'mttr',
              }}
              
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="efr"
              label="Error failure rate"
              name="efr"
              value={values.efr}
              onChange={handleChange('efr')}
              autoFocus
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Submit DevOps
            </Button>
           
          </form>
           <Button
              type="submit"
              fullWidth
              variant="contained"
              color="secundary"
              className={classes.submit} 
            
            >
              Show all DevOps teams
            </Button>
          
              <Box mt={5}>
              <Copyright />
            </Box>
        </div>
      </Grid>
   
    </Grid>
  );
}