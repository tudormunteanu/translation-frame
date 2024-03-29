import {Metadata} from "next";

import {API_BASE_URL} from "@/app/constants";
import {getFrameVersion} from "@/app/actions";
import {MetadataProps} from "@/app/types";

export async function generateMetadata(
  {searchParams}: MetadataProps,
): Promise<Metadata> {

  const {res} = searchParams;

  const version = await getFrameVersion();

  const imageUrl = `${API_BASE_URL}/images/result?res=${res}&version=${version}`;

  const postUrl = `${API_BASE_URL}/restart`;
  console.log("===", postUrl);
  
  const fcMetadata: Record<string, string> = {
    "fc:frame": "vNext",
    "fc:frame:image": imageUrl,
    "fc:frame:post_url": postUrl,
    "fc:frame:button:1": "🔁",
    "fc:frame:button:1:action": "post",
    "fc:frame:button:2": "Follow @tudorizer",
    "fc:frame:button:2:action": "link",
    "fc:frame:button:2:target": "https://warpcast.com/tudorizer",
  };

  return {
    title: "Translate",
    openGraph: {
      title: "Translate",
      images: ["/api/splash"],
    },
    other: {
      ...fcMetadata,
    },
    metadataBase: new URL(process.env["HOST"] || "")
  };
}

export default async function Page() {
  return <p>translated</p>;
}