export interface Blog {
  id: number;
  title: string;
  description: string;
  excerpt: string;
  author: string;
  category: string;
  image?: string;
  date: string;
  read_time: string

}

export interface BlogResponse {
  success: boolean;
  data: {
    data: Blog[];
  };
}

export interface BlogResponseByID {
  success: boolean;
  data: {
    data: Blog;
  };
}