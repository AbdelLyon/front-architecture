import IMutationRepository from "../../domain/ports/IMutationRepository";
import Service from "../Service";

class MutationService<T extends { id: string }>
  extends Service<T>
  implements IMutationRepository<T>
{
  data: T[] = [];

  public async create(newData: T): Promise<T> {
    this.validate(newData);
    this.data.push(newData);
    return newData;
  }

  public async update(id: string, newData: T): Promise<T | undefined> {
    this.validate(newData);
    const existingDataIndex = this.data.findIndex((item) => item.id === id);
    if (existingDataIndex !== -1) {
      this.data[existingDataIndex] = newData;
      return newData;
    }
    return undefined;
  }

  public async delete(id: string): Promise<void> {
    const existingDataIndex = this.data.findIndex((item) => item.id === id);
    if (existingDataIndex !== -1) {
      this.data.splice(existingDataIndex, 1);
    }
  }
}

export default MutationService;
