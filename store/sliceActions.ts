import { StateCreator } from "zustand/vanilla";
import State from "./stateTypes";

export type GenericData<T> = {
  state: State;
  dataList: T[];
  setList: (dataList: T[]) => void;
  item: T | T[] | null;
  setById: (item: T) => void;
  newItem: T;
  handleInputChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
};

export const sliceActions =
  <T>(initialItem: T): StateCreator<GenericData<T>> =>
  (set, get) => ({
    state: State.Idle,
    dataList: [],
    setList: (dataList) => {
      set({ state: State.Loading });
      set({ dataList, state: State.Idle });
    },
    item: initialItem,
    setById: (item) => {
      set({ state: State.Loading });
      set({ item: item ? { ...item } : null, state: State.Idle });
    },
    newItem: initialItem,
    handleInputChange: (event) => {
      const { name, value } = event.target;
      set({
        newItem: {
          ...get().newItem,
          [name]: value,
        },
      });
    },
  });
