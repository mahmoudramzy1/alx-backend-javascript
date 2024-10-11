export default function hasValuesFromArray(theset, thelist) {
  let similarity = true;
  thelist.forEach((element) => {
    if (!theset.has(element)) similarity = false;
  });
  return similarity;
}
