const extractErrorMassage = (error: any) => {
  const errorMassage =
    error.graphQLErrors[0]?.extensions?.originalError?.message;
  if (!errorMassage) {
    return;
  }
  if (Array.isArray(errorMassage)) {
    return formatErrorMassage(errorMassage[0]);
  } else {
    return formatErrorMassage(errorMassage);
  }
};

const formatErrorMassage = (errorMassage: string) => {
  return errorMassage.charAt(0).toUpperCase() + errorMassage.slice(1);
};

export { extractErrorMassage };
