import { AnimalHttpGateway } from "../../infra/gateways/animal-http.gateway";
import { AnimalGateway } from "../gateways/animal.gateway";

/**
 * TODO
 * Criar DTO's para os dados de entrada e saída
 */
export type AnimalDto = {
  name: string;
}
export class AddAnimalUseCase {
  constructor(private animalGateway: AnimalHttpGateway) {}

  execute(animal: AnimalDto): void {
    this.api.post(animal);
  }
}
