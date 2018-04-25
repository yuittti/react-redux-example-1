import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createPost } from '../actions/postActions';

class Postform extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            body: ''
        }

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    onSubmit = event => {
        event.preventDefault();

        const post = {
            title: this.state.title,
            body: this.state.body
        }

        this.props.createPost(post);
    }

    render() {
        return (
            <div>
                <h1>Add Posts</h1>
                <form onSubmit={this.onSubmit}>
                    <div>
                        <label htmlFor="">Title</label><br />
                        <input 
                            type="text" 
                            name="title" 
                            value={this.state.title} 
                            onChange={this.onChange} />
                    </div>

                    <div>
                        <label htmlFor="">Body</label><br />
                        <textarea 
                            name="body" 
                            id="" 
                            cols="30" 
                            rows="10" 
                            value={this.state.body} 
                            onChange={this.onChange} >
                        </textarea>
                    </div>

                    <div>
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}

Postform.propTypes = {
    createPost: PropTypes.func.isRequired
}

export default connect(null, { createPost })(Postform);
