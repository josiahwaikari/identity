import moment, { Moment } from "moment";

export function adjust(color: string, amount: number) {
  return (
    "#" +
    color
      .replace(/^#/, "")
      .replace(/../g, (color) =>
        (
          "0" +
          Math.min(255, Math.max(0, parseInt(color, 16) + amount)).toString(16)
        ).substr(-2)
      )
  );
}

export function getDateText(date: Moment) {
  if (!moment.isMoment(date)) {
    date = moment(date);
  }

  if (date.isSame(moment(), "day")) {
    return "Today";
  } else if (date.isSame(moment().subtract(1, "d"), "day")) {
    return "Yesterday";
  } else if (date.isSame(moment(), "week")) {
    return date.format("dddd");
  } else {
    return date.format("dddd, DD MMMM YYYY");
  }
}
