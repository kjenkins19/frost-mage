import React, {Component} from 'react';
import PrimaryMenu from './components/PrimaryMenu/PrimaryMenu';
import MainImage from "./components/MainImage/MainImage";
import Blog from "./components/Blog/Blog";
import Frost from "./components/Frost/Frost";
import './App.css';
import './styles.css';
import {
	BrowserRouter as Router,
	Route
} from 'react-router-dom'
import map from 'lodash/map'


class App extends Component {
	constructor(props) {
		super(props);


		this.state = { blogList: [
			  { 'key': 1, 'title': 'blog 1', 'summary': 'test blog summary 1' },
				{ 'key': 2,'title': 'blog 2', 'summary': 'test blog summary 2' },
				{ 'key': 3,'title': 'blog 3', 'summary': 'test blog summary 3' },
				{ 'key': 4,'title': 'blog 4', 'summary': 'test blog summary 4' }
			] };
	}


	render() {
		const dev = () => (
			<div>
				<h2>dev</h2>
			</div>
		);
		const human = () => (
			<div>
				<h2>human</h2>
			</div>
		);
		const home = () => (
			<div>
				<h2>home</h2>
			</div>
		);


		let page = window.location.pathname.split('/')[1];
		return (
			<Router>
				<div className="App">
					<header>
						<MainImage/>
						<PrimaryMenu currentPage={page}/>
					</header>
					<Route exact path="/" component={home}/>
					<Route path="/dev" component={dev}/>
					<Route path="/frost" component={Frost}/>
					<Route path="/human" component={human}/>

					{map(this.state.blogList, (blog) => {
						return (
							<Blog key={blog.key} title={blog.title} summary={blog.summary}/>
						)
					})}
				</div>
			</Router>
		);
	}
}

export default App;
