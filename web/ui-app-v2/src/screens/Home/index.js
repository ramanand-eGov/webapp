import React, { Component } from "react";
import HeaderWithDrawer from "./components/HeaderWithDrawer";
import Banner from "./components/Banner";
import NewAndOldComplaints from "./components/NewAndOldComplaints";
import Updates from "./components/Updates";
import Notifications from "./components/Notifications";
import Events from "./components/Events";
import BottomNavigation from "../../components/BottomNavigation";

import FontIcon from "material-ui/FontIcon";
import IconLocationOn from "material-ui/svg-icons/communication/location-on";
import "./index.css";

//Complaint Submitted
import ActionHome from "material-ui/svg-icons/action/home";
import Info from "material-ui/svg-icons/action/info";
import Complaint from "material-ui/svg-icons/alert/warning";
import SvgIcon from "material-ui/SvgIcon";

// temporta
const Rupee = props => (
  <SvgIcon {...props}>
    <path d="M358.204,96.283h-33.437c-2.211-19.379-8.961-37.519-19.672-51.56h53.108c12.721,0,23.022-9.499,23.022-22.216   c0-12.723-10.302-22.484-23.022-22.484H178.118c-0.659,0-1.294-0.023-1.971-0.023c-0.438,0-0.877,0.023-1.315,0.023H88.981   c-12.72,0-23.022,9.768-23.022,22.484s10.302,22.216,23.022,22.216h102.097c32.243,2.347,66.017,14.821,74.913,51.56H88.981   c-12.72,0-23.022,10.309-23.022,23.031c0,12.717,10.302,23.031,23.022,23.031h174.716c-10.87,29.034-40.728,46.742-82.225,46.742   h-45.788h-0.133h-26.699c-12.401,0-22.455,10.054-22.455,22.455c0,12.404,10.054,22.458,22.455,22.458h26.382   c0.109,0.012,0.207,0.065,0.316,0.065h41.665c45.268,1.72,65.402,21.35,76.946,75.055c9.032,39.892,15.682,65.875,20.912,81.438   c3.919,14.398,11.674,36.091,25.127,49.048c5.261,5.059,12.046,7.577,18.808,7.577c7.117,0,14.233-2.784,19.559-8.322   c9.76-10.144,9.937-25.842,0.993-36.334c-0.041-0.124-0.023-0.26-0.088-0.384c-8.258-15.32-18.247-56.412-30.435-108.533   c-9.688-42.381-27.787-68.778-55.213-80.499c34.437-13.22,58.127-38.506,67.412-70.772h36.966   c12.721,0,23.022-10.314,23.022-23.031S370.925,96.283,358.204,96.283z" />
  </SvgIcon>
);

const options = [
  {
    label: "Home",
    icon: <ActionHome />,
    route: "/",
  },
  {
    label: "Information",
    icon: <Info />,
    route: "/information",
  },
  {
    label: "Payments",
    icon: <Rupee />,
    route: "/payments",
  },
  {
    label: "Complaints",
    icon: <Complaint />,
    route: "/complaints",
  },
];

class Home extends Component {
  state = {
    toggleMenu: false,
    tabIndex: 0,
  };

  _handleToggleMenu = () => {
    let { toggleMenu } = this.state;
    toggleMenu = !toggleMenu;
    this.setState({
      toggleMenu,
    });
  };

  _updateMenuState = status => {
    this.setState({
      toggleMenu: status,
    });
  };

  _onTabChange = tabIndex => {
    this.setState({
      tabIndex,
    });
  };

  render() {
    let { toggleMenu, banner, updates, events, tabIndex } = this.state;
    let { _handleToggleMenu, _updateMenuState, _onTabChange } = this;
    return (
      <div>
        <HeaderWithDrawer toggleMenu={toggleMenu} onHandleToggleMenu={_handleToggleMenu} onUpdateMenuStatus={_updateMenuState} />
        <Banner {...banner} />
        <div className="contentLeftAndRightPadding">
          <NewAndOldComplaints />
          <Updates {...Updates} />
          <Notifications />
          <Events {...events} />
        </div>
        <BottomNavigation selectedIndex={tabIndex} options={options} handleChange={_onTabChange} />
      </div>
    );
  }
}

export default Home;
