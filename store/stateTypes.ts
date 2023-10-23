import { Comment } from "../domain/models/Comment";
import Post from "../domain/models/Post";

export type KnownError = {
  errorMessage: string;
};

export interface GenericState<T> {
  data: T[];
  item: T | null;
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
  error: KnownError;
  page: number;
  perPage: number;
}

export enum State {
  Loading,
  Idle,
  Error,
  Empty,
  Editing,
}

export const initialPost: Post = {
  title: "",
  body: "",
};

export const initialComment: Comment = {
  name: "",
  body: "",
};

export default State;
