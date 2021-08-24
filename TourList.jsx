import React from 'react';
import './tours.css'

class TourList extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            readMore : false
         }
    }
    handleReadMore(){
        this.setState({
            readMore : !this.state.readMore
        })
    }
    
    render() { 
        const {id,title,image,skill,level,about,levelNumber,language} = this.props.user
        return (
            <React.Fragment> 
            <div>
            <div className="card" style={{width:'25rem',margin:'0.7em', height:'600px'}}>
                    <img src={image} alt="img"  className="card-img-top"/>
                    <div className="card-body">
                    <h5 className="card-title">{title}</h5>
            <div style={{display:'flex', justifyContent:'space-between'}}>
                    <p>{language}</p>
                    {/* LEVEL NUMBER AND LEVEL CONTAINER */}
                <div className="skillContainer" style={{border: level === 'NEWBIE'? '1px solid turquoise'
                     : level === 'INTERMEDIATE' ? '1px solid #f1b604'
                     : level === 'JUNIOR' ? '1px solid #AAD742'
                     : level === 'ADVANCED' ? '1px solid #f48925'
                     : level === 'GURU' ? '1px solid orange': null }}>
                    <span style={{
                        background: levelNumber === '1' ? 'turquoise'
                        : levelNumber === '2'? '#AAD742'
                        : levelNumber === '3'? '#f1b604' 
                        : levelNumber === '4' ? '#f48925' 
                        :levelNumber === '5'? 'hsl(0deg 79% 62%)'
                        :  null, color: 
                        levelNumber === '1' ? 'white'
                        : levelNumber === '2'? 'white'
                        : levelNumber === '3'? 'white' 
                        : levelNumber === '4' ? 'white' 
                        :levelNumber === '5'? 'white'
                        :null
                    }}>
                        {levelNumber}  
                        </span>
                         <span style={{
                             color: 
                             level === 'NEWBIE' ? 'turquoise'
                             : level === 'JUNIOR'? '#AAD742'
                             : level === 'INTERMEDIATE'? '#f1b604' 
                             : level === 'ADVANCED' ? '#f48925' 
                             :level === 'GURU'? 'hsl(0deg 79% 62%)'
                             :null
                         }}>
                            {level}
                        </span>
                    
                </div>
                    {/* LEVEL NUMBER AND LEVEL ENDS HERE */}
            </div>
                    <p>
                        {this.state.readMore ? about : about.substring(0,30) + '...'}
                        <button onClick={this.handleReadMore.bind(this)} className="btn btn-link">
                            {this.state.readMore ? 'show less':'read more'}</button>
                    </p>
                    <p style={{background: skill === 'Free' ? '#e4e4eb' : skill === 'Premium' ? '#0000ff': null, color:skill === 'Free' ? 'blue' : skill === 'Premium' ? 'white':null}} className="styleSkill">{skill}</p>
                    </div>
                <button onClick={()=>this.props.onCompleted(id)}>Completed</button>
            </div>
               
                
            </div>
            
        </React.Fragment>
         );
    }
}

export default TourList;