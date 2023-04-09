export default function orderByProps(object, sortArr = []) {
  const resArr = [];
  const objectKeys = Object.keys(object);

  for (const index in sortArr) {
    if (sortArr[index] in object) {
      objectKeys.splice(objectKeys.indexOf(sortArr[index]), 1);
      resArr.push({ key: sortArr[index], value: object[sortArr[index]] });
    }
  }

  objectKeys.sort().forEach((key) => {
    resArr.push({ key, value: object[key] });
  });

  return resArr;
}
