import React, {Component} from 'react';
import Layout from "./hoc/Layout/Layout";
import Quiz from "./containers/Quiz/Quiz";
import {Redirect, Route, Switch} from 'react-router-dom';
import QuizList from "./containers/QuizList/QuizList";
import QuizCreator from "./containers/QuizCreator/QuizCreator";
import Auth from "./containers/Auth/Auth";
import {connect} from "react-redux";
import Logout from "./components/Logout/Logout";
import {autologin} from "./store/actions/auth";

class App extends Component {
    componentDidMount() {
        this.props.autologin();
    }

    render() {
        let routes = (
            <Switch>
                <Route path="/auth" component={Auth}/>
                <Route path="/quiz/:id" component={Quiz}/>
                <Route path="/" exact component={QuizList}/>
                <Redirect to={'/'}/>
            </Switch>
        );
        if (this.props.isAuthenticated) {
            routes = (
                <Switch>
                    <Route path="/logout" component={Logout}/>
                    <Route path="/quiz-creator" component={QuizCreator}/>
                    <Route path="/quiz/:id" component={Quiz}/>
                    <Route path="/" exact component={QuizList}/>
                    <Redirect to={'/'}/>
                </Switch>
            );
        }
        return (
            <Layout>
                {routes}
            </Layout>
        );
    }
}

function mapStateToProps(state) {
    return {
        isAuthenticated: !!state.auth.token
    }
}

function mapDispatchToProps(dispatch) {
    return {
        autologin: () => dispatch(autologin())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
