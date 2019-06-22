import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import "./ticker.css";


class Ticker extends Component {
  state = {
    price: {
      NTDOY: 1,
      ATVI: 2,
      EA: 3,
      TTWO: 4,
      SNE: 5
    }
  };
   render(){
    
    return (
      
    <div className="ticker">
      <Paper style={{
        padding: 10,
        }}>
        <Typography variant="h5" component="h3" style={{textAlign:"center"}}>
          Nintendo(NTDOY): ${this.state.price.NTDOY} | Activision(ATVI): ${this.state.price.ATVI} | Electronic Arts(EA): ${this.state.price.EA}
        </Typography>
        <Typography variant="h5" component="h3" style={{textAlign:"center"}}>
          Take Two Interactive(TTWO): ${this.state.price.TTWO} | Sony Interactive Entertainment(SNE): ${this.state.price.SNE}
        </Typography>
      </Paper>
    </div>
  );
};
}
  
       
     
    
  
  
  
  

export default Ticker;
