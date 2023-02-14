import React from "react";
//import Profile from "./ProfileClass";
import ProfileFunctionalComponent from "./Profile";

class About extends React.Component {
  constructor(props) {
    super(props);
    // console.log("Parent - Constructor");
  }

  componentDidMount() {
    //Best plcae to make Api call
    // console.log("Parent - componentDidMount");
  }

  render() {
    //console.log("Parent - render");

    return (
      <div>
        <h1>This is About us page...!!!</h1>
        <p>This is Namaste React Live course Chapter-07- Finding The Path</p>
        <ProfileFunctionalComponent name={"First Child"} xyz="abc" />
      </div>
    );
  }
}

export default About;

{
  /** 
Parent Constructor
Parent-render
First child - constructor
First child - render
Second child - constructor
Second child - render
First child - component did mount
Second child - component did mount
parent - component did mount


*/
}
