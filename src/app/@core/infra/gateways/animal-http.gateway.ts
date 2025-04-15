import { AnimalGateway } from "../../application/gateways/animal.gateway";

export class AnimalHttpGateway implements AnimalGateway {
  constructor(private readonly http: AxiosInstance) {}

  /**
   * Deve ser responsável apelas pela chamada HTTP
   * e não pela lógica de negócio.
   * A lógica de negócio deve estar no useCase que chama aqui.
   */
  insert(animal: Animal): Promise<Animal> {
    return this.http.post("/animals", animal.toJSON()).then((response) => {
      animal.props.id = response.data.id;
      return animal;
    });
  }

  findById(id: number): Promise<Animal> {
    return this.http.get(`/Animals/${id}`).then(
      (response) =>
        new Animal({
          id: response.data.id,
          products: response.data.products.map(
            (product: any) =>
              new Product({
                id: product.id,
                name: product.name,
                description: product.description,
                price: product.price,
              })
          ),
          credit_card_number: response.data.credit_card_number,
        })
    );
  }
}