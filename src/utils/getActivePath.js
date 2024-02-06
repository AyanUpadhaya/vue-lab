const getActivePath = (value) => {
  if (
    value === "beauty-dex" ||
    value === "customer-segment" ||
    value === "marketing-campaign"
  ) {
    return "beauty-dex";
  } else if (
    value === "customer-segment-report" ||
    value === "marketing-campaign-report"
  ) {
    return "reports";
  } else if (
    value === "knowledge" ||
    value === "contact-us" ||
    value === "problem-report"
  ) {
    return "help-support";
  } else {
    return value;
  }
};

export default getActivePath;
