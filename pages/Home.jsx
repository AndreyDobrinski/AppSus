import {AppHeader} from '../cmps/App-header.jsx'

export class Home extends React.Component {

    render(){
        return(
            <section>
                <AppHeader/>
                <h1 className="app-header-home">Home</h1>
            </section>
        )
    }

}