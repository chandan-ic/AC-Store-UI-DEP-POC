import React, { useEffect } from "react";
import moment from "moment";
import MyRequestsHeader from "./requestUI/myRequestheader";
import { getMyRequests } from "../../store/myRequest-actions";
import { useSelector, useDispatch } from "react-redux";
import TestRideRequestsDetails from "./requestUI/testRideRequestDetails";
import TestrideLocationDetails from "./requestUI/testrideLocationDetails";
import TestRideDealerDetails from "./requestUI/testrideDealerDetails";
import RequestButtons from "../../buttons";
import axios from "axios";

export default function TestRideRequests() {
  const RequestData = useSelector((state) => state.myRequest.RequestData);
  const dispatch = useDispatch();

  // useEffect(() => {
  //     var data = JSON.stringify({
  //         "fromDate": "2021-06-16T06:58:27.851Z",
  //         "toDate": "2021-06-21T06:58:27.851Z",
  //         "requestStatus": "PEN",
  //         "dateType": "1M"
  //     });
  //     dispatch(getMyRequests(data))
  // })

  return (
    <div>
      {RequestData.map((m, i) => (
        <div className="flex flex-col md:mt-10 mt-6 shadow-md">
          <MyRequestsHeader
            title=""
            subTitle={moment(m.requestDate).format("LL")}
            titleTwo={moment(m.preferredDate).fromNow("YYYYMMDD")}
            subTitleTwo={moment(m.preferredDate).format("LL")}
          />

          <div className=" flex flex-col md:flex-row w-full justify-around  border-gray-400 border-2 bg-white ">
            <div className="md:w-1/3 w-full">
              <TestRideRequestsDetails
                bikeName={m.modelName}
                BikeDescr="Bike Description"
              />
            </div>

            <div className="md:w-2/3 w-full flex lg:flex-row flex-col">
              <div className="lg:w-3/5 w-full flex flex-col md:space-y-0 justify-evenly space-y-6 pt-4 md:pt-0 px-4  ">
                <TestrideLocationDetails
                  CustomerDetails={m.requestDescription}
                  // CustomerAddressDetails=""
                  CustomerAddress1={m.remarks}
                />
                <div className="border-dashed border-b-4 border-gray-600"></div>
                <TestRideDealerDetails
                  DealerName1={m.requestOn}
                  DealerAddress1=""
                  DealerAddress2=""
                  DealerAddress3=""
                />
              </div>
              <div className="lg:w-2/5  w-full">
                <RequestButtons status={m.requestStatus} />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
