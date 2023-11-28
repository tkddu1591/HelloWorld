export interface CartItem {
    cartNo: number;
    uid: string;
    lectureNo: number;
    title: string;
    count: number;
    price: number;
    discount: number;
    point: number;
    total: number;
}

export interface CartTotal {
    price: number
    discount: number
    total: number
    count: number
}
