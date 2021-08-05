import MyRequestsFinanceHeader from './finance-UI/financeHeader';
import FinanceRequestsDetails from './financeRequests';
import { useState, useEffect } from 'react';
import { server } from '../../../config';
import axios from 'axios';

export default function FinanceRequests() {
    const [resData, setResData] = useState([])

    useEffect(() => {
        var data = JSON.stringify({
            "customerCode": "a9367cfa-0bce-4271-88cc-24df710c3a2d",
            "fromDate": "2021-05-23T14:00:06.307Z",
            "toDate": "2021-05-23T14:00:06.307Z",
            "requestStatus": "APV",
            "dateType": "1M"
        });

        var config = {
            method: 'post',
            url: `${server}​/api​/customerrequest​/getall`,
            headers: {
                "Content-Type": "application/json"
            },
            data: data
        };


        axios(config)
            .then(function (response) {
                if (response.data.isSuccess) {
                    setResData(response.data.responseData)
                }
                else {
                }
            })
            .catch(function (error) {
            });
    }, [])
    return (

        < div className="flex flex-col md:mt-10 shadow-md" >
            <MyRequestsFinanceHeader />
            <FinanceRequestsDetails />
        </div >

    )
}