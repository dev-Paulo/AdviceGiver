export interface MessageModel {
    message?: Message;
}

export interface Message {
    type?: string;
    text?: string;
}

// Converts JSON strings to/from your types
export class Convert {
    public static toMessageModel(json: string): MessageModel {
        return JSON.parse(json);
    }

    public static messageModelToJson(value: MessageModel): string {
        return JSON.stringify(value);
    }
}
