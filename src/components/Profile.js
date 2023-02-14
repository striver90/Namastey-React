import { useEffect, useState } from "react";

const Profile = (props) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // console.log("useeffect");
    const timer = setInterval(() => {
      console.log("Namaste React - op -");
    }, 1000);

    // cleanup -i.e  componenet will unmount
    return () => {
      clearInterval(timer);
    };
  }, []);
  //console.log("render");

  return (
    <div>
      <h1> Profile Functional Component</h1>
      <h2> name :: {props.name}</h2>
      <h2> Counter :: {count}</h2>
      <button
        onClick={() => {
          setCount(1);
        }}
      >
        Count
      </button>
    </div>
  );
};

export default Profile;
