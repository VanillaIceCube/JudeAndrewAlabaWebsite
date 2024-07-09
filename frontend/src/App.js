import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
    return (
        <Router>
            <Switch>
                {/* Define your routes */}
                <Route exact path="/" component={YourComponent} />
                <Route path="/your-other-path" component={YourOtherComponent} />
                
                {/* This Route will not render anything, it will just redirect to the Django admin URL */}
                <Route path="/admin" component={() => {
                    window.location.href = "/admin";
                    return null;
                }} />

                {/* Catch-all route */}
                <Route component={YourComponent} />
            </Switch>
        </Router>
    );
}

export default App;
