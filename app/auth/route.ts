import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const accessToken = searchParams.get("access_token");

  if (accessToken) {
    cookies().set("Outseta.nocode.accessToken", accessToken);
  }

  redirect("/profile");
}
