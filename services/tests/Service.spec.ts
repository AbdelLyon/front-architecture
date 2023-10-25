import { beforeEach, describe, expect, it } from "vitest";
import Post from "@/domain/models/Post";
import MockAbstractService from "./mocks/MockAbstractService";

// Description du groupe de tests pour la classe AbstractService
describe("AbstractService", () => {
  let mockService: MockAbstractService<Post>;

  // Avant chaque test, crée une nouvelle instance de MockService
  beforeEach(() => {
    mockService = new MockAbstractService();
  });

  // Teste la méthode validate : elle devrait lever une erreur pour des données invalides
  it("validate method should throw error for invalid data", () => {
    const invalidData: Post = {
      id: 1 as any,
      title: "lkklksd",
      body: "56",
    };

    // Vérifie si l'appel de la méthode validate avec des données invalides lève une erreur
    expect(() => mockService["validate"](invalidData)).toThrowError(
      "Invalid data format"
    );
  });
});
