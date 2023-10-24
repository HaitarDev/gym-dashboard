export const formatCurrency = (value: number) => {
  const formattedValue = value.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });

  // Replace the dollar sign with "DH"
  const formattedValueWithoutDollarSign = formattedValue.replace("$", "");

  return `${formattedValueWithoutDollarSign} DH`;
};
