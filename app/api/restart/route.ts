export async function POST(req: Request) {   
  console.log("POST redirect");
  return new Response(
    "",
    {
      status: 302,
      headers: {"Location": "/"}
    }
  );
}

export async function GET(req: Request) {   
  console.log("GET redirect");
  return new Response(
    "",
    {
      status: 302,
      headers: {"Location": "/"}
    }
  );
}