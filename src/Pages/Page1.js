import React from 'react'
import './Page1.css'

class Page1 extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            bgColor : ""
        }
        
    }
    boxClick = (e) => {
        this.setState({
          bgColor: "green"
        })
      }
    redClick = (e) => {
        this.setState({
            bgColor: "red"
        })
    }
    yellowClick = (e) => {
        this.setState({
            bgColor: "yellow"
        })
    }
    aquaClick = (e) => {
        this.setState({
            bgColor: "aqua"
        })
    }


    render() {
        return(
            <>
            <div className="container" style={{backgroundColor: this.state.bgColor}}>
           <button style={{height:"40px", width:"80px"}} onClick={this.boxClick} >Green</button><br/><br/>
            
           <button  style={{height:"40px", width:"80px"}} onClick={this.redClick}>Red</button><br/><br/>
           <button style={{height:"40px", width:"80px"}} onClick={this.yellowClick}>Yellow</button><br/><br/>
           <button style={{height:"40px", width:"80px"}} onClick={this.aquaClick}>Aqua</button>
           <br/><br/>
           <div><button style={{height:"20px", width:"20px"}}>+</button>&nbsp; &nbsp; <button style={{height:"20px", width:"20px"}}>-</button>&nbsp; &nbsp; <button style={{height:"20px", width:"20px"}}>✓</button></div>
         
            
            </div>
            </>
        )
    }
}
export default Page1







// class Page1 extends React.Component {
//     constructor(props){
//       super(props)
//       this.state ={
//         button: true
//       }
//       this.handleClick = this.handleClick.bind(this);
//     }
//     handleClick(){
//       this.setState({
//         button:!this.state.button
//       })
//     }
//     render(){
//       return (
//       <div className="container">
//         <button className={this.state.button ? "buttonTrue": "buttonFalse"} onClick={this.handleClick}> <i className="far fa-smile"></i> Hi!!</button>  
//       </div>
//       )
//     }
    
//   }
//   export default Page1;
  