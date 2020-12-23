const {NavLink ,withRouter } = ReactRouterDOM

function _AppHeader (){
    return (
        <div className="navigation-links-header">

            <div className="navigation-links-home"><NavLink exact to="/">Home</NavLink></div>
            <div><NavLink to="/about">About</NavLink></div>
            <div><NavLink to="/mister-email">Email</NavLink></div>
            <div><NavLink to="/miss-keep">Keep</NavLink></div>
        </div>
    )

}


export const AppHeader = withRouter(_AppHeader)