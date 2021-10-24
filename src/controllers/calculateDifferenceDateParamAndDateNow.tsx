export function calculateDifferenceDateParamAndDateNow(
  dateParam: Date,
  dateNow: Date
) {
  const offsetParam = dateParam.getTimezoneOffset() / 60;

  const offsetNow = dateNow.getTimezoneOffset() / 60;

  const dateParamHelper = new Date(
    dateParam.setHours(dateParam.getHours() - offsetParam)
  );

  const dateNowHelper = new Date(
    dateNow.setHours(dateNow.getHours() - offsetNow)
  );

  const dateParamTime = dateParamHelper.getTime();
  const dateNowTime = dateNowHelper.getTime();
  const miliseconds = Math.abs(dateNowTime - dateParamTime);

  let dateHelper = new Date(Date.UTC(0, 0, 0, 0, 0, 0, miliseconds));

  const hours = dateHelper.getUTCHours();
  const minutes = dateHelper.getUTCMinutes();
  const seconds = dateHelper.getUTCSeconds();
  return { hours, minutes, seconds };
}
