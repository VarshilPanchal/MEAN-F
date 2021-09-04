import { CommonUtil } from "../module/shared/CommonUtil";

export const APIConstants = {
    GET_ALL_EMPLOYEES: CommonUtil.getApiEndPointPath(),
    ADD_EMPLOYEES: CommonUtil.getApiEndPointPath() + '',
    EDIT_EMPLOYEES: CommonUtil.getApiEndPointPath() + '',
    DELETE_EMPLOYEES: CommonUtil.getApiEndPointPath() + '',
}