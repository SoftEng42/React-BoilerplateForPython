import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { Login, DispatchProps } from './Login';

import { loginRequest } from '../../redux/User/User.actions';
import { LoginRequestAction, Credentials } from '../../redux/User/User.types';

const mapStateToProps = (): {} => ({});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  loginRequest: (credentials: Credentials): LoginRequestAction => dispatch(loginRequest(credentials)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);
