import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    bottomActions: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'baseline'
    },
    button: {
        borderRadius: '100px',
        textTransform: 'capitalize',
        color:'white',
        backgroundColor: '#f44336',
        // backgroundColor: theme.palette.secondary.A400,
        padding: 0,
        marginTop: 5
    },
    content: {
        margin: '0px 20px',
        padding: 10,
    },
    text:{
        fontSize:'.8rem',
        paddingBottom:'10px'
    },
    media: {
        height: '30vh',
        borderRadius:'12px'
    },
    moreIcon: {
        marginRight: 10
    },
});

export default useStyles;