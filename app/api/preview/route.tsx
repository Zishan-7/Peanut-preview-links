import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

import { PreviewImage, PreviewType } from "@/app/components/PreviewImage";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const amount = searchParams.get("amount") ?? "";
  const name = searchParams.get("name") ?? "";
  const previewType = searchParams.get("previewType") ?? PreviewType.CLAIM;

  const url = new URL(request.url);
  const host = url.host;
  const protocol = url.protocol;

  const origin = `${protocol}//${host}`;

  // Load multiple fonts
  const [
    knerdFilledFont,
    knerdOutlineFont,
    montserratMediumFont,
    montserratSemiBoldFont,
  ] = await Promise.all([
    readFile(join(process.cwd(), "assets/fonts/knerd-filled.ttf")),
    readFile(join(process.cwd(), "assets/fonts/knerd-outline.ttf")),
    readFile(join(process.cwd(), "assets/fonts/montserrat-medium.ttf")),
    readFile(join(process.cwd(), "assets/fonts/montserrat-semibold.ttf")),
  ]);

  const arrows = {
    topLeft: `${origin}/icons/top-left-arrows.svg`,
    topRight: `${origin}/icons/top-right-arrow.svg`,
    bottomLeft: `${origin}/icons/bottom-left-arrow.svg`,
    bottomRight: `${origin}/icons/bottom-right-arrow.svg`,
  };

  return new ImageResponse(
    (
      <PreviewImage
        amount={amount}
        name={name}
        previewType={previewType as PreviewType}
        iconSrc={`${origin}/icons/peanut.svg`}
        logoSrc={`${origin}/icons/peanut_logo.svg`}
        arrowSrcs={arrows}
      />
    ),
    {
      width: 1200,
      height: 600,
      fonts: [
        { name: "Knerd", data: knerdFilledFont, style: "normal" },
        {
          name: "KnerdOutline",
          data: knerdOutlineFont,
          style: "normal",
        },
        {
          name: "Montserrat",
          data: montserratMediumFont,
          style: "normal",
        },
        {
          name: "MontserratSemiBold",
          data: montserratSemiBoldFont,
          style: "normal",
        },
      ],
    }
  );
}
