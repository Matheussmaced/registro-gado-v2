
export interface AnimalGateway {
  insert(animal: Animal): Promise<Animal>;
  findById(id: number): Promise<Animal>;
  /**
   * Adicionar demais métodos
   */
}