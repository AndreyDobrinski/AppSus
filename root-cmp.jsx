import {Home} from './pages/Home.jsx'
import {About} from './pages/About.jsx'
import {MailApp} from './apps/gmail/MailApp.jsx'
import {KeepApp} from './apps/keep/KeepApp.jsx'




const Router = ReactRouterDOM.HashRouter;
const { Route, Switch } = ReactRouterDOM;

// Simple React Component
export function App() {
    
    return (
<Router>

    <section className="app">

        <Switch>
            <Route path="/mister-email" component={MailApp} />
            <Route path="/miss-keep" component={KeepApp} />
            <Route path="/about" component={About} />
            <Route path="/" component={Home} />
        </Switch>






    </section>

</Router>
    )
}












