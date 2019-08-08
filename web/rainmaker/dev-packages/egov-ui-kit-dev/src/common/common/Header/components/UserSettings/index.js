import { DropDown, Icon, Image, List } from "components";
import { getTransformedLocale, getLocaleLabels } from "egov-ui-framework/ui-utils/commons";
import emptyFace from "egov-ui-kit/assets/images/download.png";
import { getLocale, getTenantId, setTenantId } from "egov-ui-kit/utils/localStorageUtils";
import get from "lodash/get";
import React, { Component } from "react";
import { connect } from "react-redux";
import { CommonMenuItems } from "../NavigationDrawer/commonMenuItems";
import { setRoute } from "egov-ui-framework/ui-redux/app/actions";
import "./index.css";

class UserSettings extends Component {
  state = {
    languageSelected: getLocale(),
    displayAccInfo: false,
    tenantSelected: getTenantId(),
  };
  style = {
    baseStyle: {
      background: "#ffffff",
      height: "65px",
      marginRight: "30px",
      width: "98px",
      marginBottom: "24px",
    },
    label: {
      color: "#5F5C57",
      fontSize: "12px",
      paddingRight: "0px",
    },
    arrowIconStyle: {
      marginTop: "7px",
      marginLeft: "10px",
    },
    iconStyle: {
      marginRight: "30px",
    },
    listStyle: {
      display: "block",
    },
    listInnerDivStyle: {
      padding: "10px",
      display: "flex",
      alignItems: "center",
    },
    baseTenantStyle: {
      background: "#ffffff",
      height: "65px",
      marginRight: "30px",
      width: "120px",
      marginBottom: "24px",
    },
  };

  onChange = (event, index, value) => {
    this.setState({ ...this.state, languageSelected: value });
    this.props.fetchLocalizationLabel(value);
  };

  onTenantChange = (event, index, value) => {
    this.setState({ ...this.state, tenantSelected: value });
    setTenantId(value);
    this.props.setRoute("/");
  };

  toggleAccInfo() {
    this.setState({
      displayAccInfo: !this.state.displayAccInfo,
    });
  }

  render() {
    const { languageSelected, displayAccInfo, tenantSelected } = this.state;
    const { style } = this;
    const { onIconClick, userInfo, handleItemClick, hasLocalisation, languages, fetchLocalizationLabel } = this.props;

    /**
     * Get All tenant id's from (user info -> roles) to populate dropdown
     */
    let tenantIdsList = get(userInfo, "roles", []).map((role) => {
      return role.tenantId;
    });
    tenantIdsList = [...new Set(tenantIdsList)];
    tenantIdsList = tenantIdsList.map((tenantId) => {
      return { value: tenantId, label: getLocaleLabels(tenantId, "TENANT_TENANTS_" + getTransformedLocale(tenantId)) };
    });

    return (
      <div className="userSettingsContainer">
        <DropDown
          onChange={this.onTenantChange}
          listStyle={style.listStyle}
          style={style.baseTenantStyle}
          labelStyle={style.label}
          dropDownData={tenantIdsList}
          value={tenantSelected}
          underlineStyle={{ borderBottom: "none" }}
        />
        {hasLocalisation && (
          <DropDown
            onChange={this.onChange}
            listStyle={style.listStyle}
            style={style.baseStyle}
            labelStyle={style.label}
            dropDownData={languages}
            value={languageSelected}
            underlineStyle={{ borderBottom: "none" }}
          />
        )}
        {/* <Icon action="social" name="notifications" color="#767676" style={style.iconStyle} /> */}
        <div
          onClick={() => {
            this.toggleAccInfo();
          }}
          className="userSettingsInnerContainer"
        >
          <Image width={"33px"} circular={true} source={userInfo.photo || emptyFace} />
          <Icon action="navigation" name="arrow-drop-down" color="#767676" style={style.arrowIconStyle} />

          <div className="user-acc-info">
            {displayAccInfo ? (
              <List
                onItemClick={(item) => {
                  handleItemClick(item, false);
                }}
                innerDivStyle={style.listInnerDivStyle}
                className="drawer-list-style"
                items={CommonMenuItems}
                listContainerStyle={{ background: "#ffffff" }}
                listItemStyle={{ borderBottom: "1px solid #e0e0e0" }}
              />
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ common }) => {
  const { stateInfoById } = common;
  let languages = get(stateInfoById, "0.languages", []);
  return { languages };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setRoute: (route) => dispatch(setRoute(route)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserSettings);
