import { Metadata } from "next";

interface Props {
  params: Promise<{ name: string; amount: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

  const { name, amount } = await params;

  if (!name || !amount) {
    return {
      title: "Request not found",
    };
  }

  const title = `${name} is requesting $${amount}`;

  const previewUrl = `${BASE_URL}/api/preview?amount=${amount}&name=${name}&previewType=request`;

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
