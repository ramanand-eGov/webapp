var dat ={
'swm.search': {
    numCols: 4,
    useTimestamp: true,
    objectName: 'paymentDetails',
    title: 'swm.paymentvendor.search.title',
    url: '/swm-services/paymentdetails/_search',
    groups: [
    {
        fields:[
        {
            name : 'paymentNumber',
            label : 'swm.paymentvendor.create.paymentNumber',
            jsonPath: "",
            type : 'text',
            isRequired: false,
            isDisabled: false,
            defaultValue:'',
            url :'',
            patternErrorMsg: '',
        },
        {
            name: 'voucherNumber', 
            label: 'swm.paymentvendor.create.VoucherNumber',
            type: 'text',
            jsonPath: "",
            isRequired: false,
            isDisabled: false,
            patternErrorMsg: '',
          },
          {
            name: 'instrumentNumber',
            label: 'swm.paymentvendor.create.InstrumentNumber',
            type: 'text',
            jsonPath: "",
            isRequired: false,
            isDisabled: false,
            patternErrorMsg: '',
          },
          {
            name: 'fromDate',
            label: 'swm.paymentvendor.create.FromDate',
            type: 'datePicker',
            jsonPath: "",
            isRequired: false,
            isDisabled: false, 
            patternErrorMsg: '',
          },
          {
            name: 'toDate',
            label: 'swm.paymentvendor.create.ToDate',
            type: 'datePicker',
            jsonPath: "",
            isRequired: false,
            isDisabled: false, 
            patternErrorMsg: '',
          },
      ],  
    },
    ],
    result: {
      header: [
        {
          label: 'swm.paymentvendor.create.VoucherNumber',
        },
        {
          label: 'swm.paymentvendor.create.VoucherDate',
          isDate:true
        },
        {
            label: 'swm.paymentvendor.create.InstrumentNumber',
        },
        {
            label: 'swm.paymentvendor.create.InstrumentDate',
            isDate:true
        },
        {
            label: 'swm.paymentvendor.create.AmountPaid',
        },
      ],
      values: [
        'voucherNumber',
        'voucherDate',
        'instrumentNumber',
        'instrumentDate',
        'amount'
      ],
      resultPath: 'paymentDetails',
      rowClickUrlUpdate: '/update/swm/paymentvendor/{code}',
      rowClickUrlView: '/view/swm/paymentvendor/{code}',
    },
},
'swm.view': {
    numCols: 3,
    useTimestamp: true,
    objectName: 'paymentDetails',
    title: 'swm.paymentvendor.create.title',
    groups:[
      {
        name: 'vendorPayment',
        label: '',
        fields: [
          {
            name: 'vendorName',
            jsonPath: 'vendorNo',
            label: 'swm.vendorpayment.create.vendorName',
            type: 'singleValueList',
            isRequired: true,
            isDisabled: false,
            patternErrorMsg: '',
            url: 'swm-services/vendors/_search?|$.vendors.*.vendorNo|$.vendors.*.name',
            depedants: [
              {
                jsonPath: 'vendorPaymentDetails[0].vendorContract.contractNo',
                type: 'dropDown',
                pattern:
                  "swm-services/vendorcontracts/_search?&vendorNo={vendorNo}|$.vendorContracts.*.contractNo|$.vendorContracts.*.contractNo",
              }
            ]
          },
          {
            name: 'contractno',
            jsonPath: 'vendorPaymentDetails[0].vendorContract.contractNo',
            label: 'swm.vendorpayment.create.contractno',
            type: 'singleValueList',
            isRequired: false,
            isDisabled: false,
            patternErrorMsg: '',
            url: 'swm-services/vendorcontracts/_search?|$.vendorContracts.*.contractNo|$.vendorContracts.*.contractNo',
            autoCompleteDependancy: {
              autoCompleteUrl: '/swm-services/vendorpaymentdetails/_search?paymentNo={paymentDetails[0].vendorPaymentDetails.paymentNo}',
              autoFillFields: {
                'vendorPaymentDetails[0].approvalAmmount': 'vendorPaymentDetails[0].vendorContract.contractNo',
              },
            },
          },
          {
            name: 'InvoiceNumber',
            label: 'swm.paymentvendor.create.InvoiceNumber',
            type: 'text',
            jsonPath: "paymentDetails[0].invoiceNumber",
            isRequired: false,
            isDisabled: false, 
            patternErrorMsg: '',
          }
        ],
      },
    {
        fields:[
        {
            name : 'TransactionNumber',
            label : 'swm.paymentvendor.create.TransactionNumber',
            jsonPath: "paymentDetails[0].vendorPaymentDetails.paymentNo",
            type : 'text',
            isRequired: true,
            isDisabled: false,
            defaultValue:'Autocomplete',
            url :'',
            patternErrorMsg: '',
        },
        {
            name: 'ContractNumber',
            label: 'swm.paymentvendor.create.ContractNumber',
            jsonPath: "paymentDetails[0].vendorPaymentDetails.vendorContract.contractNo",
            type: 'text',
            isRequired: false,
            isDisabled: false,
            patternErrorMsg: '',
            
          },
          {
            name: 'VendorName', 
            label: 'swm.paymentvendor.create.VendorName',
            type: 'text',
            jsonPath: "paymentDetails[0].vendorPaymentDetails.vendorContract.vendor.name",
            isRequired: false,
            isDisabled: false,
            patternErrorMsg: '',
            
          },
          {
            name: 'InvoiceAmount',
            label: 'swm.paymentvendor.create.InvoiceAmount',
            type: 'number',
            jsonPath: "paymentDetails[0].vendorPaymentDetails.vendorInvoiceAmount",
            isRequired: false,
            isDisabled: false,
            patternErrorMsg: '',
          },
           {
            name: 'InvoiceNumber',
            label: 'swm.paymentvendor.create.InvoiceNumber',
            type: 'text',
            jsonPath: "paymentDetails[0].vendorPaymentDetails.invoiceNo",
            isRequired: false,
            isDisabled: false,
            patternErrorMsg: '',
          },
          {
            name: 'FromDate',
            label: 'swm.paymentvendor.create.FromDate',
            type: 'datePicker',
            jsonPath: "paymentDetails[0].vendorPaymentDetails.fromDate",
            isRequired: false,
            isDisabled: false,
            patternErrorMsg: '',
          },
          {
            name: 'ToDate',
            label: 'swm.paymentvendor.create.ToDate',
            type: 'datePicker',
            jsonPath: "paymentDetails[0].vendorPaymentDetails.toDate",
            isRequired: false,
            isDisabled: false,
            patternErrorMsg: '',
          },
          
        ],  
    },
    {
        name: 'PaymentDeatails',
        label: 'swm.paymentvendor.create.PaymentDeatails',
        fields: [
        {
            name: 'VoucherNumber',
            jsonPath: 'paymentDetails[0].voucherNumber',
            label: 'swm.paymentvendor.create.VoucherNumber',
            pattern: '',
            type: 'text',
            isRequired: false,
            isDisabled: false,
            patternErrorMsg: '',
            url: '',
          },
          {
            name: 'VoucherDate',
            jsonPath: 'paymentDetails[0].voucherDate',
            label: 'swm.paymentvendor.create.VoucherDate',
            pattern: '',
            type: 'datePicker',
            isRequired: false,
            isDisabled: false,
            patternErrorMsg: '',
            url: '',
          },
          {
            name: 'AmountPaid',
            jsonPath: 'paymentDetails[0].amount',
            label: 'swm.paymentvendor.create.AmountPaid',
            pattern: '',
            type: 'number',
            isRequired: false,
            isDisabled: false,
            patternErrorMsg: '',
            url: '',
          },
          {
            name: 'PaymentInstrument',
            jsonPath: 'paymentDetails[0].instrumentType',
            label: 'swm.paymentvendor.create.PaymentInstrument',
            pattern: '',
            type: 'singleValueList',
            isRequired: false,
            isDisabled: false,
            patternErrorMsg: '',
            url: '',
            defaultValue: [
              {
                key: 'Cash',
                value: 'Cash',
              },
              {
                key: 'Cheque',
                value: 'Cheque',
              },
              {
                key: 'DD',
                value: 'DD',
              },
            ],
          },
           {
            name: 'InstrumentNumber',
            jsonPath: 'paymentDetails[0].instrumentNumber',
            label: 'swm.paymentvendor.create.InstrumentNumber',
            pattern: '',
            type: 'text',
            isRequired: false,
            isDisabled: false,
            patternErrorMsg: '',
            url: '',
          },
          {
            name: 'InstrumentDate',
            jsonPath: 'paymentDetails[0].instrumentDate',
            label: 'swm.paymentvendor.create.InstrumentDate',
            pattern: '',
            type: 'datePicker',
            isRequired: false,
            isDisabled: false,
            patternErrorMsg: '',
            url: '',
          },
          {
            name: 'BankName',
            jsonPath: 'paymentDetails[0].bankName',
            label: 'swm.paymentvendor.create.BankName',
            pattern: '',
            type: 'text',
            isRequired: false,
            isDisabled: false,
            patternErrorMsg: '',
            url: '',
          },
          {
            name: 'BranchName',
            jsonPath: 'paymentDetails[0].branchName',
            label: 'swm.paymentvendor.create.BranchName',
            pattern: '',
            type: 'text',
            isRequired: false,
            isDisabled: false,
            patternErrorMsg: '',
            url: '',
          },
          ],
      },
    ], 
    tenantIdRequired: true,
    url: '/swm-services/paymentdetails/_search?code={code}',
},
'swm.create': {
    numCols: 3,
    useTimestamp: true,
    objectName: 'paymentDetails',
    title: 'swm.paymentvendor.create.title',
    groups:[
      {
        name: 'vendorPayment',
        label: '',
        fields: [
          {
            name: 'vendorName',
            jsonPath: 'vendorNo',
            label: 'swm.vendorpayment.create.vendorName',
            type: 'singleValueList',
            isRequired: true,
            isDisabled: false,
            patternErrorMsg: '',
            url: 'swm-services/vendors/_search?|$.vendors.*.vendorNo|$.vendors.*.name',
            depedants: [
              {
                jsonPath: 'vendorPaymentDetails[0].vendorContract.contractNo',
                type: 'dropDown',
                pattern:
                  "swm-services/vendorcontracts/_search?&vendorNo={vendorNo}|$.vendorContracts.*.contractNo|$.vendorContracts.*.contractNo",
              }
            ]
          },
          {
            name: 'contractno',
            jsonPath: 'vendorPaymentDetails[0].vendorContract.contractNo',
            label: 'swm.vendorpayment.create.contractno',
            type: 'singleValueList',
            isRequired: false,
            isDisabled: false,
            patternErrorMsg: '',
            depedants: [
              {
                jsonPath: 'paymentDetails[0].vendorPaymentDetails.paymentNo',
                type: 'dropDown',
                pattern:
                  "swm-services/vendorpaymentdetails/_search?&contractNo={vendorPaymentDetails[0].vendorContract.contractNo}|$.vendorPaymentDetails.*.paymentNo|$.vendorPaymentDetails.*.paymentNo",
              }
            ],
          },
             {
            name : 'TransactionNumber',
            label : 'swm.paymentvendor.create.InvoiceNumber',
            jsonPath: "paymentDetails[0].vendorPaymentDetails.paymentNo",
            type : 'singleValueList',
            isRequired: true,
            isDisabled: false,
            defaultValue:'',
            patternErrorMsg: '',
            depedants: [
              {
                jsonPath: 'paymentDetails[0].invoiceAmount',
                type: 'autoFill',
                pattern: '/swm-services/vendorpaymentdetails/_search?paymentNo={paymentDetails[0].vendorPaymentDetails.paymentNo}',
                autoFillFields: {
                  'paymentDetails[0].invoiceAmount':'vendorPaymentDetails[0].vendorContract.paymentAmount',
                  'paymentDetails[0].fromDate':'vendorPaymentDetails[0].fromDate',
                  'paymentDetails[0].toDate':'vendorPaymentDetails[0].toDate',
                },
              },
            ],
        },
        ],
      },
    {
      name: 'invoicedetails',
      label: 'swm.vendorpayment.create.invoicetitle',
        fields:[
        {
          name: 'InvoiceAmount',
          label: 'swm.paymentvendor.create.InvoiceAmount',
          type: 'text',
          jsonPath: "paymentDetails[0].invoiceAmount",
          isRequired: false,
          isDisabled: false,
          patternErrorMsg: '',
        },
        {
          name: 'InvoiceAmount',
          label: 'swm.vendorpayment.create.invoiceDate',
          type: 'datePicker',
          jsonPath: "paymentDetails[0].invoiceDate",
          isRequired: false,
          isDisabled: false,
          patternErrorMsg: '',
        },
        
          {
            name: 'FromDate',
            label: 'swm.paymentvendor.create.FromDate',
            type: 'datePicker',
            jsonPath: "paymentDetails[0].fromDate",
            isRequired: false,
            isDisabled: false,
            patternErrorMsg: '',
          },
          {
            name: 'ToDate',
            label: 'swm.paymentvendor.create.ToDate',
            type: 'datePicker',
            jsonPath: "paymentDetails[0].toDate",
            isRequired: false,
            isDisabled: false,
            patternErrorMsg: '',
          },
          {
            name: 'InvoiceAmount',
            label: 'swm.vendorpayment.create.amountalreadypaid',
            type: 'text',
            jsonPath: "paymentDetails[0].invoiceAmountAlreadyPaid",
            isRequired: false,
            isDisabled: false,
            patternErrorMsg: '',
          },
        ],  
    }, 
    {
        name: 'PaymentDeatails',
        label: 'swm.paymentvendor.create.PaymentDeatails',
        fields: [
        {
            name: 'VoucherNumber',
            jsonPath: 'paymentDetails[0].voucherNumber',
            label: 'swm.paymentvendor.create.VoucherNumber',
            pattern: '',
            type: 'text',
            isRequired: false,
            isDisabled: false,
            patternErrorMsg: '',
            url: '',
          },
          {
            name: 'VoucherDate',
            jsonPath: 'paymentDetails[0].voucherDate',
            label: 'swm.paymentvendor.create.VoucherDate',
            pattern: '',
            type: 'datePicker',
            isRequired: false,
            isDisabled: false,
            patternErrorMsg: '',
            url: '',
          },
          {
            name: 'AmountPaid',
            jsonPath: 'paymentDetails[0].amount',
            label: 'swm.paymentvendor.create.AmountPaid',
            pattern: '',
            type: 'text',
            isRequired: false,
            isDisabled: false,
            patternErrorMsg: '',
            url: '',
          },
          {
            name: 'PaymentInstrument',
            jsonPath: 'paymentDetails[0].instrumentType',
            label: 'swm.paymentvendor.create.PaymentInstrument',
            pattern: '',
            type: 'singleValueList',
            isRequired: false,
            isDisabled: false,
            patternErrorMsg: '',
            url: '',
            defaultValue: [
              {
                key: 'Cash',
                value: 'Cash',
              },
              {
                key: 'Cheque',
                value: 'Cheque',
              },
              {
                key: 'DD',
                value: 'DD',
              },
            ],
          },
           {
            name: 'InstrumentNumber',
            jsonPath: 'paymentDetails[0].instrumentNumber',
            label: 'swm.paymentvendor.create.InstrumentNumber',
            pattern: '',
            type: 'text',
            isRequired: false,
            isDisabled: false,
            patternErrorMsg: '',
            url: '',
          },
           {
            name: 'InstrumentDate',
            jsonPath: 'paymentDetails[0].instrumentDate',
            label: 'swm.paymentvendor.create.InstrumentDate',
            pattern: '',
            type: 'datePicker',
            isRequired: false,
            isDisabled: false,
            patternErrorMsg: '',
            url: '',
          },
          {
            name: 'BankName',
            jsonPath: 'paymentDetails[0].bankName',
            label: 'swm.paymentvendor.create.BankName',
            pattern: '',
            type: 'text',
            isRequired: false,
            isDisabled: false,
            patternErrorMsg: '',
            url: '',
          },
          {
            name: 'BranchName',
            jsonPath: 'paymentDetails[0].branchName',
            label: 'swm.paymentvendor.create.BranchName',
            pattern: '',
            type: 'text',
            isRequired: false,
            isDisabled: false,
            patternErrorMsg: '',
            url: '',
          },
          ],
      },   
    ], 
    url: '/swm-services/paymentdetails/_create',
    tenantIdRequired: true,
},
'swm.update': {
  numCols: 3,
  useTimestamp: true,
  objectName: 'paymentDetails',
  title: 'swm.paymentvendor.create.title',
  groups:[
    {
      name: 'vendorPayment',
      label: '',
      fields: [
        {
          name: 'vendorName',
          jsonPath: 'vendorNo',
          label: 'swm.vendorpayment.create.vendorName',
          type: 'singleValueList',
          isRequired: true,
          isDisabled: false,
          patternErrorMsg: '',
          url: 'swm-services/vendors/_search?|$.vendors.*.vendorNo|$.vendors.*.name',
          depedants: [
            {
              jsonPath: 'vendorPaymentDetails[0].vendorContract.contractNo',
              type: 'dropDown',
              pattern:
                "swm-services/vendorcontracts/_search?&vendorNo={vendorNo}|$.vendorContracts.*.contractNo|$.vendorContracts.*.contractNo",
            }
          ]
        },
        {
          name: 'contractno',
          jsonPath: 'vendorPaymentDetails[0].vendorContract.contractNo',
          label: 'swm.vendorpayment.create.contractno',
          type: 'singleValueList',
          isRequired: false,
          isDisabled: false,
          patternErrorMsg: '',
          url: 'swm-services/vendorcontracts/_search?|$.vendorContracts.*.contractNo|$.vendorContracts.*.contractNo',
          autoCompleteDependancy: {
            autoCompleteUrl: '/swm-services/vendorpaymentdetails/_search?paymentNo={paymentDetails[0].vendorPaymentDetails.paymentNo}',
            autoFillFields: {
              'vendorPaymentDetails[0].approvalAmmount': 'vendorPaymentDetails[0].vendorContract.contractNo',
            },
          },
        },
        {
          name: 'InvoiceNumber',
          label: 'swm.paymentvendor.create.InvoiceNumber',
          type: 'text',
          jsonPath: "paymentDetails[0].invoiceNumber",
          isRequired: false,
          isDisabled: false, 
          patternErrorMsg: '',
        }
      ],
    },
  {
      fields:[
      {
          name : 'TransactionNumber',
          label : 'swm.paymentvendor.create.TransactionNumber',
          jsonPath: "paymentDetails[0].vendorPaymentDetails.paymentNo",
          type : 'autoCompelete',
          isRequired: true,
          isDisabled: false,
          defaultValue:'',
          patternErrorMsg: '',
          url: '/swm-services/vendorpaymentdetails/_search?|$..vendorPaymentDetails.*.paymentNo|$..vendorPaymentDetails.*.paymentNo',
          autoCompleteDependancy: {
            autoCompleteUrl: '/swm-services/vendorpaymentdetails/_search?paymentNo={paymentDetails[0].vendorPaymentDetails.paymentNo}',
            autoFillFields: {
              'paymentDetails[0].vendorPaymentDetails.vendorContract.contractNo': 'vendorPaymentDetails[0].vendorContract.contractNo',
              'paymentDetails[0].vendorPaymentDetails.vendorContract.vendor.name':'vendorPaymentDetails[0].vendorContract.vendor.name',
              'paymentDetails[0].vendorPaymentDetails.vendorInvoiceAmount':'vendorPaymentDetails[0].vendorInvoiceAmount',
              'paymentDetails[0].vendorPaymentDetails.invoiceNo':'vendorPaymentDetails[0].invoiceNo',
              'paymentDetails[0].vendorPaymentDetails.fromDate':'vendorPaymentDetails[0].fromDate',
              'paymentDetails[0].vendorPaymentDetails.toDate':'vendorPaymentDetails[0].toDate',
            },
          },
      },
      {
          name: 'ContractNumber',
          label: 'swm.paymentvendor.create.ContractNumber',
          jsonPath: "paymentDetails[0].vendorPaymentDetails.vendorContract.contractNo",
          type: 'text',
          isRequired: false,
          isDisabled: false,
          patternErrorMsg: '',
        },
        {
          name: 'VendorName', 
          label: 'swm.paymentvendor.create.VendorName',
          type: 'text',
          jsonPath: "paymentDetails[0].vendorPaymentDetails.vendorContract.vendor.name",
          isRequired: false,
          isDisabled: false,
          patternErrorMsg: '',
        },
        {
          name: 'InvoiceAmount',
          label: 'swm.paymentvendor.create.InvoiceAmount',
          type: 'text',
          jsonPath: "paymentDetails[0].vendorPaymentDetails.vendorInvoiceAmount",
          isRequired: false,
          isDisabled: false,
          patternErrorMsg: '',
        },
         {
          name: 'InvoiceNumber',
          label: 'swm.paymentvendor.create.InvoiceNumber',
          type: 'text',
          jsonPath: "paymentDetails[0].vendorPaymentDetails.invoiceNo",
          isRequired: false,
          isDisabled: false, 
          patternErrorMsg: '',
        },
        {
          name: 'FromDate',
          label: 'swm.paymentvendor.create.FromDate',
          type: 'datePicker',
          jsonPath: "paymentDetails[0].vendorPaymentDetails.fromDate",
          isRequired: false,
          isDisabled: false,
          patternErrorMsg: '',
        },
        {
          name: 'ToDate',
          label: 'swm.paymentvendor.create.ToDate',
          type: 'datePicker',
          jsonPath: "paymentDetails[0].vendorPaymentDetails.toDate",
          isRequired: false,
          isDisabled: false,
          patternErrorMsg: '',
        },
        
      ],  
  }, 
  {
      name: 'PaymentDeatails',
      label: 'swm.paymentvendor.create.PaymentDeatails',
      fields: [
      {
          name: 'VoucherNumber',
          jsonPath: 'paymentDetails[0].voucherNumber',
          label: 'swm.paymentvendor.create.VoucherNumber',
          pattern: '',
          type: 'text',
          isRequired: false,
          isDisabled: false,
          patternErrorMsg: '',
          url: '',
        },
        {
          name: 'VoucherDate',
          jsonPath: 'paymentDetails[0].voucherDate',
          label: 'swm.paymentvendor.create.VoucherDate',
          pattern: '',
          type: 'datePicker',
          isRequired: false,
          isDisabled: false,
          patternErrorMsg: '',
          url: '',
        },
        {
          name: 'AmountPaid',
          jsonPath: 'paymentDetails[0].amount',
          label: 'swm.paymentvendor.create.AmountPaid',
          pattern: '',
          type: 'text',
          isRequired: false,
          isDisabled: false,
          patternErrorMsg: '',
          url: '',
        },
        {
          name: 'PaymentInstrument',
          jsonPath: 'paymentDetails[0].instrumentType',
          label: 'swm.paymentvendor.create.PaymentInstrument',
          pattern: '',
          type: 'text',
          isRequired: false,
          isDisabled: false,
          patternErrorMsg: '',
          url: '',
        },
         {
          name: 'InstrumentNumber',
          jsonPath: 'paymentDetails[0].instrumentNumber',
          label: 'swm.paymentvendor.create.InstrumentNumber',
          pattern: '',
          type: 'text',
          isRequired: false,
          isDisabled: false,
          patternErrorMsg: '',
          url: '',
        },
         {
          name: 'InstrumentDate',
          jsonPath: 'paymentDetails[0].instrumentDate',
          label: 'swm.paymentvendor.create.InstrumentDate',
          pattern: '',
          type: 'datePicker',
          isRequired: false,
          isDisabled: false,
          patternErrorMsg: '',
          url: '',
        },
        {
          name: 'BankName',
          jsonPath: 'paymentDetails[0].bankName',
          label: 'swm.paymentvendor.create.BankName',
          pattern: '',
          type: 'text',
          isRequired: false,
          isDisabled: false,
          patternErrorMsg: '',
          url: '',
        },
        {
          name: 'BranchName',
          jsonPath: 'paymentDetails[0].branchName',
          label: 'swm.paymentvendor.create.BranchName',
          pattern: '',
          type: 'text',
          isRequired: false,
          isDisabled: false,
          patternErrorMsg: '',
          url: '',
        },
        ],
    },   
  ], 
  url: '/swm-services/paymentdetails/_update',
  tenantIdRequired: true,
  searchUrl: '/swm-services/paymentdetails/_search?code={code}',
},

};
export default dat;