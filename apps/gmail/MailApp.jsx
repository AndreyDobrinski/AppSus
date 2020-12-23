import { AppHeader } from '../../cmps/App-header.jsx'
import { MailService } from '../gmail/services/mail-service.js'
import { EmailList } from '../gmail/cmps/Email-list.jsx'


export class MailApp extends React.Component {

    state = {
        emails:[],
        filterBy:{
            title:''
        },

    }

    /// INIT
    componentDidMount(){
        this.loadEmail()

    }

    loadEmail = () =>{
        const emails = MailService.query()
        this.setState({
            emails
        })
        // console.log(emails);
    }


    getEmailsForDisplay = () =>{
        const {filterBy} = this.state
        return this.state.emails.filter((email) =>{
            return email.title.toLowerCase().includes(filterBy.title.toLowerCase())
        })

    }




    render() {
        return (
            <section>

                <AppHeader />
                MailApp
                <section>
                    <EmailList emails={this.getEmailsForDisplay()}/>


                </section>

            </section>
        )
    }
}

