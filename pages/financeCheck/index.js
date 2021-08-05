import { FinanceForm } from "components/FinanceEligibility/FinanceRequest/FinanceForm";
import { financeActions } from "components/FinanceEligibility/store/financeSlice";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useDispatch } from "react-redux";
import Layout from "../../components/layout";
import { server } from "../../config";

export default function Finance(financeMasterData) {
  const dispatch = useDispatch();
  dispatch(
    financeActions.setFinanceMasterData(
      financeMasterData.financeMasterData.responseData
    )
  );

  return (
    <Layout>
      <div >
        <FinanceForm />
      </div>
    </Layout>
  );
}

export const getStaticProps = async ({ locale }) => {
  const res = await fetch(
    `${server}/Master/api/v1/master/get/financeeligibility`
  );

  const financeMasterData = await res.json();
  console.log(financeMasterData);
  if (financeMasterData.isSuccess) {
    return {
      props: {
        financeMasterData,
        ...(await serverSideTranslations(locale, [
          "finance",
          "common",
          "error",
          "testRide",
        ])),
      },
    };
  }
};
