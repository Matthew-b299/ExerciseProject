import React, {Component} from 'react';

let dStyles = {
    width: '500 px',
    maxWidth:'100%',
    margin: '0 auto',
    position:'fixed',
    left: '50%',
    top:'70%',
    transform: 'translate(-50%,-50%)',
    zIndex:'999',
    backgroundColor: '#eee',
    padding: '10px 26px 40px',
    borderRadius: '8px',
    display: 'flex',
    flexDirection: 'column'


};

class Dialog extends Component {
    render ()
    {
        return (
            <div style = {dStyles} >
               {this.props.children}
            </div>
        )
    }
}

export default Dialog;