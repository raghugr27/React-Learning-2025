import {Component} from 'react'
import UserClass from './UserClass'
  

class About extends Component{
constructor(props){
  super(props);
  console.log("parent constructor");
  this.state={
    count:1
  }

}

async componentDidMount(){
    console.log("parent did mount");
  


}
componentDidUpdate(){
    console.log("parent did update");
}
componentWillUnmount(){
  clearInterval(this.timer);
  console.log("parent will unmount");
}
  render(){
    console.log("parent render");
    return(
       <div>
       <h1> About Us</h1>
       <h2>This is the Food Ordering App</h2>
        <UserClass />
        
      </div>
    )
  }
}
export default About


