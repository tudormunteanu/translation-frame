"use server";

import {parseFramePayload} from "@/app/frames";
import {translateTo, TargetLanguageCode} from "@/app/actions";

export async function POST(req: Request) {   
  
  try {
    const {buttonIndex, parentCastText} = await parseFramePayload(await req.json());

    const defaultLang = "es";
    // TODO: fix the forced typing
    const buttonIndexToLang = new Map<number, string>([
      [1, "es"],
      [2, "fr"],
      [3, "de"],
    ]) as Map<number, TargetLanguageCode>;

    const cleanText = parentCastText?.replace(/https?:\/\/\S+/g, "");
    const targetLang = buttonIndexToLang.get(buttonIndex) || defaultLang;

    const translatedText = await translateTo(cleanText || "empty", targetLang);
    const encodedText = encodeURIComponent(translatedText);
    const redirectUrl = `/translate?res=${encodedText}`;

    return new Response(
      "",
      {
        status: 302,
        headers: {"Location": redirectUrl}
      }
    );
  } catch (e) {
    return new Response(
      `Failed validate action: ${e}`,
      {status: 400}
    );     
  }
}