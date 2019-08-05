import React from "react";
import { handleScreenConfigurationFieldChange as handleField, toggleSnackbar } from "egov-ui-framework/ui-redux/screen-configuration/actions";
import { getLocaleLabels, getTransformedLocalStorgaeLabels, epochToYmd } from "egov-ui-framework/ui-utils/commons";
import { getTenantId } from "egov-ui-kit/utils/localStorageUtils";
import { getEventsByType } from "../utils";

export const searchApiCall = async (state, dispatch) => {
  const localisationLabels = getTransformedLocalStorgaeLabels();
  const queryObject = [
    {
      key: "tenantId",
      value: getTenantId(),
    },
    { key: "eventTypes", value: "EVENTSONGROUND" },
  ];
  const events = await getEventsByType(queryObject);

  try {
    let data =
      events &&
      events.map((item) => ({
        [getLocaleLabels("Message", "EVENTS_EVENT_NAME_LABEL", localisationLabels)]: item.name,
        [getLocaleLabels("Event Category", "EVENTS_EVENT_CATEGORY_LABEL", localisationLabels)]: "-",
        [getLocaleLabels("Start Date", "EVENTS_START_DATE_LABEL", localisationLabels)]: item.eventDetails
          ? epochToYmd(item.eventDetails.fromDate)
          : "-",
        [getLocaleLabels("End Date", "EVENTS_END_DATE_LABEL", localisationLabels)]: item.eventDetails ? epochToYmd(item.eventDetails.toDate) : "-",
        [getLocaleLabels("Status", "EVENTS_STATUS_LABEL", localisationLabels)]: item.status,
        id: item.id,
        tenantId: item.tenantId,
      }));
    dispatch(handleField("search", "components.div.children.searchResults", "props.data", data));
  } catch (error) {
    dispatch(toggleSnackbar(true, error.message, "error"));
    console.log(error);
  }
};

const onRowClick = (rowData) => {
  window.location.href = `create?edit=true&uuid=${rowData[6]}&tenantId=${rowData[5]}`;
};

export const searchResults = () => {
  const localisationLabels = getTransformedLocalStorgaeLabels();
  return {
    uiFramework: "custom-molecules",
    componentPath: "Table",
    props: {
      columns: [
        getLocaleLabels("Event Name", "EVENTS_EVENT_NAME_LABEL", localisationLabels),
        getLocaleLabels("Event Category", "EVENTS_EVENT_CATEGORY_LABEL", localisationLabels),
        getLocaleLabels("End Date", "EVENTS_END_DATE_LABEL", localisationLabels),
        getLocaleLabels("Start Date", "EVENTS_START_DATE_LABEL", localisationLabels),
        {
          name: getLocaleLabels("Status", "EVENTS_STATUS_LABEL", localisationLabels),
          options: {
            filter: false,
            customBodyRender: (value) => <span style={value === "Active" ? { color: "#4CAF50" } : { color: "#F44336" }}> {value}</span>,
          },
        },
        {
          name: "tenantId",
          options: {
            display: false,
          },
        },
        {
          name: "id",
          options: {
            display: false,
          },
        },
      ],
      title: (
        <span
          style={{
            color: "rgba(0, 0, 0, 0.87)",
            fontWeight: 900,
          }}
        >
          {getLocaleLabels("Created Events", "EVENTS_CREATED_EVENTS_HEADER", localisationLabels)}
        </span>
      ),

      options: {
        filter: true,
        download: false,
        responsive: "stacked",
        selectableRows: false,
        hover: true,
        rowsPerPageOptions: [10, 15, 20],
        onRowClick: (row, index) => {
          onRowClick(row);
        },
      },
    },
  };
};
