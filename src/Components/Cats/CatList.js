import React, { Component } from 'react';
 
const CatList = (props) => {
 return (
   <li>
     <span>Breed: {props.children}</span>
   </li>
 )
}
 
export default CatList;
