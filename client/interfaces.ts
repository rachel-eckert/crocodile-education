export interface Species {
  id: string;
  name: string;
  description: string;
  location: string;
  imageUrl: string;
  scientificName: string | undefined;
}
export interface Family {
  imageUrl: any;
  id: string;
  name: string | undefined;
  about: string | undefined;
  description: any;
  location: any;
  species: any;
  scientificName: any;
}
