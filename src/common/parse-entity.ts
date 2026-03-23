import * as v from "valibot";

export type ParseResponse<T> = {
  valid: false;
  issues: v.BaseIssue<unknown>[]
} | {
  valid: true;
  value: T;
}

export function parseEntity<T, S extends v.BaseSchema<unknown, T, v.BaseIssue<unknown>>>(entity: T | null, schema: S): ParseResponse<T> {
  if (!entity) return { valid: false, issues: [] };

  const parseResult = v.safeParse(schema, entity);

  if (! parseResult.success)
    return { valid: false, issues: parseResult.issues };

  return { valid: true, value: parseResult.output as T };
}

export function getValidationErrorForField(
  response: ParseResponse<unknown> | null,
  fieldName: string
): boolean {
  if (response == null || response.valid) return false;

  const fieldIssue = response.issues.find(issue =>
    issue.path?.[0]?.key === fieldName
  );

  return fieldIssue != null;
}
