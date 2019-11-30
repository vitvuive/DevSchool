import { connect } from "react-redux";
import { selectors, actions } from "../../stores";
import LoginScreen from "./LoginScreen";

const mapStateToProps = state => ({
  isLoading: selectors.user.getAuthLoadingStatus(state)
});
const mapDispatchToProps = dispatch => ({
  onPress: () => dispatch(actions.user.loginWithFb()),
  login: (username, password) =>
    dispatch(actions.user.login({ username, password })),
  register: (username, password) =>
    dispatch(actions.user.register({ username, password }))
});
export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
