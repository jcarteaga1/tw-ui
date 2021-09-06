import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    container: {
        height: "100vh",
        width: "100vw",
    },

    box: {
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },

    paper: {
        padding: "50px",
        borderRadius: "10px",
    },

    button: {
        width: "100%",
        color: "#1DA1F2",
        textDecoration: 'none',
        textTransform:'none',
    },

    primaryButton: {
        width: "100%",
        backgroundColor: "#1DA1F2",
        color: "#FFF",
        textTransform:'none',
    },

    form: {
        width: "100%",
        marginTop: "10px"
    },

    textInput: {
        width: "100%",
        marginBottom: "15px",
    },
});

export default useStyles;