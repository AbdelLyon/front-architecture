import IQueryRepository from "@/domain/ports/queryRepository/IQueryRepository";
import AbstractService from "../AbstractService";

abstract class AbstractQueryService<T>
  extends AbstractService<T>
  implements IQueryRepository<T>
{
  constructor(public baseURL: string, public pathname: string) {
    super(baseURL, pathname);
  }

  public async getAll(): Promise<T[]> {
    try {
      const response = await this.api.get<T[]>(this.pathname);
      return response.data;
    } catch (error) {
      throw new Error("Failed to fetch data");
    }
  }

  public async getById(id: string): Promise<T | undefined> {
    try {
      const response = await this.api.get<T>(`${this.pathname}/${id}`);
      return response.data;
    } catch (error) {
      throw new Error("Failed to fetch data");
    }
  }
}

export default AbstractQueryService;
