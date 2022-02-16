
export interface GenericResponse<T> {
    success?: boolean;
    message: T;
}

export interface Person {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    gender: string;
    birthDate: string;
    car_id?: number;
}
