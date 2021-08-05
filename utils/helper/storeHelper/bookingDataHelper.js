import store from "store";

export function getVariantNameWithSno(sno) {
  const state = store.getState();
  const variants = state?.booking?.product?.variantList;
  console.log(variants)
  const selectedVariant = variants.filter((b) => b.variantSlno?.toString() === sno?.toString());
  return selectedVariant.length ? selectedVariant[0] : {};
}

    