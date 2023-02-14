import React from "react";

class Profile extends React.Component {
  //   constructor(props) {
  //     super();
  //     console.log("props ", props);
  //     console.log("props this ", this.props);
  //   }

  //   constructor(props) {
  //     super(props);
  //     console.log("pass props in super ", this.props);
  //   }

  constructor(props) {
    super(props);
    //Create state
    this.state = {
      userInfo: {
        name: "Dummy Name",
        location: "Dummy Location",
      },
    };
    console.log("Child - Constructor " + this.props.name);
  }

  async componentDidMount() {
    console.log("Child - ComponentDidMount  Start ");
    //API calls
    // get a user from github
    const data = await fetch("https://api.github.com/users/siddharth");
    const json = await data.json();
    console.log("Get user :: ", json);
    this.setState({
      userInfo: json,
    });

    console.log("Child - ComponentDidMount " + this.props.name);
  }

  componentDidUpdate() {
    console.log("Component Did Update");
  }

  componentWillUnmount() {
    console.log("Component Will Unmount");
  }
  render() {
    const { count } = this.state;
    console.log("Child - render " + this.props.name);

    return (
      <div>
        <h1> Profile Class Component</h1>
        <h2> Name :: {this.state.userInfo.name}</h2>
        <h2> Location :: {this.state.userInfo.location}</h2>
        <img src={this.state.userInfo.avatar_url}></img>
      </div>
    );
  }
}

export default Profile;

{
  /* 
  Parent Constructor
  Parent render
  Child Constructor 
  Child Render

  DOM is updated
  json is logged in console

  child component did mount
  Parent component did mount 

  Note here ::  as componentDid Mount is asyn here, so there will be a delay and due this Parent componet did mount print in the console.

  So corect order ::

  Parent Constructor
  Parent render
  Child Constructor 
  Child Render

   Parent component did mount 
   Get user ::  -----
    child component did mount
    Child Render // This is printed bcoz in component did mount , we are updating the state , so re-render of component happened.





  
  */
}

{
  // After Commenting all parent logs in About js::
  /* 
   Child Constructor
   child render
   child component did mount

   API call
   set state

 <UPDATE CYCLES>
 render component
 Component Did Update


 So output:::

 Child - Constructor First Child
 Child - render First Child
 Child - ComponentDidMount  Start 
 Get user ::  {login: 'akshaymarch7', id: 12824231, node_id: 'MDQ6VXNlcjEyODI0MjMx', avatar_url: 'https://avatars.githubusercontent.com/u/12824231?v=4', gravatar_id: '', …}
 Child - ComponentDidMount First Child
 Child - render First Child
 Component Did Update

 ----------------------------------------------------------------------------------------------------

 Next case :: When Unmount will call and what is the output??
 Child - Constructor First Child
 Child - render First Child
 Child - ComponentDidMount  Start 
 Get user ::  {login: 'akshaymarch7', id: 12824231, node_id: 'MDQ6VXNlcjEyODI0MjMx', avatar_url: 'https://avatars.githubusercontent.com/u/12824231?v=4', gravatar_id: '', …}
 Child - ComponentDidMount First Child
 Child - render First Child
 Component Did Update

 render // this is called because we logged a console in Body.js
 component will Unmount // This is called we unmount the component , i.e suppose we click on HOME page .At this point we are unmounting it from About page.

  
  */
}
