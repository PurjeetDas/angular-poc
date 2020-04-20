





export interface Gps {
    latitude: number;
    longitude: number;
}
export interface Attached {
    attachedTo: string;
    category: string;
    gps: Gps;
    name: string;
    type: string;
}

export interface ITraceable {
    attached: Attached[];
    category: string;
    gps: Gps;
    location: string;
    name: string;
    type: string;
}

