export interface Event {
  title: string;
  description: string;
  time: string;
  date: string;
  location: string;
  category: Category;
  picture: string;
  priority: Priority;
  id: string;
}

export interface Category {
  value: string;
  label: string;
}

export interface Priority {
  value: string;
  label: string;
}
