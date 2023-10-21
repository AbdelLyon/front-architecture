import IQueryRepository from "../../domain/ports/IQueryRepository";
import Service from "../Service";

abstract class QueryService<T extends { id: string }>
  extends Service<T>
  implements IQueryRepository<T>
{
  constructor(public data: T[]) {
    super("");
  }

  public async getAll(): Promise<T[]> {
    return this.data;
  }

  public async getById(id: string): Promise<T | undefined> {
    return this.data.find((item) => item.id === id);
  }
}

export default QueryService;
