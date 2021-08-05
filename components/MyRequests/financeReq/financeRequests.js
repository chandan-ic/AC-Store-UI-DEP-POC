import FinanceRequestsBikeDetails from './finance-UI/finaceBikeDetails';
import FinanceRequestDetails from './finance-UI/financeReq';
import FinancerDetails from './finance-UI/fnancerDetails';
import RequestButtons from '../buttons';

export default function FinanceRequestsDetails() {
    return (
        <div className=" flex flex-col md:flex-row w-full justify-around  border-gray-400 border-2 bg-white ">
            <div className="md:w-1/3 w-full">
                <FinanceRequestsBikeDetails />
            </div>

            <div className="md:w-2/3 w-full flex lg:flex-row flex-col">
                <div className="lg:w-3/5 w-full flex flex-col md:space-y-2 justify-between space-y-6 pt-4 md:pt-0 px-4  ">
                    <FinanceRequestDetails />
                    <div className="border-dashed border-b-4 border-gray-600"></div>
                    <FinancerDetails />
                </div>
                <div className="lg:w-2/5  w-full">
                    <RequestButtons />
                </div>
            </div>
        </div>
    )

}