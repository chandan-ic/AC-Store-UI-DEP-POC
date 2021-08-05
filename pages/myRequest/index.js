import axios from "axios";
import TestRideRequests from "components/MyRequests/mytest/testRideReq/myRequest";
import { myRequestActions } from "components/MyRequests/store/myRequest-slice";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
const index = () => {
  const { t } = useTranslation(["myrequests", "common", "error"]);
  const [RequestData, setRequestData] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    var data = JSON.stringify({
      fromDate: "2021-06-16T06:58:27.851Z",
      toDate: "2021-06-21T06:58:27.851Z",
      requestStatus: "PEN",
      dateType: "1M",
    });

    var config = {
      method: "post",
      url: "https://dev-api.autocomm.in/CRequest/api/customerrequest/getall",
      headers: {
        "Content-Type": "application/json",
        cd: "2BmOYdPIH3O95jCDX+W5Fx77y6abdQY0Cfwa1PlYeVgkAdyvYb0Nx1Up5xAt753L",
        cm: "kUwImT9Juyttf3JFGbItag==",
        Authorization:
          "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IkZCQjk5MEQ4OTA2NTU1OTFDOTExOTNBMTkzNEU3QTBDIiwidHlwIjoiYXQrand0In0.eyJuYmYiOjE2MjQ5NjI5OTksImV4cCI6MTYyNTA0OTM5OSwiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDo1MDYxIiwiYXVkIjoiYXV0b2NvbW0udWkiLCJjbGllbnRfaWQiOiJhdXRvY29tbS5raGl2cmFqIiwidXBuIjoiMEtCaWpyUGFLeEJ0eHBZM1RWSnFNQT09IiwidWNjIjoidHgwd3BNalRzVnVPTWhmRkpNM2laRmNnTUxpRUhRamdJdnBZMXRoVGgzRk84SmplK2d4SStmdzR6ZnlWbjNObyIsImp0aSI6IkEzOEVCOURFMjY3MzMxMTFDQjBBQ0ZFNUQwMzE5Njk1IiwiaWF0IjoxNjI0OTYyOTk5LCJzY29wZSI6WyJib29raW5nIiwiZmluYW5jZSIsInRlc3RyaWRlIl19.V-3znlK6RhJrMYJH13E36vukgkCDupE0DfO7DUaahDAO4TljAtYUY3Dp16Kwd_PGY6dKHCf4kbkmpgDYauRXD7RtH7oSFM8stICeAXY4zjyYR5jRVvr18ehbEK-VpcU07RafnctqsqkIWqqnWDN7r7zhU7LWPmpqGZlYUxwelVn9NRzkcragHUR6iZa9yzYH1OtFDYPocdm0u3VEirLH1-td4bhYPa0kEw5TeBeJ71Dr8j817jLzmduLqL1egSuZ5yzdqLQXZuIIVSCegOFkrzxfTZefXQ1OgLLrWRe-_Ej9sK_AMByY0yUrAWSoD6gtvRBmG4Ol3NC0nqYQ0S8S7w",
        cd: "2BmOYdPIH3O95jCDX+W5Fx77y6abdQY0Cfwa1PlYeVgkAdyvYb0Nx1Up5xAt753L",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        if (response.data.isSuccess) {
          dispatch(
            myRequestActions.setRequestData(response.data.responseData.data)
          );
        } else {
        }
      })
      .catch(function (error) {});
  }, []);

  return (
    <section className="border-yellow-300 border-2 min-h-screen bg-gray-50">
      <div className="bg-white container">
        <div className="pt-24  md:mb-0 mb-4 ">
          <h2 className="font-LibreFranklin font-bold  tracking-wide uppercase">
            {t("myrequests:headers.my-request")}
          </h2>
        </div>
        <div className="mb-6 flex justify-between flex-col">
          <TestRideRequests RequestData={RequestData} />
        </div>
        {/* <div>
                    <FinanceRequests />
                </div> */}
      </div>
    </section>
  );
};

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, [
      "myrequests",
      "common",
      "error",
    ])),
  },
});
export default index;
