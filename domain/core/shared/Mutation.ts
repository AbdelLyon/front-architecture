import IMutationRepository from "../../ports/IMutationRepository";

class Mutation<T> {
  constructor(private repository: IMutationRepository<T>) {}

  public async create(newData: T): Promise<T> {
    return await this.repository.create(newData);
  }

  public async update(id: string, newData: T): Promise<T | undefined> {
    return await this.repository.update(id, newData);
  }

  public async delete(id: string): Promise<void> {
    return await this.repository.delete(id);
  }
}

export default Mutation;
