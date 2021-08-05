export const getNamefromId = (sourceObject, id) => {
  const selectedObject = sourceObject.filter(vName => vName.ModelCode === id);
  if (selectedObject.length) {
    return selectedObject[0].Model;
  }

};


export const getRideLocation = (sourceObject, id) => {
  if (sourceObject === null) {
    return null;
  } else {
    const selectedObject = sourceObject.filter(vName => vName.TestridePreferredLocationFixedCategory === id);
    if (selectedObject.length) {
      return selectedObject[0].TestridePreferredLocation;
    }
  }
};




export const getNamefromBCode = (sourceObject, id) => {
  const selectedObject = sourceObject.filter(B => B.BrandCode === id);

  if (selectedObject.length) {
    return selectedObject[0].Brand;
  }
};

export const getModelDetails = (sourceObject, id) => {
  const selectedObject = sourceObject.filter(vName => vName.ModelCode === id);
  if (selectedObject.length) {
    return selectedObject[0].ModelDetails;
  }

};

export const getModelCategory = (sourceObject, id) => {
  const selectedObject = sourceObject.filter(vName => vName.BrandCode === id);
  if (selectedObject.length) {
    return selectedObject[0].ModelCategory;
  }

};


export const getProductName = (sourceObject, id) => {
  const selectedObject = sourceObject.find(vB => vB.VariantCode === id);
  if (selectedObject.length) {
    return selectedObject[0].Variant;
  }

};