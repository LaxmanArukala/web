export interface Lawyer {
  id: string;
  auth_id: string;
  username: string;
  first_name: string;
  last_name: string;
  full_name: string;
  email: string;
  phone: string;
  rating: string | number;
  location: string;
  address: string;
  pin_code: number;
  certification: string;
  qualification: string;
  experience: number;
  education: string
  bar_councle_no: string;
  bar_asso_name: string;
  category: string | string[]; // supports single or multiple categories
  specilization: string | string[];
  pricing: number;
  duration: number;
  bio: string;
  languages: string[];
  feedback: string;
  image: string
  achievements:  string[]
  availability: string
  practiceareas:  string[]
  successrate: string
  caseswon:string
  totalcases: string
  review_users: string | string[]
  reviews: string
  website: string
}

export interface LawyerResponse {
  success: boolean;
  data: {
    data: Lawyer[];
  };
}

export interface LawyerResponseById {
  success: boolean;
  data: {
    data: Lawyer;
  };
}