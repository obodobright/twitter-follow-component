import React from 'react';

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            logo : 'FrontEnd Mentor',
            nav : [
                {
                id:1,
                name : 'Unlock Pro'
            },{
                id:2,
                name : 'Challenges'
            },
        {
            id:3,
            name:'Solution'
        },
        {
            id:4,
            name:'Resources'
        },
        {
            id:5,
            name : 'Login With Github'
        },
    ]

         }
    }
    render() { 
        return ( 
            <div className="container mt-3">
                <div style={{display:'flex', justifyContent:'space-between'}}>
                <h5>{this.state.logo}</h5>
               <ul style={ul}>
               {this.state.nav.map((nav)=>(
                    <li key={nav.id} style={{
                        background: nav.name === 'Login With Github'  ? 'black'  : null, color:nav.name === 'Login With Github'  ? 'white':null,borderRadius : nav.name === 'Login With Github'  ? '1em':null 
                    }}>
                        {nav.name}
                    </li>
                ))}
               </ul>
                </div>
            </div>
         );
    }
}
const ul ={
    listStyleType : 'none',
    textTransform : 'uppercase'


}
 
export default Navbar;