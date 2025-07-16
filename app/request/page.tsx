import { Metadata } from "next";

interface Props {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export async function generateMetadata({
  searchParams,
}: Props): Promise<Metadata> {
  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

  const linkDetails = {
    name: "John Doe",
    amount: 76.8,
  };

  const title = `${linkDetails.name} is requesting $${linkDetails.amount}`;

  const previewUrl = `${BASE_URL}/api/preview?amount=${linkDetails.amount}&name=${linkDetails.name}&previewType=request`;

  return {
    title: title,
    icons: {
      icon: "/favicon.ico",
    },
    openGraph: {
      images: [
        {
          url: previewUrl,
        },
      ],
    },
    twitter: {
      images: [
        {
          url: previewUrl,
        },
      ],
    },
  };
}

export default function Request() {
  return <div>Request</div>;
}
