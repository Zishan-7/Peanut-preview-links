import { claimIds } from "@/utils/mockData";
import { Metadata } from "next";

interface Props {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export async function generateMetadata({
  searchParams,
}: Props): Promise<Metadata> {
  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

  const id = (await searchParams).id;

  const claimDetails = claimIds.find((claim) => claim.id === id);

  if (!claimDetails) {
    return {
      title: "Claim not found",
    };
  }

  const title = `${claimDetails?.name} is sending you $${claimDetails?.amount}`;

  const previewUrl = `${BASE_URL}/api/preview?amount=${claimDetails?.amount}&name=${claimDetails?.name}&previewType=claim`;

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
