import React, {Component} from 'react';
import PrimaryMenu from './components/PrimaryMenu/PrimaryMenu';
import MainImage from "./components/MainImage/MainImage";
import Blog from "./components/Blog/Blog";
import Frost from "./components/Frost/Frost";
import './App.css';
import './styles.css';
import {
	BrowserRouter as Router,
	Route,
	Link
} from 'react-router-dom'


class App extends Component {


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


		let page = window.location.pathname.split('/')[1];
		console.log(window.location);
		return (
			<Router>
				<div className="App">
					<header>
						<MainImage/>
						<PrimaryMenu currentPage={page}/>
					</header>
					{/*<Route exact path="/" component={Home}/>*/}
					<Route path="/dev" component={dev}/>
					<Route path="/frost" component={Frost}/>
					<Route path="/human" component={human}/>
					<Blog/>
					<Blog/>
					<Blog/>
					<Blog/>
					<Blog/>
					<Blog/>
				</div>
			</Router>
		);
	}
}

export default App;
