import {Metadata} from "next";

import {API_BASE_URL} from "@/app/constants";
import {getFrameVersion} from "@/app/actions";

export async function generateMetadata(): Promise<Metadata> {

  const version = await getFrameVersion();
  const imageUrl = `${API_BASE_URL}/images/splash?version=${version}`;

  const fcMetadata: Record<string, string> = {
    "fc:frame": "vNext",
    "fc:frame:post_url": `${API_BASE_URL}/translate`,
    "fc:frame:image": imageUrl,
    "fc:frame:button:1": "🇪🇸",
    "fc:frame:button:1:type": "action",
    "fc:frame:button:2": "🇫🇷",
    "fc:frame:button:2:type": "action",
    "fc:frame:button:3": "🇩🇪",
    "fc:frame:button:3:type": "action"
  };

  return {
    title: "Translator",
    openGraph: {
      title: "Translation Frame",
      images: [imageUrl],
    },
    other: {
      ...fcMetadata,
    },
    metadataBase: new URL(process.env["HOST"] || "")
  };
}

export default async function Page() {
  return <p>hola</p>;

}