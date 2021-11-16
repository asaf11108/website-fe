
export interface GenericResponse<T> {
    success?: boolean;
    message: T;
}

export interface Website {
    websiteId: string;
    date: string;
    widgetId: string;
    clicks: string;
    impressions: string;
    revenue: string;
}
