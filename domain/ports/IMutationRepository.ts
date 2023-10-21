interface IMutationRepository<T> {
  create: (newData: T) => Promise<T>;
  update: (id: string, newData: T) => Promise<T | undefined>;
  delete: (id: string) => Promise<void>;
}

export default IMutationRepository;
