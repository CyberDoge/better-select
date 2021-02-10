export function getObjectByKey(key) {
  const val = localStorage.getItem(key);
  return val && JSON.parse(val);
}
export function setObject(key, object) {
  localStorage.setItem(key, JSON.stringify(object));
}
