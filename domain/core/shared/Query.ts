import IQueryRepository from "../../ports/IQueryRepository";

abstract class Query<T> {
  constructor(private repository: IQueryRepository<T>) {}

  public async getAll(): Promise<T[]> {
    return await this.repository.getAll();
  }

  public async getById(id: string): Promise<T | undefined> {
    return await this.repository.getById(id);
  }
}

export default Query;
