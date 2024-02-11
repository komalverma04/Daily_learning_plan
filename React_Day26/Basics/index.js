//Create a react app from scratch
import React from "react";
import reactDom from "react-dom";

var fname = "Komal";
var lname = "Verma";
//It should display 2 paragraph HTML elements.
reactDom.render(
  <div>
    <img src="https://seapublication.files.wordpress.com/2014/01/increasing-success-photo.jpg?w=364&h=276" />
    <img src="https://seapublication.files.wordpress.com/2014/01/increasing-success-photo.jpg?w=364&h=276" />
    <img src="https://seapublication.files.wordpress.com/2014/01/increasing-success-photo.jpg?w=364&h=276" />
  </div>,
  document.getElementById("root")
);
//The paragraphs should say:
//Created by YOURNAME.
//Copyright CURRENTYEAR.
//E.g.
//Created by Angela Yu.
//Copyright 2019.
