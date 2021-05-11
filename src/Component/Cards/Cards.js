import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import styles from './Cards.module.css'

const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },

    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

export function Cards({ SingleCountryData }) {
    // const data = resource.read()
    // console.log(data, 'data')

    const classes = useStyles();

    return <div className={styles.CARDSWRAPPER}>
        <Card className={`${classes.root} ${styles.MOBILEVIEW}`}>
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    Infected
        </Typography>
                <Typography variant="h5" component="h2">
                    {SingleCountryData.ActiveCases_text}
        </Typography>
                <Typography className={classes.pos} color="textSecondary">
                {SingleCountryData.LastUpdate}
                </Typography>
                <Typography variant="body2" component="p">
                    Number of active cases
        <br />
                    {"of COVID_19"}
                </Typography>
            </CardContent>
        </Card>
        <Card className={`${classes.root} ${styles.MOBILEVIEW}`}>
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    Recover
      </Typography>
                <Typography variant="h5" component="h2">
                    {SingleCountryData.TotalRecovered_text}
      </Typography>
                <Typography className={classes.pos} color="textSecondary">
                    {SingleCountryData.LastUpdate}
                </Typography>
                <Typography variant="body2" component="p">
                    Number of recoveries
        <br />
                    {"from COVID_19"}
                </Typography>
            </CardContent>
        </Card>
        <Card className={`${classes.root} ${styles.MOBILEVIEW}`}>
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    Death
      </Typography>
                <Typography variant="h5" component="h2">
                    {SingleCountryData.TotalDeaths_text}
      </Typography>
                <Typography className={classes.pos} color="textSecondary">
                {SingleCountryData.LastUpdate}
                </Typography>
                <Typography variant="body2" component="p">
                    Number of deaths caused
        <br />
                    {"by COVID_19"}
                </Typography>
            </CardContent>
        </Card>
    </div>
}