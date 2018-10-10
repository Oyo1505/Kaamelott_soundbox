import React from 'react';

export default class Icon extends React.Component {

	static defaultProps = {
		color : 'gray',
	}

	render() {
		switch( this.props.name){
			case'open':
			return (
				 <svg
			            x="0px"
			            y="0px"
			            width="24px"
			            height="24px"
			           viewBox="0 0 128 128"
       						 >
  					  <circle cx="64" cy="64" r="64" style={{fill: `${this.props.color}`}}></circle>
        		  </svg>
				);
			case'close':
			return (
				 <svg
			            x="0px"
			            y="0px"
			            width="24px"
			            height="24px"
			            viewBox="0 0 31.11 31.11"
			            enableBackground="new 0 0 31.11 31.11"
			          >
			            <polygon
			              fill={this.props.color}
			              points="31.11,1.41 29.7,0 15.56,14.14 1.41,0 0,1.41 14.14,15.56 0,29.7 1.41,31.11 15.56,16.97   29.7,31.11 31.11,29.7 16.97,15.56 "
			            />
        		  </svg>
				);
		}
	}
}
24