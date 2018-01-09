import React, {Component} from 'react';
import './Blog.css';

class Blog extends Component {
	render() {
		// console.log(this.props);
		// console.log(window.location);
		return (
			<div className="blog">
				<h2>Blog Title</h2>
				<p>Lorem Impsum</p>
			</div>
		);
	}
}

export default Blog;
