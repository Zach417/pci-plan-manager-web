var React = require('react');
var ReactDOM = require('react-dom');

var Router = require('react-router').Router;
var Route = require('react-router').Route;
var browserHistory = require('react-router').browserHistory;
var IndexRoute = require('react-router').IndexRoute;

var Header = require('./components/Header.Anonymous/Index.jsx');
var Footer = require('./components/Footer/Index.jsx');
var Home = require('./components/Home.Anonymous/Index.jsx');
var LoginPage = require('./components/Login/Page.jsx');
var RegisterPage = require('./components/Register/Page.jsx');

function scrollToTop () {
    window.scrollTo(0, 0);
}

var App = React.createClass({
	render: function () {
		return (
			<div style={{height:"100%"}}>
                <Header />
				{this.props.children}
				<Footer />
			</div>
		)
	}
});

var Routes = (
	 <Route path="/" component={App}>
    	<IndexRoute component={Home} />
        <Route path="login" component={LoginPage} />
        <Route path="register" component={RegisterPage} />
        <Route path="*" component={LoginPage} />
    </Route>
);

ReactDOM.render(
 	<Router onUpdate={scrollToTop} history={browserHistory} routes={Routes} />,
	document.getElementById("container")
);