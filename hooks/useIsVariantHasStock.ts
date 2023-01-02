const useIsVariantHasStock = (name: string, arr: any) => {
    let isProductOutOfStock = arr.find((o) => o.title.search(name) > -1 ?? o)
    return isProductOutOfStock.available ?? false;
};

export default useIsVariantHasStock;
