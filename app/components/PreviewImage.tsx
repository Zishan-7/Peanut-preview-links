export enum PreviewType {
  CLAIM = "claim",
  REQUEST = "request",
}

export function PreviewImage({
  name,
  amount,
  previewType,
}: {
  name: string;
  amount: string;
  previewType: PreviewType;
}) {
  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

  const title =
    previewType === PreviewType.CLAIM ? "is sending you" : "is requesting ";

  return (
    <div
      style={{
        display: "flex",
        height: "100%",
        width: "100%",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <img
        src={`${BASE_URL}/previewBg.png`}
        alt="Background"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
        }}
      >
        <label
          style={{
            fontSize: "40px",
            fontWeight: "bolder",
            color: "black",
            gap: "0px",
            fontFamily: "Knerd, sans-serif",
          }}
        >
          {name}
        </label>
        <label style={{ fontSize: "16px", fontWeight: "bold", color: "black" }}>
          {title}
        </label>

        <div
          style={{
            display: "flex",
            gap: "16px",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "1px",
          }}
        >
          <label
            style={{
              fontSize: "30px",
              fontWeight: "bold",
              color: "black",
              fontFamily: "Knerd, sans-serif",
            }}
          >
            $ {amount}
          </label>
        </div>
      </div>
    </div>
  );
}
