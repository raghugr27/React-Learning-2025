import React from "react";

class UserClass extends React.Component {
    constructor(props){
          super(props);
          this.state = {
            userInfo:{
                name:"",
                location:"",    
                avatar_url:"",
                bio:""
            }
          }
        
    };
  
async componentDidMount(){
     let data = await  fetch("https://api.github.com/users/raghugr27");
    let json = await data.json();
    this.setState({
        userInfo:json
    })
 

}
componentDidUpdate(prevProps,prevState){
    if(this.props.count !== prevProps.count){
        console.log("count updated");
    }
}
    render(){
        let {name,location,bio} = this.state.userInfo;
        return(
        <div className="user-class">
        <h2> Name : {name} </h2>  
        <h2>Location : {location}</h2>
        <h3>Bio : {bio}</h3>      
        </div>)
    }
}
export default UserClass