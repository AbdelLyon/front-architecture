import { userSchema } from "../../../validators/validators";
import AbstractQueryService from "../../api/QueryService";

class MockAbstractService<T> extends AbstractQueryService<T> {
  constructor() {
    super("mock-base-url", "mock-pathname");
  }

  protected validate(data: T) {
    try {
      userSchema.parse(data);
    } catch (error) {
      throw new Error("Invalid data format");
    }
  }
}

export default MockAbstractService;
