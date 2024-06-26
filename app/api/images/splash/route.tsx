"use server";

import sharp from "sharp";
import satori from "satori";
import {join} from "path";
import * as fs from "fs";

const fontPath = join(process.cwd(), "Roboto-Regular.ttf");
let fontData = fs.readFileSync(fontPath);

export async function GET(req: Request) {      
  try {

    const svg = await satori(
      <div style={{
        justifyContent: "flex-start",
        alignItems: "center",
        display: "flex",
        width: "100%",
        height: "100%",
        backgroundColor: "#2B2834",
        backgroundImage: `url(${process.env.HOST}/images/translate-bg-dark.png)`,
        backgroundSize: "cover",
        backgroundPosition: "7% 12%",
        padding: 50,
        lineHeight: 1.2,
        fontSize: 24,
      }}>
        <div style={{
          display: "flex",
          flexDirection: "column",
          padding: 20,
          textAlign: "left", 
          color: "#FDF8FF"
        }}>
          <p>
            Translate the above cast to one of the languages below.
          </p>
        </div>
      </div>
      ,
      {
        width: 600, height: 400, fonts: [{
          data: fontData,
          name: "Roboto",
          style: "normal",
          weight: 400
        }]
      });

    const pngBuffer = await sharp(Buffer.from(svg))
      .toFormat("png")
      .toBuffer();

    return new Response(pngBuffer, {
      headers: {
        "Content-Type": "image/png",
        "Cache-Control": "max-age=10",
      },
    });
  } catch (error) {
    console.error("Error generating image", error);
    return new Response("Error generating image", {status: 500});
  }
}
