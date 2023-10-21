interface IQueryRepository<T> {
  getAll: () => Promise<T[]>;
  getById: (id: string) => Promise<T | undefined>;
}

export default IQueryRepository;
