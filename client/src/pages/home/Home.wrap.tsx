import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { Home, DispatchProps } from './Home';

import { logout } from '../../redux/User/User.actions';

const mapStateToProps = (): {} => ({});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  logout: () => dispatch(logout()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
