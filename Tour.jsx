import React from 'react'
import TourList from './TourList';
import Data from './data'
import Navbar from './navbarTours';


class Tour extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            user: Data,
             }

         this.handleCompleted = this.handleCompleted.bind(this)
    }
 clearAll(){
     this.setState({
         user : []
     })
 }
 handleCompleted(id){
    this.setState((currentState)=>{
        return{
            user : currentState.user.filter((u)=> u.id !== id)
        }
    })
    
 }
    render() { 
              
        return ( 
            <div>
                <Navbar />
                <div style={styles}>
                {this.state.user.map((user)=>(
                    <TourList key={user.id} user={user} onCompleted = {this.handleCompleted}/>
                ))}
                
                </div>
                {/* <button onClick={this.clearAll.bind(this)}>clear all</button> */}
                {this.state.user.length === 0 ? <h3 className="text-center align-center">No Challenge Available</h3>: null}
               
            </div>
           
         );
    }
}
const styles ={
    display: 'grid',
    gridTemplateColumns : 'repeat(3,1fr)',
    gridGap : '1rem'
    
}
 
 
export default Tour;