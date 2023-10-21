import IQueryRepository from "../../domain/ports/IQueryRepository";
import Service from "../Service";

abstract class QueryService<T>
  extends Service<T>
  implements IQueryRepository<T>
{
  constructor(public baseURL: string, public pathname: string) {
    super(baseURL);
  }

  public async getAll(): Promise<T[]> {
    try {
      const response = await this.api.get<T[]>(this.pathname);
      return response.data;
    } catch (error: any) {
      this.handleError(error);
      throw error;
    }
  }

  public async getById(id: string): Promise<T | undefined> {
    try {
      const response = await this.api.get<T>(`${this.pathname}/${id}`);
      return response.data;
    } catch (error: any) {
      this.handleError(error);
      throw error;
    }
  }
}

export default QueryService;
