import {Home} from './pages/Home.jsx'
import {About} from './pages/About.jsx'




const Router = ReactRouterDOM.HashRouter;
const { Route, Switch } = ReactRouterDOM;

// Simple React Component
export function App() {
    
    return (
<Router>

    <section className="app">

        <Switch>
            <Route path="/about" component={About} />
            <Route path="/" component={Home} />
        </Switch>






    </section>

</Router>
    )
}












