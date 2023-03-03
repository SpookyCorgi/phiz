import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        /** Required. Set a unique name for the file input.*/
        name: string;
        /** Provide classes to set the border styles.*/
        border?: string | undefined;
        /** Provide classes to set the padding styles.*/
        padding?: string | undefined;
        /** Provide classes to set the box radius styles.*/
        rounded?: string | undefined;
        /** Provide abitrary styles for the UI region.*/
        regionInterface?: string | undefined;
        /** Provide abitrary styles for the UI text region.*/
        regionInterfaceText?: string | undefined;
        /** Provide abitrary styles for lead slot container.*/
        slotLead?: string | undefined;
        /** Provide abitrary styles for message slot container.*/
        slotMessage?: string | undefined;
        /** Provide abitrary styles for meta text slot container.*/
        slotMeta?: string | undefined;
    };
    events: {
        change: Event;
        dragenter: DragEvent;
        dragover: DragEvent;
        dragleave: DragEvent;
        drop: DragEvent;
        click: MouseEvent;
        keydown: KeyboardEvent;
        keyup: KeyboardEvent;
        keypress: KeyboardEvent;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        lead: {};
        message: {};
        meta: {};
    };
};
export type FileDropzoneProps = typeof __propDef.props;
export type FileDropzoneEvents = typeof __propDef.events;
export type FileDropzoneSlots = typeof __propDef.slots;
export default class FileDropzone extends SvelteComponentTyped<FileDropzoneProps, FileDropzoneEvents, FileDropzoneSlots> {
}
export {};
