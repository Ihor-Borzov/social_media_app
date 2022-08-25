import React from 'react'
import { connect } from 'react-redux'
import { logoutThunk } from "../../Redux/Auth"
import Header from './Header'



class HeaderContainer extends React.Component {
    componentDidMount = () => {
        //this.props.authenticate();
    }



    render = () => {
        return (
            <Header {...this.props} />
        )
    }

}




let mapStateToProps = (state) => {
    return ({
        isAuth: state.auth.isAuth,
        login: state.auth.login,
    })
}




export default connect(mapStateToProps, { logoutThunk })(HeaderContainer)