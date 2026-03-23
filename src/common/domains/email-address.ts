import type {Branded} from "@/common/types/branded.ts";
import * as v from "valibot";
import {parseEntity, type ParseResponse} from "@/common/parse-entity.ts";

export const EmailSchema = v.pipe(
    v.string(),
    v.trim(),
    v.maxLength(100),
    v.email()
);

export type EmailAddress = Branded<string, 'email'>;
export type EmailAddressResult = ReturnType<typeof parseEmail>;

export function parseEmail(value: string | null): ParseResponse<EmailAddress> {
    return parseEntity(value, EmailSchema) as ParseResponse<EmailAddress>;
}
