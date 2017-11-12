import React from 'react';

export default class AddNewTask extends React.Component {
    constructor(){
        super();
        this.justSubmittted = this.justSubmittted.bind(this);
    }
    justSubmittted(event){
          event.preventDefault();
          var text = event.target.querySelector('input');
          var value = text.value;
          text.value = '';
          this.props.updateList(value);// callback

    }
    render(){
        return(
            <form onSubmit={this.justSubmittted}>
                <input type="text" />
            </form>
         );
    }
}