export function calcLessonsLong(lessons) {
  let totalSeconds = lessons.reduce(
    (prev, curr) => prev + +curr.duration.lengthSec,
    0
  );
  return calcOneLessonLong(totalSeconds);
}

export function calcOneLessonLong(totalSeconds) {
  let result = "";
  if (totalSeconds >= 60) {
    let hours = Math.floor(totalSeconds / 3600); // Get full hours
    let minutes = Math.floor((totalSeconds % 3600) / 60); // Get remaining minutes after hours
    result = `${hours > 0 ? hours + "hr " : ""}${minutes}min`;
  } else {
    // If less than 1 minute, show seconds only
    result = `${totalSeconds.toFixed(2)}sec`;
  }

  return result;
}
