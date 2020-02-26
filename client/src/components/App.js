import React from 'react';
import { BrowserRouter , Route } from 'react-router-dom';

import Header from './Header';

const Dashboard = () => <h2>Dashboard</h2>
const SurveyNew = () => <h2>SurveyNew</h2>
const Landing = () => <h2>Landing</h2>


// App.js will serve as our component container as normal, and this will get fed into the index.js to be rendered on index.html

// App.js will also serve as our container of all React Router Logic.


const App = (props) => {
    return ( 
        <div className="container">
            <BrowserRouter> 
                <div>
                    <Header />
                    <Route exact path="/" component={Landing} />
                    <Route exact path="/surveys" component={Dashboard} />                     {/* Browser Router can only have one child. Within that child is all our routing logics and components to be rendered */}
                    <Route exact path="/surveys/new" component={SurveyNew} />
                </div>
            </BrowserRouter>
        </div>
    );
}

export default App;