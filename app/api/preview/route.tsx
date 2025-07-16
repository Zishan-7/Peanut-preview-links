import { ImageResponse } from "next/og";

import { PreviewImage, PreviewType } from "@/app/components/PreviewImage";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const amount = searchParams.get("amount") ?? "";
  const name = searchParams.get("name") ?? "";
  const previewType = searchParams.get("previewType") ?? PreviewType.CLAIM;

  return new ImageResponse(
    (
      <PreviewImage
        {...{ amount, name, previewType: previewType as PreviewType }}
      />
    ),
    {
      width: 400,
      height: 200,
    }
  );
}
