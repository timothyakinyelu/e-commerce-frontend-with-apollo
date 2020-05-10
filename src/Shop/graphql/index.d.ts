export interface Category {
    id: number;
    name: string;
    slug: string;
    description: string;
    parent_id: number;
    status: number;
    children: Category[];
}