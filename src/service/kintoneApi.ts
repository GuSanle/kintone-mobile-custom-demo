import { KintoneRestAPIClient } from '@kintone/rest-api-client'
const APP_ID = import.meta.env.VITE_APP_ID

export class KintoneApi {
  client: KintoneRestAPIClient
  constructor() {
    this.client = new KintoneRestAPIClient({})
  }

  public async getAllRecords() {
    return await this.client.record.getAllRecords<kintoneRestApi.GoodListAppRecord>({ app: APP_ID })
  }
}
