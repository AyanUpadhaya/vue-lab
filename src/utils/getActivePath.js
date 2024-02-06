const getActivePath = (value) => {
  if (
    value === "user-persona" ||
    value === "customer-segment" ||
    value === "marketing-campaign" ||
    value === "user-persona-simulation" ||
    value === "user-persona-simulation-result" ||
    value === "update-user-persona-simulation" ||
    value === "customer-segment-simulation" ||
    value === "customer-segment-simulation-result" ||
    value === "update-customer-segment-simulation" ||
    value === "marketing-campaign-optimize" ||
    value === "marketing-capaign-simulation-result" ||
    value === "update-marketing-campaign-simulation"
  ) {
    return "beauty-dex";
  } else if (
    value === "customer-segment-report" ||
    value === "CustomerSegmentReportDetails" ||
    value === "marketing-campaign-report" ||
    value === "MarketingCampaignReportDetails"
  ) {
    return "reports";
  } else if (
    value === "knowledge" ||
    value === "contact-us" ||
    value === "problem-report"
  ) {
    return "help-support";
  } else if (value === "subscriptions" || value === "subscriptionsplans") {
    return "subscriptions";
  } else {
    return value;
  }
};

const getActiveRoutePath = (value) => {
  if (
    value === "user-persona" ||
    value === "user-persona-simulation" ||
    value === "user-persona-simulation-result" ||
    value === "update-user-persona-simulation"
  ) {
    return "user-persona";
  } else if (
    value === "customer-segment" ||
    value === "customer-segment-simulation" ||
    value === "customer-segment-simulation-result" ||
    value === "update-customer-segment-simulation"
  ) {
    return "customer-segment";
  } else if (
    value === "marketing-campaign" ||
    value === "marketing-campaign-optimize" ||
    value === "marketing-capaign-simulation-result" ||
    value === "update-marketing-campaign-simulation"
  ) {
    return "marketing-campaign";
  } else if (
    value === "customer-segment-report" ||
    value === "CustomerSegmentReportDetails"
  ) {
    return "customer-segment-report";
  } else if (
    value === "marketing-campaign-report" ||
    value === "MarketingCampaignReportDetails"
  ) {
    return "marketing-campaign-report";
  }
  return value;
};

export { getActivePath, getActiveRoutePath };