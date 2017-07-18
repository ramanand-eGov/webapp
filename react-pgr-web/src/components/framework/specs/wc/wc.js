var dat = {
	"wc.create": {
		"numCols": 3,
		"url": "/connections/v1/_create",
		"groups": [
			{
				"label": "wc.create.groups.applicantDetails.title",
				"name": "applicantDetails",
				"fields": [
						{
							"name": "AssessmentNumber",
							"jsonPath": "connection.property.propertyIdentifier",
							"label": "wc.create.groups.applicantDetails.propertyIdentifier",
							"pattern": "",
							"type": "number",
							"isRequired": true,
							"isDisabled": false,
							"autoCompleteUrl": "",
							"autoFillFields": {
								"NameOfApplicant": "", 
								"MobileNumber": "",
								"Email": "",
								"AadharNumber": ""
							}
						},
						{
							"name": "NameOfApplicant",
							"jsonPath": "connection.asset.nameOfApplicant",
							"label": "wc.create.groups.applicantDetails.nameOfApplicant",
							"pattern": "",
							"type": "text",
							"isRequired": false,
							"isDisabled": true
						},
						{
							"name": "MobileNumber",
							"jsonPath": "connection.asset.mobileNumber",
							"label": "wc.create.groups.applicantDetails.mobileNumber",
							"pattern": "",
							"type": "number",
							"isRequired": false,
							"isDisabled": true
						},
						{
							"name": "Email",
							"jsonPath": "connection.asset.email",
							"label": "wc.create.groups.applicantDetails.email",
							"pattern": "",
							"type": "email",
							"isRequired": false,
							"isDisabled": true
						},
						{
							"name": "AadharNumber",
							"jsonPath": "connection.asset.adharNumber",
							"label": "wc.create.groups.applicantDetails.adharNumber",
							"pattern": "",
							"type": "number",
							"isRequired": false,
							"isDisabled": true
						},
						{
							"name": "Locality",
							"jsonPath": "connection.asset.locality",
							"label": "wc.create.groups.applicantDetails.locality",
							"pattern": "",
							"type": "number",
							"isRequired": false,
							"isDisabled": true
						},
						{
							"name": "Address",
							"jsonPath": "connection.asset.address",
							"label": "wc.create.groups.applicantDetails.address",
							"pattern": "",
							"type": "textarea",
							"isRequired": false,
							"isDisabled": true
						},
						{
							"name": "Zone",
							"jsonPath": "connection.asset.zone",
							"label": "wc.create.groups.applicantDetails.zone",
							"pattern": "",
							"type": "textarea",
							"isRequired": false,
							"isDisabled": true
						},
						{
							"name": "adharNumber",
							"jsonPath": "connection.asset.adharNumber",
							"label": "No of floors",
							"pattern": "",
							"type": "number",
							"isRequired": false,
							"isDisabled": true
						},
						{
							"name": "propertyTaxDue",
							"jsonPath": "connection.property.propertyTaxDue",
							"label": "wc.create.groups.applicantDetails.propertyTaxDue",
							"pattern": "",
							"type": "text",
							"isRequired": false,
							"isDisabled": true
						}
				]
			},
			{
				"label": "wc.create.groups.connectionDetails.title",
				"name": "connectionDetails",
				"fields": [
						{
							"name": "ConnectionType",
							"jsonPath": "connection.connectionType",
							"label": "wc.create.groups.connectionDetails.connectionType",
							"pattern": "",
							"type": "singleValueList",
							"isRequired": true,
							"isDisabled": false,
							"url": ""
						},
						{
							"name": "SourceType",
							"jsonPath": "connection.sourceType",
							"label": "wc.create.groups.connectionDetails.sourceType",
							"pattern": "",
							"type": "singleValueList",
							"isRequired": false,
							"isDisabled": false,
							"url": ""
						},
						{
							"name": "SourceType",
							"jsonPath": "connection.sourceType",
							"label": "wc.create.groups.connectionDetails.sourceType",
							"pattern": "",
							"type": "singleValueList",
							"isRequired": false,
							"isDisabled": false,
							"url": ""
						},
						{
							"name": "PropertyType",
							"jsonPath": "connection.property.propertyType",
							"label": "wc.create.groups.connectionDetails.propertyType",
							"pattern": "",
							"type": "singleValueList",
							"isRequired": false,
							"isDisabled": false,
							"url": ""
						},
						{
							"name": "CategoryType",
							"jsonPath": "connection.categoryType",
							"label": "wc.create.groups.connectionDetails.categoryType",
							"pattern": "",
							"type": "singleValueList",
							"isRequired": false,
							"isDisabled": false,
							"url": ""
						},
						{
							"name": "UsageType",
							"jsonPath": "connection.property.usageType",
							"label": "wc.create.groups.connectionDetails.usageType",
							"pattern": "",
							"type": "singleValueList",
							"isRequired": false,
							"isDisabled": false,
							"url": ""
						},
						{
							"name": "hscPipeSizeType",
							"jsonPath": "connection.hscPipeSizeType",
							"label": "wc.create.groups.connectionDetails.hscPipeSizeType",
							"pattern": "",
							"type": "singleValueList",
							"isRequired": false,
							"isDisabled": false,
							"url": ""
						},
						{
							"name": "sumpCapacity",
							"jsonPath": "connection.sumpCapacity",
							"label": "wc.create.groups.connectionDetails.fields.sumpCapacity",
							"pattern": "",
							"type": "number",
							"isRequired": false,
							"isDisabled": false
						},
						{
							"name": "numberOfPersons",
							"jsonPath": "connection.numberOfPersons",
							"label": "wc.create.groups.connectionDetails.fields.numberOfPersons",
							"pattern": "",
							"type": "number",
							"isRequired": false,
							"isDisabled": false
						}
				]
			},
			{
				"label": "wc.create.groups.approvalDetails.title",
				"name": "approvalDetails",
				"fields": [
						{
							"name": "department",
							"jsonPath": "connection.workflowDetails.department",
							"label": "wc.create.groups.approvalDetails.fields.department",
							"pattern": "",
							"type": "singleValueList",
							"isRequired": false,
							"isDisabled": false,
							"url": ""
						},
						{
							"name": "designation",
							"jsonPath": "connection.workflowDetails.designation",
							"label": "wc.create.groups.approvalDetails.fields.designation",
							"pattern": "",
							"type": "singleValueList",
							"isRequired": false,
							"isDisabled": false
						},
						{
							"name": "approver",
							"jsonPath": "connection.workflowDetails.approver",
							"label": "wc.create.groups.approvalDetails.fields.approver",
							"pattern": "",
							"type": "singleValueList",
							"isRequired": false,
							"isDisabled": false
						},
						{
							"name": "comments",
							"jsonPath": "connection.workflowDetails.comments",
							"label": "wc.create.groups.approvalDetails.fields.comments",
							"pattern": "",
							"type": "textarea",
							"isRequired": false,
							"isDisabled": false
						}
				]
			}
		]
	}
}

export default dat;
