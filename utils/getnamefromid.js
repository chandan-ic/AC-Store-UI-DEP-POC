export const getNamefromId = (sourceObject,id) => {
    console.log("getnamefromid=",sourceObject);
    const selectedObject = sourceObject.filter(vName => vName.ModelCode === id);
   if(selectedObject.length )
   {  console.log("selected name=",selectedObject[0].Model);

    return selectedObject[0].Model;
    }

  };


  export const getRideLocation = (sourceObject,id) => {

    const selectedObject = sourceObject.filter(vName => vName.TestridePreferredLocationFixedCategory === id);
   if(selectedObject.length)
   {  console.log("selected name=",selectedObject[0].TestridePreferredLocation);
    return selectedObject[0].TestridePreferredLocation;
    }

  };

 


