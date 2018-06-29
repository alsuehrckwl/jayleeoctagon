import React, { Component } from 'react';

export default class Auth extends Component {

    render () {
        // let isLogin = !!Cookies.get("token");
        // if (isLogin && !this.state.isLogout) {
        //     // return this.goInbox();
            
        //     return (<Layout/>);
        // } else {
        //         return (<Redirect push to="/login"/>);
        // }
        return (
            <div>
                <h1>Auth</h1>
            </div>
        )
    }
}
