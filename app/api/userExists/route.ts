import { connectDB } from "@/lib/mongodb";
import { User } from "@/models/user";
import { NextResponse } from "next/server";

export async function POST(req: any) {
  try {
    const { data } = await req.json();
    console.log(data.email);
    const email = data.email;

    // return NextResponse.json({ email });
    await connectDB();
    const user = await User.findOne({ email }).select("_id");
    console.log("User: ", user);
    return NextResponse.json({ user });
  } catch (e) {
    console.log(e);
  }
}
