// property tax
import asyncComponent from "./asyncComponent";
const PTHome = asyncComponent(() =>
  import("../Screens/PTHome").then(module => module.default)
);
const AssessPay = asyncComponent(() =>
  import("../Screens/AssessPay").then(module => module.default)
);
const SearchProperty = asyncComponent(() =>
  import("../Screens/SearchProperty").then(module => module.default)
);
const CompletedAssessments = asyncComponent(() =>
  import("../Screens/CompletedAssessments").then(module => module.default)
);
const IncompleteAssessments = asyncComponent(() =>
  import("../Screens/IncompleteAssessments").then(module => module.default)
);
const MyProperties = asyncComponent(() =>
  import("../Screens/MyProperties").then(module => module.default)
);
const Property = asyncComponent(() =>
  import("egov-ui-kit/common/propertyTax/Property").then(module => module.default)
);
const MyReceipts = asyncComponent(() =>
  import("../Screens/MyReceipts").then(module => module.default)
);
const PropertyTaxAssessmentFormWizard = asyncComponent(() =>
  import("../Screens/AssessmentFormWizard").then(module => module.default)
);
const PaymentSuccess = asyncComponent(() =>
  import("../Screens/PaymentSuccess").then(module => module.default)
);
const PaymentFailure = asyncComponent(() =>
  import("../Screens/PaymentFailure").then(module => module.default)
);
const ReviewForm = asyncComponent(() =>
  import("../Screens/ReviewForm").then(module => module.default)
);
const PastPayment = asyncComponent(() =>
  import("../Screens/LinkPastPayments").then(module => module.default)
);
const PaymentRedirectPage = asyncComponent(() =>
  import("../Screens/Payment-rediect-page").then(module => module.default)
);
const HowItWorks = asyncComponent(() =>
  import("../Screens/HowItWorks").then(module => module.default)
);
const PTExamples = asyncComponent(() =>
  import("../Screens/PTExample").then(module => module.default)
);
const FormWizard = asyncComponent(() =>
  import("../Screens/FormWizard").then(module => module.default)
);

const routes = [
  // property tax routes
  {
    path: "property-tax",
    component: PTHome,
    needsAuthentication: true,
    options: {
      hideFooter: true,
      title: "Property Tax",
      // hideBackButton: true,
      // isHomeScreen: true,
      hideTitle: true
    }
  },
  {
    path: "property-tax/assess-pay",
    component: AssessPay,
    needsAuthentication: true,
    options: {
      hideFooter: true,
      title: "PT_ASSESPAY_SELECTPROPERTY"
      // hideBackButton: true,
    }
  },
  {
    path: "property-tax/incomplete-assessments",
    component: IncompleteAssessments,
    needsAuthentication: true,
    options: {
      hideFooter: true,
      title: "PT_INCOMPLETE_ASSESSMENT"
      // hideBackButton: true,
    }
  },
  {
    path: "property-tax/completed-assessments",
    component: CompletedAssessments,
    needsAuthentication: true,
    options: {
      hideFooter: true,
      title: "PT_COMPLETED_ASSESSMENTS"
      // hideBackButton: true,
    }
  },

  {
    path: "property-tax/my-properties",
    component: MyProperties,
    needsAuthentication: true,
    options: {
      hideFooter: true,
      title: "PT_MY_PROPERTY"
      // hideBackButton: true,
    }
  },
  {
    path: "property-tax/my-properties/property/:propertyId/:tenantId",
    component: Property,
    needsAuthentication: true,
    options: {
      hideFooter: true
      // hideBackButton: true,
    }
  },
  {
    path: "property-tax/assess-pay/search-property",
    component: SearchProperty,
    needsAuthentication: true,
    options: {
      hideFooter: true,
      title: "PT_SEARCH_PROPERTY"
      // hideBackButton: true,
    }
  },
  {
    path: "property-tax/my-receipts",
    component: MyReceipts,
    needsAuthentication: true,
    options: {
      hideFooter: true,
      title: "My Receipts",
      hideBackButton: true
    }
  },
  {
    path: "property-tax/payment-success/:propertyId/:tenantId/:assessmentId",
    component: PaymentSuccess,
    needsAuthentication: true,
    options: {
      hideFooter: true,
      hideBackButton: true,
      hideTitle: true
    }
  },
  {
    path:
      "property-tax/payment-failure/:propertyId/:tenantId/:assessmentNumber/:assessmentYear/:txnAmount",
    component: PaymentFailure,
    needsAuthentication: true,
    options: {
      hideFooter: true,
      hideBackButton: true,
      hideTitle: true
    }
  },
  {
    path: "property-tax/assessment-form",
    component: FormWizard,
    needsAuthentication: true,
    options: {
      hideFooter: true
      // hideBackButton: true,
    }
  },
  {
    path: "propert-tax/review-property",
    component: ReviewForm,
    needsAuthentication: true,
    options: {
      hideFooter: true,
      hideBackButton: true
    }
  },
  {
    path: "property-tax/past-payment",
    component: PastPayment,
    needsAuthentication: true
  },
  {
    path: "property-tax/payment-redirect-page",
    component: PaymentRedirectPage,
    needsAuthentication: true,
    options: {
      hideFooter: true,
      hideBackButton: true,
      hideTitle: true
    }
  },
  {
    path: "property-tax/how-it-works",
    component: HowItWorks,
    needsAuthentication: true,
    options: {
      hideFooter: true,
      // hideBackButton: true,
      title: "PT_HOW_IT_WORKS"
    }
  },
  {
    path: "property-tax/pt-examples",
    component: PTExamples,
    needsAuthentication: true,
    options: {
      hideFooter: true,
      // hideBackButton: true,
      title: "Examples"
    }
  }
];

export default routes;
