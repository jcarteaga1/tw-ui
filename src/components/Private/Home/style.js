import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    logoGrid:{
        display:'flex',
        justifyItems:'center',
        alignItems:'flex-start'
        
    },
    searchGrid:{
    },
    gridContainer:{
        height:'100vh',
    },
    homeGrid:{
        borderRightWidth:'1px',
        borderRightColor:'grey',
        borderRightStyle:'solid',
        borderLeftWidth:'1px',
        borderLeftColor:'grey',
        borderLeftStyle:'solid'
    },
    gridHeader:{
        height:'80px',
        width:'100%',
        display:'flex',
        justifyItems:'center',
        alignItems:'center',
        paddingLeft:'5%'
    },
    img:{
        height:'55%',
        margin:'5px'
    },
    input:{
        backgroundColor:'#E3E4E5',
        height:'60%',
        width:'90%',
        borderRadius:'100px',
        paddingLeft:'10px',
        alignSelf:'center'
    },
    list:{
        alignSelf:'justify',
        width:'100%',
        color:'black'
    },
    button:{
        width:'90%',
        marginTop:-10,
        marginLeft:'5%',
        height:'50px',
        borderRadius:'50px',
        backgroundColor:'#1DA1F2',
        display:'felx',
        alignSelf:'center',
        justifySelf:'center',
        color:'white'
    }
});

export default useStyles;