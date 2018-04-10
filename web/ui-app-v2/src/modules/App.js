import React, { Component } from "react";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import { Toast } from "components";
import { addBodyClass, removeBodyClass } from "utils/commons";
import { fetchLocalizationLabel, toggleSnackbarAndSetText } from "redux/app/actions";
import { fetchCities, fetchCitizens, fetchEmployees } from "redux/common/actions";
import Router from "./Router";

class App extends Component {
  constructor(props) {
    super(props);
    const { pathname: currentPath } = props.location;

    props.history.listen((location, action) => {
      const { pathname: nextPath } = location;
      removeBodyClass(currentPath);
      addBodyClass(nextPath);
      props.toggleSnackbarAndSetText(false, "");
    });

    addBodyClass(currentPath);
  }

  componentDidMount() {
    const { fetchLocalizationLabel, fetchCities, locale, fetchCitizens, userInfo } = this.props;
    // can be combined into one mdms call
    fetchLocalizationLabel(localStorage.getItem("locale") || "en_IN");
    fetchCities();
    if (userInfo && userInfo.type === "EMPLOYEE") {
      fetchCitizens({ tenantId: localStorage.getItem("tenant-id"), id: [] });
      fetchEmployees();
    }
  }

  componentWillReceiveProps(nextProps) {
    const { route: nextRoute } = nextProps;
    const { route: currentRoute, history } = this.props;
    if (currentRoute !== nextRoute) {
      history.push(nextRoute);
    }
  }

  render() {
    const { toast } = this.props;
    return (
      <div>
        <Router />
        {toast && toast.open && toast.message.length && <Toast open={toast.open} message={toast.message} error={toast.error} />}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { route, toast } = state.app;
  const { userInfo } = state.auth;
  return { route, toast, userInfo };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchLocalizationLabel: (locale) => dispatch(fetchLocalizationLabel(locale)),
    toggleSnackbarAndSetText: (open, message, error) => dispatch(toggleSnackbarAndSetText(open, message, error)),
    fetchCities: () => dispatch(fetchCities()),
    fetchCitizens: (requestBody) => dispatch(fetchCitizens(requestBody)),
    fetchEmployees: () => dispatch(fetchEmployees()),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
