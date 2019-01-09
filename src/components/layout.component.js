import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
    root: {
        flexGrow: 1
    },
    paper: {
        // padding: theme.spacing.unit * 1,
        textAlign: 'center',
        color: theme.palette.text.secondary,
        borderRadius: 0,
        marginTop: 10
    },
    img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
    },
});

class GuttersGrid extends React.Component {

    render() {
        const { classes, data } = this.props;
        console.log(data.items)
        return (
            <div className={classes.root}>
                <Grid container spacing={8} justify="center">
                    {data.items.map((value, i) => (
                        <Grid key={i} item xs={2}>
                            <Paper className={classes.paper}>
                                <img className={classes.img} alt="complex" src={value.snippet.thumbnails.high.url} />
                            </Paper>
                        </Grid>
                    ))}
                </Grid>
            </div>
        );
    }
}

GuttersGrid.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(GuttersGrid);