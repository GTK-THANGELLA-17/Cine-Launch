
export interface ProjectType {
  id: string;
  title: string;
  director: string;
  genre: string;
  synopsis: string;
  description?: string;
  imageUrl: string;
  budget: number;
  fundingReceived: number;
  supporters: number;
  likes: number;
  createdAt: string;
  country: string;
  releaseDate: string;
  cast?: string;
  duration?: number;
  email?: string;
}
