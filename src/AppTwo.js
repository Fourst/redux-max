import React from 'react';
import { connect } from 'react-redux';

function AppTwo(props) {
    const { user, page } = props;
  return (
    <div className="App">
        AppTwo
        name: {user.name}
        surname: {page.year}
        {/*age: {props.user.name}*/}
    </div>
  );
}
const mapStateToProps = store => {
    console.log(store);
    return {
        user: store.user,
        page: store.page,
    }
}
export default connect(mapStateToProps)(AppTwo)