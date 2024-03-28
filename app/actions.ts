"use server";

import * as deepl from "deepl-node";

const authKey = process.env.DEEPL_KEY || "";

export type TargetLanguageCode = deepl.TargetLanguageCode;

export const translateTo = async (
  text: string, to: deepl.TargetLanguageCode
): Promise<string> => {
  try {
    const translator = new deepl.Translator(authKey);
    const result = await translator.translateText(text, null, to);
    return result.text;
  } catch (e) {
    console.error(`Failed to translate text: ${e}`);
    console.error({text, to});
    return text;
  }
};

export async function getFrameVersion(): Promise<number> {
  // Use this version to avoid caching issues.
  return Date.now() / 1000;
};