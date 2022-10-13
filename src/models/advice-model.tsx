export interface AdviceModel {
    slip?: Slip;
}

export interface Slip {
    id?:     number;
    advice?: string;
}

// Converts JSON strings to/from your types
export class Convert {
    public static toAdviceModel(json: string): AdviceModel {
        return JSON.parse(json);
    }

    public static adviceModelToJson(value: AdviceModel): string {
        return JSON.stringify(value);
    }
}