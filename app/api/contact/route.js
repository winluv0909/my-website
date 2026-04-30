export async function POST(req) {
  const body = await req.json();

  console.log("Form Data Received:", body);

  return new Response(
    JSON.stringify({ message: "Message received!" }),
    { status: 200 }
  );
}