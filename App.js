const heading =   React.createElement("h1",{
    className : "test",
    id : "h2",
    key : "k1",
    style:{
        color: "blue",
        textAlign:'center'
    }
   }," Namastey Everyone",
   
    React.createElement("i",{
    style: {
      color: 'red',
     }
   }," to learn React!!"));



   const para = React.createElement("p",{  
    key : "p1",  
    style:{
        textAlign: 'center',
        fontSize: '1.5rem'
    }
   },"from zero ... to hero")

   

   const conatiner = React.createElement("div",{
    id:'container'
   },[heading,para])

   const root = ReactDOM.createRoot(document.getElementById("root"));
   root.render(conatiner);
   
   //console.log(conatiner)