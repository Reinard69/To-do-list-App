// eslint-disable-next-line import/no-anonymous-default-export
export default (item) =>
  !item.complete && item.timestampDue < new Date().getTime();
