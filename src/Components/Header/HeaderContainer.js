import React from 'react'
import { connect } from 'react-redux'
import { logoutThunk } from "../../Redux/Auth"
import { openCloseHamburgerMenuAC } from "../../Redux/header-reducer"
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
        onOffBurgerMenu: state.header.hamburgerMenu
    })
}




export default connect(mapStateToProps, { logoutThunk, openCloseHamburgerMenuAC })(HeaderContainer)