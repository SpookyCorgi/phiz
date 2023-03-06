import type { Input } from "postcss";

type StyledText = {
    text: string;
    color?: string;
};

type LoadingIcon = {
    state: string;
};

type Message = {
    id?: string;
    text: StyledText[];
    loading?: LoadingIcon;
};

export type Status = { message: Message[] };


export function setStatus (status: Status, setMessage: Message) {
    let update = false;

    if (setMessage.id) {
        status.message.forEach((item) => {
            if (item.id && item.id === setMessage.id) {
                item.text = setMessage.text;
                item.loading = setMessage.loading;
                update = true;
            }
        });
    }
    if (!update) {
        status.message.push(setMessage);
    }
    return status;
}

export function clearStatus (status: Status) {
    status.message = [];
    return status;
}