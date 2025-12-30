export async function POST(request) {
  try {
    const data = await request.json();

    console.log("=================>", data);

    const upstreamResponse = await fetch(
      "https://script.google.com/macros/s/AKfycbxIAqku1oOLLUpM8dU_WrxUPmttWw1GmPPydDlZsDtp3OVadhZsZYkYLKpxFoJ1JArHkA/exec",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      }
    );

    console.log(upstreamResponse);

    if (!upstreamResponse.ok) {
      const details = await upstreamResponse.text().catch(() => "");
      return Response.json(
        { error: "Upstream request failed", details },
        { status: 502 }
      );
    }

    return Response.json({ status: "success" }, { status: 200 });
  } catch (error) {
    return Response.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export function GET() {
  return Response.json({ message: "Method not allowed" }, { status: 405 });
}
