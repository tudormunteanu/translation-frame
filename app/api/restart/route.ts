"use server";

export async function POST(req: Request) {   
  return new Response(
    "",
    {
      status: 302,
      headers: {"Location": `${process.env.host}/start`}
    }
  );
}
