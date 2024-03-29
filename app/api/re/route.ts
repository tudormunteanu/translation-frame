"use server";

export async function POST(req: Request) {
  const redirectUrl = "/start";
  return new Response(
    "",
    {
      status: 302,
      headers: {"Location": redirectUrl}
    }
  );
}
