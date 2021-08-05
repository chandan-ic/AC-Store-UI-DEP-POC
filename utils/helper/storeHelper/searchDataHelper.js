import store from "store";

export const getSearchPayload = () => {
  const state = store.getState();

  const searchMinMaxPrice = state?.search?.searchMasterData?.MinAndMaxPrice;
  const minMaxCC = state?.search?.searchMasterData?.MinAndMaxCC;

  return JSON.stringify({
    pageSize: state?.search?.pageSize,
    pageIndex: Number(state?.search?.active),
    sortBy: state?.search?.sortBy || "Price-asc",
    searchText: state?.search?.searchText || "",
    categoryCode: state?.search?.categoryType,
    brandSlnos: state?.search?.brand.map((num) => Number(num)),
    minPrice: state?.search?.minPrice
      ? state.search.minPrice
      : searchMinMaxPrice.Minimum,
    maxPrice: state?.search?.maxPrice
      ? state.search.maxPrice
      : searchMinMaxPrice.Maximum,
    minEngineCC: state?.search?.minEngineCC
      ? state.search.minEngineCC
      : minMaxCC.Minimum,
    maxEngineCC: state?.search?.maxEngineCC
      ? state.search.maxEngineCC
      : minMaxCC.Maximum,
    specialFeatures: state?.search?.feature,
    fuelType: state?.search?.fuelType,
  });
};

export const getSearchCategory = () => {
  const state = store.getState();
  const category = state?.search?.searchMasterData?.Category;
  return category;
};

export const getSearchMaxMinPrice = () => {
  const state = store.getState();
  console;
  const minMaxPrice = state?.search?.searchMasterData?.MinAndMaxPrice;
  return minMaxPrice;
};

export const getSearchMaxMinCC = () => {
  const state = store.getState();
  const minMaxCC = state?.search?.searchMasterData?.MinAndMaxCC;
  return minMaxCC;
};

export const getSearchBrand = () => {
  const state = store.getState();
  const brand = state?.search?.searchMasterData?.Brand;
  return brand;
};

export const getSearchFeature = () => {
  const state = store.getState();
  const feature = state?.search?.searchMasterData?.SpecialFeatures;
  return feature;
};

export const getCategoryCodeToValue = (categoryType) => {
  const categoryName = getSearchCategory()?.filter(
    (c) => c.CategoryCode === categoryType
  );
  return categoryName ? categoryName[0].Category : null;
};

export const getBrandSlnoToName = (brandCode) => {
  const brandName = getSearchBrand()?.filter(
    (c) => c.BrandSlno.toString() === brandCode
  );
  return brandName ? brandName[0].Brand : null;
};
