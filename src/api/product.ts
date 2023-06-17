import axiosClient from ".";
import {
    ICombineProductResponse,
    IProductDetailResponse,
    ISearchProductParams,
    ISearchProductResponse,
} from "../interfaces";

const productApi = {
    // hàm trả về 1 Promise với .then có interface là ICombine...
    getCombineProduct(): Promise<ICombineProductResponse> {
        return axiosClient.get("/products/combine-products");
    },
    search(params: ISearchProductParams): Promise<ISearchProductResponse> {
        return axiosClient.get("/products", {
            params,
        });
    },
    show(id: number): Promise<IProductDetailResponse> {
        return axiosClient.get(`/products/${id}`);
    },
};

export default productApi;
