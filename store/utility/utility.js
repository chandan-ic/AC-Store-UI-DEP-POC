export const updateObject = (oldObject, updatedProperties) => {
  console.log("oldobject=",oldObject);
  console.log("updatedProperties=",updatedProperties);
    return {
        ...oldObject,
        ...updatedProperties
    };
};