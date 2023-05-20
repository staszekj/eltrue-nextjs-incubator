export const randomFailure = () => {
  const params = new URL(document.location.href).searchParams;
  const err = Number.parseFloat(params.get('err') ?? '');
  const errorFactor = Number.isFinite(err) ? err : 0.3;

  const randomNumber = Math.random();
  if (randomNumber < errorFactor) {
    throw new Error(
      `Random failure ${JSON.stringify({ randomNumber, errorFactor, err })}`
    );
  }
};
