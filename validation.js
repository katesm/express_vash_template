/**
 * Account 
 */

var login = {
    username: {
        notEmpty: true,
        errorMessage: 'Username not supplied'
    },
    password: {
        notEmpty: true,
        // matches: {
        //     options: [/^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/] // pass options to the validator with the options property as an array

        //     // options: [/example/i] // matches also accepts the full expression in the first parameter
        // },
        errorMessage: 'Username or password is incorrect.' // Error message for the parameter
    },

}
module.exports = {
    login: login
}