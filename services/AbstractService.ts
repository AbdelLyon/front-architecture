import axios, { AxiosInstance } from "axios";
import { userSchema } from "../validators/validators";

abstract class AbstractService<T> {
  protected api: AxiosInstance;

  constructor(public baseURL: string, public pathname: string) {
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
}

export default AbstractService;
