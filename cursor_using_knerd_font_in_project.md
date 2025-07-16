# Using knerd font in project
_Exported on 16/07/2025 at 21:51:44 GMT+5:30 from Cursor (1.2.4)_

---

**User**

How can i use knerd font present in @/public  here? 

---

**Cursor**

I'll help you use the `knerd-filled.ttf` font from your public directory in the `PreviewImage` component. To do this, we need to:

1. First, let's add the font declaration to your global CSS
2. Then update the component to use this font

Let me check your global CSS file first:

I'll add the font declaration to your global CSS file and then update the component to use it:

```css
@import "tailwindcss";

@font-face {
  font-family: 'Knerd';
  src: url('/knerd-filled.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}
```

Now, let's update the PreviewImage component to use this font:

```typescriptreact
const PreviewImage = ({ name, amount }: { name: string; amount: string }) => {
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
      }}
    >
      {/* <img
        src={"https://b1d2d2f777df.ngrok-free.app/previewBg.png"}
        alt="Background"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      /> */}

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
            fontSize: "100px",
            fontWeight: "bolder",
            color: "black",
            gap: "0px",
            fontFamily: "Knerd, sans-serif"
          }}
        >
          {name}
        </label>
        <label style={{ fontSize: "32px", fontWeight: "bold", color: "black" }}>
          is sending you
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
              fontSize: "64px",
              fontWeight: "bold",
              color: "black",
              fontFamily: "Knerd, sans-serif"
            }}
          >
            $ {amount}
          </label>
        </div>
      </div>
    </div>
  );
};

export default PreviewImage;
```

I've made two main changes:

1. Added the `@font-face` declaration in `globals.css` that loads the Knerd font from your public directory
2. Updated the `PreviewImage` component to use the Knerd font for both the name and amount labels by adding `fontFamily: "Knerd, sans-serif"` to their styles

The font will now be applied to the name and amount text. I've added `sans-serif` as a fallback font in case the Knerd font fails to load for any reason.

The changes should take effect immediately. You should see the Knerd font being used for the name and amount text in your preview image. Let me know if you'd like to make any adjustments to the font styling!

