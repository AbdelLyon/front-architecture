import { create } from "zustand";
import { initialComment, initialPost } from "./stateTypes";
import { sliceActions } from "./sliceActions";

const usePostActionsState = create(sliceActions(initialPost));
const useCommentActionsState = create(sliceActions(initialComment));

export { usePostActionsState, useCommentActionsState };
