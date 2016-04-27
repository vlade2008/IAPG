import React from 'react';

export default  class TodoItem extends React.Component{
	constructor(props){
		super(props);
	}    

	static propTypes={
		description: React.PropTypes.string.isRequired,
    	index: React.PropTypes.number.isRequired,
    	removeMe: React.PropTypes.func.isRequired
	};

	onclick=()=>{
		if (this.props.removeMe)
			this.props.removeMe(this.props.index);
		
	};

	render(){
		return(
			<div className="card">
				<span className="description">
					{this.props.description}
					asdsad
					<span className="closeButton" onClick={this.onclick}>x</span>
				</span>
			</div>
			);
	}
}
