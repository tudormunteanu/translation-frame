"use server";

export async function POST(req: Request) {   
  return new Response(
    "",
    {
      status: 308,
      headers: {"Location": `${process.env.HOST}/start`}
    }
  );
}
