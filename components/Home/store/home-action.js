import { homeActions } from "./home-slice";
import { searchActions } from "components/Search/store/search-slice";
import { apiCall } from "utils/helper/apiHelper";
import { apiUrl } from "utils/constant/api/apiRoutes";
import { apiErrorMsg } from "utils/constant/api/apiErrorMessage";
import { notify } from "utils/constant/notificationMessages";
// import Router, { useRouter } from "next/router";
// import { SEARCH } from "utils/constant/routerPath";


export const setHomeSearchCategory = (category,searchParam) => {
  return async (dispatch) => {
    // pageSize": 10,
    // "pageIndex": 1,
    // "sortBy": "Price-asc",
    // "key": "brand"
    // "value":1
    // var data = JSON.stringify({ "pageSize":10,"pageIndex": 1, sortBy:"Price-asc","key":searchParam,"value":category.FilterValues })

    // const apiConfig = {
    //   url: apiUrl.setHomeSearchCategory.url,
    //   method: apiUrl.setHomeSearchCategory.method,
    //   body: data,
    // };

    try {
      // const response = await apiCall(apiConfig);
      // if (response !== null) {
        // dispatch(
        //   searchActions.setModelResponseData(response?.responseData?.data?.data)
        // );
        // dispatch(
        //   searchActions.setTotalCount(response?.responseData?.data?.totalCount)
        // );
        // dispatch(searchActions.setLoading(true));
        console.log("searchparam=",searchParam)
        console.log("searchparam=",category.FilterValues)

        switch(searchParam) {
          case 'brand' :  { 
            let brandArr = [];
            brandArr[0] = category.FilterValues.toString();
             console.log("searchparam=",category.FilterValues," ",brandArr)
            dispatch(
              searchActions.setSelectedBrand(brandArr)); return;
          }
          case 'category' : {dispatch(searchActions.setSeletedCategoryType("category.FilterValues")); return;}
          case 'budget' : {
            dispatch(searchActions.setSeletedMinPrice(category.FilterValues.MinValue))
            dispatch(searchActions.setSeletedMaxPrice(category.FilterValues.MaxValue))
            return;}
          case 'engine' : {
            dispatch(searchActions.setSeletedMinEngineCC(category.FilterValues.MinValue))
            dispatch(searchActions.setSeletedMaxEngineCC(category.FilterValues.MaxValue))
            return;}
        }
      // }
    } catch (error) {}
    // Router.push(SEARCH);

  };
};
  
  export const getHomeCategoryData = () => {
    console.log("ingethomcategorydata");
    return async (dispatch) => {
      const apiConfig = {
        url: apiUrl.homeCategories.url,
        method: apiUrl.homeCategories.method,
      };
  
      try {
        const response = await apiCall(apiConfig);
        console.log("homecategorydata in home action=", response)
        dispatch(
          homeActions.setCategoryData(response?.ResponseData.Data.HomePageCategory)
        );
      } catch (error) {}
    };
  };
  