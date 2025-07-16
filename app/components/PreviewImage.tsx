export enum PreviewType {
  CLAIM = "claim",
  REQUEST = "request",
}

export function PreviewImage({
  name,
  amount,
  previewType,
  iconSrc,
  logoSrc,
  arrowSrcs,
}: {
  name: string;
  amount: string;
  previewType: PreviewType;
  iconSrc: string;
  logoSrc: string;
  arrowSrcs: {
    topLeft: string;
    topRight: string;
    bottomLeft: string;
    bottomRight: string;
  };
}) {
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
        backgroundColor: "#fe91e6",
        gap: 16,
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 24,
          left: 34,
          display: "flex",
          alignItems: "center",
          gap: 12,
        }}
      >
        <img src={iconSrc} width={35} height={45} alt="Peanut icon" />
        <img src={logoSrc} width={130} height={25} alt="Peanut logo" />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
        }}
      >
        <h2
          style={{
            color: "black",
            fontFamily: "MontserratSemiBold, sans-serif",
            fontWeight: 700,
            fontSize: 80,
            margin: 0,
            letterSpacing: "-0.05em",
          }}
        >
          {name}
        </h2>
        <label
          style={{
            color: "black",
            fontFamily: "Montserrat, sans-serif",
            fontWeight: 500,
            fontSize: 46,
            marginBottom: 30,
          }}
        >
          {title}
        </label>

        <p
          style={{
            position: "relative",
            display: "block",
            fontSize: 200,
            lineHeight: 1,
            margin: 0,
            marginTop: 30,
          }}
        >
          <img
            src={arrowSrcs.topLeft}
            width={100}
            height={100}
            alt=""
            style={{
              position: "absolute",
              top: -110,
              left: -60,
              pointerEvents: "none",
            }}
          />

          <img
            src={arrowSrcs.topRight}
            width={130}
            height={80}
            alt=""
            style={{
              position: "absolute",
              top: -90,
              right: -100,
              pointerEvents: "none",
              transform: "rotate(5deg)",
            }}
          />

          <span
            style={{
              fontFamily: "KnerdOutline, sans-serif",
              color: "#black",
              letterSpacing: "-0.08em",
            }}
          >
            ${amount}
          </span>

          <img
            src={arrowSrcs.bottomLeft}
            width={64}
            height={96}
            alt=""
            style={{
              position: "absolute",
              bottom: 10,
              left: -20,
              pointerEvents: "none",
            }}
          />

          <img
            src={arrowSrcs.bottomRight}
            width={40}
            height={60}
            alt=""
            style={{
              position: "absolute",
              bottom: 10,
              right: -20,
              pointerEvents: "none",
              transform: "rotate(-15deg)",
            }}
          />
        </p>
      </div>
    </div>
  );
}
