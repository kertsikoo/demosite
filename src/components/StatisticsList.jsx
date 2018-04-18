import React from 'react';
import { withStyles } from 'material-ui/styles';
import SolutionChart from './SolutionChart';
import AmountChart from './Line';
import Agents from './AgentChart'
import Grid from 'material-ui/Grid';
import Divider from 'material-ui/Divider';
import ProblemChart from './ProblemChart';
import CountUp from 'react-countup';
import Ratings from './Ratings';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography/Typography';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import styled from 'styled-components';
import Button from 'material-ui/Button';

const styles = theme => ({
    root: {
        padding: 20,
        paddingTop: 0
      },
     charts: {
         padding: 30,
     },
     numerical: {
        marginTop: 50,
        textAlign: 'center'
     },
     chatTimes: {
        display: "inline-block",
        fontFamily: "Helvetica",
        fontSize: 20,
        color: '#4d4d4d',

     },
   
     typography: {
        color: 'grey',
        paddingBottom: 10,
        paddingTop:0
      },
});


const StyledButton = styled(Button)`
  background: grey;
  border-radius: 3px;
  border: 0;
  color: white;
  height: 48px;
  padding: 0 30px;
`;

class StatisticsList extends React.Component {

    printDocument() {
        const input = document.getElementById('print');
        html2canvas(input)
          .then((canvas) => {
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF();
            pdf.addImage(imgData, 'JPEG', 0, 0);
            // pdf.output('dataurlnewwindow');
            pdf.save("download.pdf");
          })
        ;
      }

    render() {

    const { classes } = this.props;


        return(
            <div className={classes.root}>
                <Paper  elevation={4}>
                <div>
                    <div className = {classes.charts}>
                        <Grid container spacing={24}>
                            <Grid item xs={6} >    
                            <div id="print" >
                            <Typography className={classes.typography}>NUMBER OF CHATS</Typography>
                                <AmountChart  stats={this.props.stats}/>
                            </div>
                            <div >
                                <StyledButton onClick={this.printDocument}>PRINT PDF</StyledButton>
                            </div>
                            </Grid> 
                            <Grid item xs={6} className={classes.chatTimes}>    
                                <div >
                                <Typography className={classes.typography}>RATINGS</Typography>
                                    <Ratings />
                                </div>
                                <Grid container spacing={0} className={classes.numerical}>
                                <Grid item xs={4} >Missed chats: <br/> {this.props.missedChats}</Grid>
                                <Grid item xs={4} >  Average wait: <br/> <CountUp start={0} end={9.62} 
                                    duration={2} decimals={2} decimal="," />sec </Grid>
                                <Grid item xs={4} >  Average duration: <br/> {this.props.duration}</Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </div>
                    <div className = {classes.charts}>
                        <Grid container spacing={24}>
                            <Grid item xs={12} >    
                            <Typography className={classes.typography} >CHATS BY AGENT</Typography>
                                <Agents />
                            </Grid>
                        </Grid>
                    </div>
                    <Divider/>
                    <div className = {classes.charts}>
                        <Grid container spacing={24}>
                            <Grid item xs={4} >    
                                <Typography className={classes.typography} style={{textAlign: 'center'}}>Level 1</Typography>
                                <SolutionChart/> 
                            </Grid>
                            <Grid item xs={4} >    
                                <Typography className={classes.typography} style={{textAlign: 'center'}}>Level 2</Typography>
                                <ProblemChart/> 
                            </Grid>
                        </Grid>
                    </div>
                </div>
                </Paper>
            </div>
        )
           
    }
}

export default withStyles(styles)(StatisticsList);