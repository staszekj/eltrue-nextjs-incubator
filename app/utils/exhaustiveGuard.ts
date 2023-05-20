// this function is used to check that all possible values of a union type are handled in a switch statement
// see https://www.typescriptlang.org/docs/handbook/advanced-types.html#exhaustiveness-checking
export const exhaustiveGuard = (value: never): never => {
  throw new Error(
    `ERROR! Reached forbidden guard function with unexpected value: ${JSON.stringify(
      value
    )}`
  );
};
