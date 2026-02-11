import { DataProvider ,GetListParams,GetListResponse, BaseRecord} from "@refinedev/core";
import { MOCK_SUBJECTS } from "@/constants/mock_data";

export const dataProvider: DataProvider = {
  getList: async<TData extends BaseRecord = BaseRecord>({resource }: GetListParams): Promise<GetListResponse<TData>> => {
    if(resource != 'subjects'){
      return { data: [] as TData[],total: 0}
    }

    return {
      data: MOCK_SUBJECTS as unknown as TData[],
      total: MOCK_SUBJECTS.length
    }
  },
  getOne: async () => {throw new Error('Not Implemented YET')},
  create: async () => {throw new Error('Not Implemented YET')},
  update: async () => {throw new Error('Not Implemented YET')},
  deleteOne: async () => {throw new Error('Not Implemented YET')},

  getApiUrl: () => ''
} 