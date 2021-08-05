import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { OrderList } from "components/MyOrder/OrderList";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { Modal } from "components/Common/Component";
import { myOrderAction } from "components/MyOrder/store/myorder-slice";

export default function Search() {
  const { t } = useTranslation(["common", "myorder"]);
  const  isOpenModal = useSelector((state) => state.myOrder);
  const dispatch = useDispatch();

  return (
    <>
      <div className=" pt-16 w-full  h-screen fixed overflow-auto">
        <div className="p-5 border-b-4">
          <h2 className="text-4xl font-bold">{t("myorder:labels.myOrders")}</h2>
        </div>
        <div className="p-5 sm:p-10">
          <OrderList />
        </div>
      </div>
      <Modal
        okText={t("myorder:modal.email")}
        onOkClick={() => {}}
        cancelText={t("myorder:modal.dismiss")}
        onCancelClick={() => {
          dispatch(myOrderAction.setOpenModal(false));
        }}
        title={t("myorder:modal.cancelOrder")}
        show={isOpenModal}
      >
        <div className="p-5">
          <h3 className="pb-10">{t("myorder:modal.inst")}</h3>
          <h3>{t("common:modal.dealerName")} : Khivraj</h3>
          <h3>{t("common:modal.dealerPhone")} : +91-9876876565</h3>
          <h3>{t("common:modal.dealerEmail")} : krraod@khivraj.com</h3>
        </div>
      </Modal>
    </>
  );
}

export const getStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "myorder"])),
    },
  };
};
