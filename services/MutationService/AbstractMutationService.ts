import IMutationRepository from "@/domain/ports/MutationRepository/IMutationRepository";
import AbstractService from "../AbstractService";

class AbstractMutationService<T>
  extends AbstractService<T>
  implements IMutationRepository<T>
{
  constructor(public baseURL: string, public pathname: string) {
    super(baseURL, pathname);
  }

  public async create(newData: T): Promise<T> {
    this.validate(newData);
    try {
      const response = await this.api.post<T>(this.pathname, newData);
      return response.data;
    } catch (error) {
      throw new Error("Failed to create data");
    }
  }

  public async update(id: string, newData: T): Promise<T | undefined> {
    this.validate(newData);
    try {
      const response = await this.api.put<T>(`${this.pathname}/${id}`, newData);
      return response.data;
    } catch (error) {
      throw new Error("Failed to update data");
    }
  }

  public async delete(id: string): Promise<void> {
    try {
      await this.api.delete(`${this.pathname}/${id}`);
    } catch (error) {
      throw new Error("Failed to delete data");
    }
  }
}

export default AbstractMutationService;
