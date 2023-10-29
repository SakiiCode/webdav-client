import base64 from "base-64";
import he from "he";
import { isWeb } from "../compat/env.js";

export function decodeHTMLEntities(text: string): string {
    return he.decode(text);
}

export function fromBase64(text: string): string {
    return base64.decode(text);
}

export function toBase64(text: string): string {
    return base64.encode(text);
}
