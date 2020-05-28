export interface Category {
    id: number;
    name: string;
    slug: string;
    description: string;
    parent_id: number;
    status: number;
    children: Category[];
    products: ProductEdges;
}

export interface ProductEdges {
    edges: ProductNode[];
    pageInfo: ProductPageInfo
}

export interface ProductPageInfo {
    hasNextPage: boolean;
    endCursor: number;
    count: number;
    total: number;
}

export interface ProductNode {
    node: ProductInfo;
}

export interface ProductInfo {
    id: number;
    brand_id: number;
    sku: string;
    gtin: string;
    name: string;
    slug: string;
    short_description: string;
    full_description: string;
    color: string;
    price: float;
    old_price: float;
    discount: float;
    featured: boolean;
    status: number;
    stock: number;
    image: string;
    images: string;
    brand: Brand;
}

export interface Brand {
    id: number;
    name: string;
    slug: string;
    description: string;
    status: number;
    products: Product[];
}