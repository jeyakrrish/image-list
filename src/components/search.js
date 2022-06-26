import React from 'react';

class SearchBar extends React.Component {

    constructor(props){
        super(props)
        this.state = { event : '' }
        //inspite of using arrow function in on form submit
        //this.onFormSubmit = this.onFormSubmit.bind(this)
    }
    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.onSearchSubmit (this.state.event);
    }

    render() {
        return(
            <div className='ui segment'>
                <form onSubmit={this.onFormSubmit} className='ui form'>
                    <div className='ui field'>
                        <div className='ui massive icon input'>
                            <input 
                            type='text' 
                            placeholder='search'
                            onChange={ (event) => this.setState  ({event:event.target.value}) }   //onClick, onSubmit 
                            value={this.state.event}                            
                            />
                            <i className='search icon'></i>
                        </div>
                    </div>
                </form>
            </div>
        )
        
    }
}

export default SearchBar;