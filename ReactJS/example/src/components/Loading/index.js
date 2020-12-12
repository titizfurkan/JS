import React from "react";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const Loading = () => {
  return (
    <div>
      <Loader
         type="Bars"
         color="#d4d4d4"
         height={70}
         width={70}
         timeout={2000} //2 secs
 
      />
    </div>
  );
};

export default Loading;
