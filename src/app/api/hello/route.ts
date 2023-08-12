import { NextResponse } from "next/server";

export function GET(request: Request) {
  const url = new URL(request.url);
  const Name = url.searchParams.get("Name");
  const Class = url.searchParams.get("class");
  console.log(url);
  const Obj = {
    Name: `${Name}`,
    message: `Hello
     from ${Name}, ${Class} `,
  };

  return NextResponse.json(Obj);
}

export async function POST(request: Request) {
  const req = await request.json();

  return NextResponse.json({ name: req.Name, class: req.class });
}

export function PATCH() {
  return NextResponse.json({ message: "Updated CODE" });
}
