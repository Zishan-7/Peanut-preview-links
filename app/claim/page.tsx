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
    amount: 100,
  };

  const title = `${linkDetails.name} is sending you $${linkDetails.amount}`;

  const previewUrl = `${BASE_URL}/api/preview?amount=${linkDetails.amount}&name=${linkDetails.name}&previewType=claim`;

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
  };
}

export default async function Claim() {
  return <div>Claim</div>;
}
