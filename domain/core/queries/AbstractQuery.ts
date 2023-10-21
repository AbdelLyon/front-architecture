import IQueryRepository from "@/domain/ports/queryRepository/IQueryRepository";

abstract class AbstractQuery<T> {
  constructor(private repository: IQueryRepository<T>) {}

  public async getAll(): Promise<T[]> {
    return await this.repository.getAll();
  }

  public async getById(id: string): Promise<T | undefined> {
    return await this.repository.getById(id);
  }
}

export default AbstractQuery;
