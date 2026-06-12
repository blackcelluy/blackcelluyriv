export interface Service {
  id: string;
  title: string;
  description: string;
  details: string;
  iconName: string;
  avgTime: string;
  priceEstimate: string;
}

export interface CorePillar {
  title: string;
  description: string;
  iconName: string;
}

export interface WorkStep {
  number: string;
  title: string;
  description: string;
  iconName: string;
}

export interface Testimonial {
  name: string;
  rating: number;
  date: string;
  repairType: string;
  comment: string;
}

export interface Benefit {
  title: string;
  description: string;
  iconName: string;
}
