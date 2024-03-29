export async function POST(req: Request) {   
  return new Response(
    "",
    {
      status: 302,
      headers: {"Location": "/"}
    }
  );
}

export async function GET(req: Request) {   
  return new Response(
    "",
    {
      status: 302,
      headers: {"Location": "/"}
    }
  );
}