export type CompilerParams = [string, LanguageKeys, string | null, (output: string) => void];
export type preValueType = {code: string | null, lang: string | null, input: string | null};
export type LanguageKeys = 'cpp' | 'python';
export type DataType = {language: string; code: string;};