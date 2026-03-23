import type {Branded} from "@/common/types/branded.ts";
import * as v from "valibot";
import {parseEntity, type ParseResponse} from "@/common/parse-entity.ts";

export const PasswordSchema = v.pipe(
    v.string(),
    v.maxLength(100),
    v.minLength(6)
);

export type Password = Branded<string, 'password'>;
export type PasswordResult = ReturnType<typeof parsePassword>;

export function parsePassword(value: string | null): ParseResponse<Password> {
    return parseEntity(value, PasswordSchema) as ParseResponse<Password>;
}
