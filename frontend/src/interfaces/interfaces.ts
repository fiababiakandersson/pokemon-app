export default interface Pokemon {
  id: number;
  name: string;
  types: string[];
  trainerNote?: string;
  imageUrl: string;
}
