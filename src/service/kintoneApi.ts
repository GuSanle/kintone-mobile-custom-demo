import { KintoneRestAPIClient } from '@kintone/rest-api-client'
import type { GoodListAppRecord } from '@/types/restApiRecords'

export class KintoneApi {
  client: KintoneRestAPIClient
  constructor() {
    this.client = new KintoneRestAPIClient({})
  }

  public async getAllRecords(app: string) {
    return await this.client.record.getAllRecords<GoodListAppRecord>({ app })
  }

  public async getRecords(
    app: string,
    fields?: Array<keyof kintone.types.Fields>,
    query?: string,
    totalCount?: boolean,
  ) {
    const result = await this.client.record.getRecords<Partial<GoodListAppRecord>>({ app, fields, query, totalCount })
    return result.records
  }
}
