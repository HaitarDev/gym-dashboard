import { format, parseISO, addMonths, formatDistanceStrict } from "date-fns";

export function formatDate(dateStr: string) {
  const parsedDate = parseISO(dateStr);
  const formattedDate = format(parsedDate, "yyyy-MM-dd"); // Format it as desired

  return formattedDate;
}

// ADD DATE TO MEMBERS WHEN SUBSCRIBEING AND RETURN THE DAY WHEN IT SUBSCRIBTION END AND HOW DAYS LEFT TO IT;
export function addDate() {
  const dateAdded = addMonths(new Date(), 1);

  const dateEnd = format(dateAdded, "yyyy-MM-dd");

  const dateLeft = formatDistanceStrict(new Date(), dateAdded, { unit: "day" });

  return { dateEnd, dateLeft };
}
