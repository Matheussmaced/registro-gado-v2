
/**
 * TODO
 * Criar DTO "PARAMS" deve ser default (se necessário)
 * - limit, page, order, filter, etc
 * - Id, Name, etc
 */
export class GetAnimalUseCase {
  constructor(private api: any) {}

  execute(params: IParams): void {
    this.api.get(animal);
  }
}
