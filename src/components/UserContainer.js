import React, { Component } from 'react'
import { connect } from 'react-redux'
import { User } from './User'
import { Page } from './Page'
import { setYear } from '../actions/PageActions'


class UserContainer extends Component {

    render() {
        const { user, page ,setYearAction } = this.props;
        return (
            <div className="App">
                <User name={user.name} />
                <Page photo={page.photo} year={page.year} setYear={setYearAction}/>
            </div>
        )
    }
}

const mapStateToProps = store => {
    return {
        user: store.user,
        page: store.page,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        setYearAction: year => dispatch(setYear(year)),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(UserContainer)