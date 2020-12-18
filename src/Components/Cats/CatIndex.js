import React, { Component } from 'react';
import CatList from './CatList';
 
class CatIndex extends Component {

// constructor will initialize state

 constructor(props) {
   super(props);
   this.state = {
     breeds: ['persian', 'siamese', 'maine coon', 'ragdoll', 'scottish fold', 'sphynx', 'british shorthair', 'bengal', 'american shorthair'],
   };
 }
   
   render() {
   return (
     <div>
       <ul>
         {
           this.state.breeds.map((breed) => {
            return (<CatList>{breed}</CatList>)
           })
          }
        </ul>
     </div>
   );
  }
}

export default CatIndex;