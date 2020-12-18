import React from 'react';
import {Input} from 'reactstrap';
 
class SearchIndex extends Component {
    constructor()
    super();
    this.state = {
     things: ['pen', 'marker', 'eraser', 'notebook', 'pencil', 'scissors', 'highlighter', 'stapler', 'paper clip', 'binder', 'hole punch', 'laminator', 'laminating sheets', 'protective sheets', 'index cards']
   }

 function searchFunction() {
    let newThings = this.state.things.map((thing) {
        return (thing)
    })
 }

 searchBox = (e) => {
     this.setState({things: e.target.value})
 }

 render() {
     <div>
       <Input onChange={searchBox} placeholder='Search Here' />

       <h3>Results:</h3>

       <span>{this.state.things}</span>

     </div>
 }

 
export default SearchIndex;
