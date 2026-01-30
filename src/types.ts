export interface ServiceItem {
    id: string;
    title: string;
    description: string;
    price: string;
    features: string[];
    image: string;
}

export interface Review {
    id: string;
    author: string;
    rating: number;
    text: string;
    car: string;
}
