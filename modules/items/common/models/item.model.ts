
export interface Item {
    id: string;
    description: string;
    price?: number;
    tags?: string[];
    meta?: {
        href: string;
    };
}