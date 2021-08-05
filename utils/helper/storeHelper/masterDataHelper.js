import store from "store";

export function getBikeBrands() {
  const state = store.getState();
  const brands = state?.master?.masterData?.data?.Brand;
  return brands ? brands : [];
}

export function getBikeModels(brandCode) {
  const state = store.getState();
  const model = state?.master?.masterData?.data?.Model;
  return model?.filter((m) => m.BrandCode === brandCode);
}

export function getModalSNo(modelCode) {
  const state = store.getState();
  const model = state?.master?.masterData?.data?.Model;
  const selectModel = model.filter((b) => b.ModelCode === modelCode);
  return selectModel.length ? selectModel[0].ModelSlno : "";
}

export function getBrandCodeToSno(sno) {
  const state = store.getState();
  const model = state?.master?.masterData?.data?.Brand;
  const selectModel = model.filter((b) => b.BrandCode === sno);
  return selectModel.length ? selectModel[0].BrandSlno : "";
}

export function getModelSno(sno) {
  const state = store.getState();
  const model = state?.master?.masterData?.data?.Model;
  const selectModel = model.filter((b) => b.ModelSlno === sno);
  return selectModel.length ? selectModel[0].ModelCode : "";
}

export function getBrandSno(sno) {
  const state = store.getState();
  const model = state?.master?.masterData?.data?.Brand;
  const selectModel = model.filter((b) => b.BrandSlno === sno);
  return selectModel.length ? selectModel[0].BrandCode : "";
}

export function getModelCodeToSno(sno) {
  const state = store.getState();
  const model = state?.master?.masterData?.data?.Model;
  const selectModel = model.filter((b) => b.ModelCode === sno);
  return selectModel.length ? selectModel[0].ModelSlno : "";
}

export function getBrand(modelCode) {
  const state = store.getState();
  const model = state?.master?.masterData?.data?.Model;
  const selectModel = model.filter((b) => b.ModelCode === modelCode);
  return selectModel.length ? selectModel[0].BrandCode : "";
}

export function getModalName(modelCode) {
  const state = store.getState();
  const model = state?.master?.masterData?.data?.Model;
  const selectModel = model.filter((b) => b.ModelCode === modelCode);
  return selectModel.length ? selectModel[0].Model : "";
}

export function getTestRideLocationValue(code) {
  const state = store.getState();
  const loc = state?.master?.masterData?.data?.TestridePreferredLocation;
  const selectloc = loc.filter((b) => b.Code === code);
  return selectloc.length ? selectloc[0].Value : "";
}

export function getBrandCode(brandName) {
  const state = store.getState();
  const brands = state?.master?.masterData?.data?.Brand;
  const selectBrand = brands.filter((b) => b.Brand === brandName);
  return selectBrand.length ? selectBrand[0].BrandCode : "";
}

export function getRideType() {
  const state = store.getState();
  const type = state?.master?.masterData?.data?.TestrideType;
  return type;
}

export function getPreferredLocation() {
  const state = store.getState();
  const location = state?.master?.masterData?.data?.TestridePreferredLocation;
  return location;
}

export function getStates() {
  const state = store.getState();
  const states = state?.master?.stateCity?.State;
  return states;
}

// export function getStateSNo(stateCode) {
//   const state = store.getState();
//   const states = state?.master?.stateCity?.State;
//   const selectState = states?.filter((b) => b.State === stateCode);
//   return selectState.length ? selectState[0].StateSlno : "";
// }

export function getCity(stateCode) {
  const state = store.getState();
  const city = state?.master?.stateCity?.City;
  return city.filter((m) => m.StateSlno === Number(stateCode));
}

// export function getCitySNo(CityCode) {
//   const state = store.getState();
//   const cities = state?.master?.stateCity?.City;
//   const selectCity = cities.filter((b) => b.City === CityCode);
//   return selectCity.length ? selectCity[0].CitySlno : "";
// }

export function getDealerName(dealerSno) {
  const state = store.getState();
  const dealers = state?.dealers?.dealersData?.data
    ? state?.dealers?.dealersData?.data
    : [];
  const selectedDealer = dealers?.filter((b) => b.LocationSlno === dealerSno);
  return selectedDealer.length ? selectedDealer[0].LocationName : "";
}

export function getSelectedDealer(dealerSno) {
  const state = store.getState();
  const dealers = state?.dealers?.dealersData?.data
    ? state?.dealers?.dealersData?.data
    : [];
  const selectedDealer = dealers?.filter((b) => b.LocationSlno === dealerSno);
  return selectedDealer.length ? selectedDealer[0] : null;
}



export function getTenure() {
  const state = store.getState();
  const tenure = state?.finance?.financeMasterData?.data?.Tenure;
  return tenure ? tenure : [];
}