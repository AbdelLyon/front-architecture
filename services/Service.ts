import axios, { AxiosInstance } from "axios";
import { userSchema } from "../validators/validators";

abstract class Service<T> {
  protected api: AxiosInstance;
  protected pageNumber: number = 1;
  protected pageSize: number = 10;

  constructor(public baseURL: string) {
    this.api = axios.create({
      baseURL,
    });
  }

  protected validate(data: T) {
    try {
      userSchema.parse(data);
    } catch (error) {
      throw new Error("Invalid data format");
    }
  }

  protected setPage(pageNumber: number, pageSize: number): void {
    this.pageNumber = pageNumber;
    this.pageSize = pageSize;
  }

  protected handleError(error: Error): void {
    console.error("Erreur API:", error.message);
  }
}

export default Service;
