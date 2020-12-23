import {util} from '../../../services/util.js'
import {storageService} from '../../../services/storageService.js'


export const MailService = {
    query,
    deleteEmail,
    // addEmail,
}
var KEY = 'emailDB'
var gEmails;
_createEmails()


function query (){
    return gEmails
}

function _createEmails(){
    gEmails = storageService.loadFromStorge(KEY)
    if(!gEmails || !gEmails.length){
        gEmails = _getDemoEmails()
        _saveEmailsToStorage()
    }
}


function _getDemoEmails(){
    const defaultEmails = [

        {
            id: util.makeid(),
            subject:'Ajax updates',
            body:'The slimy bird precisely dodged because some dog passionately killed towards a beautiful dog which, became a professional, lovely boy.',
            isRead: false,
            sentAt:0
        },
        {
            id: util.makeid(),
            subject:'Invite to Vtuber',
            body:'The beautiful teacher sadly died because some bird slowly kicked down a rough bird which, became a dumb, soft plastic.',
            isRead: false,
            sentAt:0
        },
        {
            id: util.makeid(),
            subject:'Shoes on sale!',
            body:'The rough bird sadly breathed because some teacher humbly rolled below a beautiful old lady which, became a dumb, hot plastic.',
            isRead: false,
            sentAt:0
        },


    ]
    return defaultEmails
}


// function addEmail(email){

//     const newEmail = {
//         id : util.makeid(),
//         subject : email.subject,
//         body: email.body
//     }
//     gEmails.unshift(newEmail)
//     return gEmails

// }

function deleteEmail(emailId){
    gEmails = gEmails.filter(email =>{
        return email.id !== emailId
    })
    _saveEmailsToStorage()
    return gEmails
}


function _saveEmailsToStorage(){
    storageService.saveToStorage(KEY,gEmails)
}