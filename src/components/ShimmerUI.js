const Shimmer = () => {
  return (
    <div className="resturant-list">
      {Array(10)
        .fill("")
        .map((e, index) => {
          return (
            <div key={index} className="shimmer-card">
              <div className="wrapper">
                <div className="profilePic animate din"></div>
                <div className="comment br animate w80"></div>
                <div className="comment br animate"></div>
                <div className="comment br animate"></div>
              </div>
            </div>
          );
        })}
    </div>
  );
 
};


export default Shimmer;
