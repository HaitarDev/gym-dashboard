import { format, parseISO, subDays } from "date-fns";

export function formatDate(dateStr: string) {
  const parsedDate = parseISO(dateStr);
  const formattedDate = format(parsedDate, "yyyy-MM-dd"); // Format it as desired

  return formattedDate;
}

export function getDateBeforeToday(numDays: number) {
  const date = subDays(new Date(), numDays);
  return date.toISOString();
}

// CALCUL DAYS LEFT BETWEEN CURRENT DAY AND DAY END;
// export function daysLeft(startDate: string, endDate: string) {
//   const distanceDays = formatDistanceStrict(
//     new Date(startDate), // not fix (for tracking)
//     new Date(endDate), // fix
//     {
//       unit: "day",
//     }
//   );

//   return distanceDays;
// }
