export function calculateDifferenceDateParamAndDateNow(
  dateCompare: Date,
  dateNowParam?: Date
) {
  const dateParam = new Date(dateCompare);
  const dateNow = dateNowParam ? dateNowParam : new Date();

  const offsetParam = dateParam.getTimezoneOffset() / 60;

  const offsetNow = dateNow.getTimezoneOffset() / 60;

  const dateParamHelper = new Date(
    dateParam.setHours(dateParam.getHours() - offsetParam)
  );

  const dateNowHelper = new Date(
    dateNow.setHours(dateNow.getHours() - offsetNow)
  );

  const dateParamTime = Math.floor(dateParamHelper.getTime() / 1000);
  const dateNowTime = Math.floor(dateNowHelper.getTime() / 1000);
  const secHelper = Math.abs(dateNowTime - dateParamTime);

  // second solution greater than 60 minutes
  const minutes = Math.floor(secHelper / 60);
  const seconds = minutes > 0 ? secHelper - minutes * 60 : secHelper;

  // it return days, hours, minutes, seconds
  // let dateHelper = new Date(Date.UTC(0, 0, 0, 0, 0, secHelper));
  // const minutes = dateHelper.getUTCMinutes();
  // const seconds = dateHelper.getUTCSeconds();

  return { minutes, seconds };
}
