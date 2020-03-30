import React, {Component} from 'react';

class Testimonial extends Component {
    render() {
        return (
            <div>
                <p>Taken: {this.props.item.node.termSzn} {this.props.item.node.year}</p>
                <p>Professors: {this.props.item.node.prof}</p>
                <p>{this.props.item.node.description}</p>
                <hr/>
            </div>
        );
    }
}

export default Testimonial;