export interface Article {
    _id?: number;
    title: string;
    description: string;
    date?: string;
    author?: string;
    tags: string[];
    content?: ContentBlock[]
    status?: 'Published' | 'Draft' | 'Under Review';
}

interface ContentBlock {
    id: string;
    type: 'header' | 'text' | 'image' | 'video';
    content: string;
}