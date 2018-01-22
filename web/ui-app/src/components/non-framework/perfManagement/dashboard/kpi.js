import React, { Component } from 'react';
import Snackbar from 'material-ui/Snackbar';
import { fetchDepartmentAPI, parseDepartmentResponse } from '../apis/apis';
import { translate } from '../../../common/common';

import LoadingIndicator from '../../../common/LoadingIndicator';
import DashboardCard from './dashboardcard';
import KPIQueryDashboard from './dashboardquery';

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apiLoading: false,
      showDepartmentView: true,
      showQueryView: false,
      toastMsg: '',
      department: null,
    };
    this.departments = [];
  }

  render() {
    return (
      <div>
        {this.renderUIBusy()}
        {this.renderDepartments()}
        {this.renderQueryDashboard()}
        {this.renderToast()}
      </div>
    );
  }

  componentDidMount() {
    this.busyUI(true);
    fetchDepartmentAPI((err, res) => {
      this.busyUI(false);
      if (err || !res) {
        this.setState({
          showDepartmentView: true,
        });
        this.toast('unable to fetch departments');
      } else {
        this.departments = res;
        this.setState({
          showDepartmentView: true,
        });
      }
    });
  }

  processOnClickOnCard = index => {
    let departments = parseDepartmentResponse(this.departments);
    this.setState({
      department: departments[index],
      showDepartmentView: false,
      showQueryView: true,
    });
  };

  processOnClickBackButton = () => {
    this.setState({
      showDepartmentView: true,
      showQueryView: false,
    });
  };

  /**
   * helpers
   */
  toast = msg => {
    this.setState({
      showToast: true,
      toastMsg: msg,
    });
  };

  busyUI = status => {
    this.setState({
      apiLoading: status,
    });
  };

  getDepartmentLogo = department => {
    if (department === 'ADMINISTRATION') {
      return require('../../../../images/pms/administration.png');
    }
    if (department === 'ACCOUNTS') {
      return require('../../../../images/pms/accounts.png');
    }
    if (department === 'ENGINEERING') {
      return require('../../../../images/pms/engineering.png');
    }
    if (department === 'TOWNPLANNING') {
      return require('../../../../images/pms/townplanning.png');
    }
    if (department === 'REVENUE') {
      return require('../../../../images/pms/revenue.png');
    }
    if (department === 'PUBLICHEALTHANDSANITATION') {
      return require('../../../../images/pms/publichealthsanitation.png');
    }
    if (department === 'URBANPOVERTYALLEVIATION') {
      return require('../../../../images/pms/urbanpovertyalleviation.png');
    }
    if (department === 'EDUCATION') {
      return require('../../../../images/pms/education.png');
    }

    if (department === 'ASSESSMENTDEPARTMENT') {
      return require('../../../../images/pms/assessmentdepartment.png');
    }
    if (department === 'ASSETDEPARTMENT') {
      return require('../../../../images/pms/assetdepartment.png');
    }
    if (department === 'COMPUTERDEPARTMENT') {
      return require('../../../../images/pms/computerdepartment.png');
    }
    if (department === 'CFC') {
      return require('../../../../images/pms/CFC.png');
    }
    if (department === 'LEGALSERVICESDEPARTMENT') {
      return require('../../../../images/pms/legalservicesdepartment.png');
    }
    if (department === 'ESTABLISHMENTDEPARTMENT') {
      return require('../../../../images/pms/establishmentdepartment.png');
    }
    if (department === 'ELECTIONDEPARTMENT') {
      return require('../../../../images/pms/electiondepartment.png');
    }
    if (department === 'FIREBRIGADEDEPARTMENT') {
      return require('../../../../images/pms/firebrigadedepartment.png');
    }
    if (department === 'GENERALADMINISTRATIONDEPARTMENT') {
      return require('../../../../images/pms/generaladministrationdepartment.png');
    }
    if (department === 'HEALTHDEPARTMENT') {
      return require('../../../../images/pms/healthdepartment.png');
    }
    if (department === 'LICENSEDEPARTMENT') {
      return require('../../../../images/pms/licensedepartment.png');
    }
    if (department === 'LIGHTDEPARTMENT') {
      return require('../../../../images/pms/lightdepartment.png');
    }
    if (department === 'MARKETLICENSEDEPARTMENT') {
      return require('../../../../images/pms/marketlicensedepartment.png');
    }
    if (department === 'MARRIAGEREGISTRATIONDEPARTMENT') {
      return require('../../../../images/pms/marriageregistrationdepartment.png');
    }
    if (department === 'OFFICESUPRIDENTDEPARTMET') {
      return require('../../../../images/pms/CFC.png');
    }
    if (department === 'RECORDDEPARTMENT') {
      return require('../../../../images/pms/recorddepartment.png');
    }
    if (department === 'STOREDEPARTMENT') {
      return require('../../../../images/pms/storedepartment.png');
    }
    if (department === 'SUVARNAJAYANTISHAHARIROJGARYOJANA') {
      return require('../../../../images/pms/suvarnajayantishaharirojgaryojana.png');
    }
    if (department === 'INWARDOUTWARDDEPARTMENT') {
      return require('../../../../images/pms/inwardoutwarddepartment.png');
    }
    if (department === 'WATERDEPARTMENT') {
      return require('../../../../images/pms/waterdepartment.png');
    }

    return require('../../../../images/pms/kpi-default.png');
  };

  /**
   * render
   * show/hide UI busy
   */
  renderUIBusy = () => {
    return this.state.apiLoading ? <LoadingIndicator status={'loading'} /> : <LoadingIndicator status={'hide'} />;
  };

  /**
   * render
   * present card as per departments
   */
  renderDepartments = () => {
    if (!this.state.showDepartmentView) {
      return <div />;
    }

    let departments = parseDepartmentResponse(this.departments);
    if (departments.length > 0) {
      return departments.map((item, index) => (
        <DashboardCard key={index} index={index} onClick={this.processOnClickOnCard} name={item.name} logo={this.getDepartmentLogo(item.name.toUpperCase().replace(/ /g,''))} />
      ));
    }
  };

  /**
   * render
   * present query view and hide department view
   */
  renderQueryDashboard = () => {
    if (!this.state.showQueryView) {
      return <div />;
    }
    return <KPIQueryDashboard department={this.state.department} onBackClicked={this.processOnClickBackButton} />;
  };

  /**
   * render
   * display Snackbar to inform user
   */
  renderToast = () => {
    if (!this.state.showToast) {
      return <div />;
    }
    return (
      <Snackbar
        open={this.state.showToast}
        message={this.state.toastMsg}
        autoHideDuration={3000}
        onRequestClose={() => {
          this.setState({
            showToast: false,
          });
        }}
      />
    );
  };
}
