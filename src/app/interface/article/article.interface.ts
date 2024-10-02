export interface Article {
    id: number;
    title: string;
    description: string;
    date: string;
    author: string;
    categories: string[];
    status: 'Published' | 'Draft' | 'Under Review';
  }