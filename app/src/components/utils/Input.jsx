  import React from 'react';

export default class Input extends React.Component{
  constructor(props) {
    super(props);
    this.state = { className: '', message: '' }
  }
  onBlur(value) {
    if(typeof this.props.validationFunction == 'function') {
      if(!this.props.validationFunction(value)) {
        this.setState({message: this.props.validationMessage});
      } else {
        this.setState({message: ''})
      }
    }

  }
  render() {
    let message = this.state.message;

    return(
      <div className="form-group">
        <label>{this.props.label}</label>
        <input type={this.props.type ? this.props.type : "text"}
          value={this.props.value}
          onChange={this.props.onChange}
          className={'form-control'}
          onBlur={(e) => { this.onBlur(e.target.value); }}

        />
        <span style={{color: 'red'}}>{message}</span>
      </div>
    )


  }
}