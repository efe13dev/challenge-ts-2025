const timeRegex = /^\d{2}:\d{2}:\d{2}$/;

export function timeCorrect(timestring: string | null): string | null {
  if (!timestring) {
    return timestring;
  }

  if (!timeRegex.test(timestring)) {
    return null;
  }

  let [hours, minutes, seconds] = timestring.split(":").map(Number);

  seconds += 0;
  minutes += Math.floor(seconds / 60);
  seconds %= 60;
  hours += Math.floor(minutes / 60);
  minutes %= 60;
  hours %= 24;

  return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(
    2,
    "0",
  )}:${String(seconds).padStart(2, "0")}`;
}
