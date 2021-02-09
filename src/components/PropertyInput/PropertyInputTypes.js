export const ADVANTAGE = "advantage";
export const DISADVANTAGE = "disadvantage";
export const NOTICE = "notice";

export const propertyInputTypesSort = (a, b) => {
  if (a.type === b.type) {
    return 0;
  } else if (a.type === NOTICE) {
    return -1;
  } else if (a.type === ADVANTAGE) {
    return 1;
  }
  // if a.type == disadvatage
  else {
    return b.type === ADVANTAGE ? -1 : 1;
  }
};
