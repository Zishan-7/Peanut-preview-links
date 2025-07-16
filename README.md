This app is made using Nextjs, Typescript and Tailwind CSS

# Architechture

The app has 3 main components

- The UI: The page where user will land after clicking the link, this also contains the metadata for link previews
- The API - This api route helps gather the dynamic data that needs to be shown on link preview
- The link preview Image - This component consumes the data that is fetched in the API route and generates the dynamic link preview

When the link is shared on any social media app/messenger, The metadata for the page is gathered. For our app that metadata is built dynamically (name, amount).
This is how the flow looks for generating metadata -

- The /claim page gets the claim id passed in the URL and fetches the details related to the claim id. In our case I have mocked this data fetching. After the data is fetched a request is made to the api route - `/api/preview?amount=${claimDetails?.amount}&name=${claimDetails?.name}&previewType=claim`

- The API route handles the image generation. I have created a `PreviewImage.tsx` component that handles the image generation and adding the data that we got from the FE. After image is generated it is returned back to the FE.
- The FE then sends back the image with the metadata

# Explanation

The problem was to generate dynamic link previews, so for that to happen the main challenge was to make the link preview image dynamic. First I thought of using a SVG so that I can dynamically change the user name and amount on the fly but SVGs does not work with link previews. To solve this I did some gooogling and some ChatGPT-ingg. And reached a approach where now I am rendering a react component whenever a link is requested, This react component contains a background image(png) and on top of that it has the dynamic name and amount.

## Unresolved issues

- Font isnt working
- The preview links only have the bg, name and amount. The other SVGs are missing.

# Challenges I ran into

- Making the fonts work in the preview image - I tried importing the font and using it via css classes and inline styling but it did not work. After researching on web and finding some good resources I think it may work by reading the font as a file using fs (in the /api route) and then passing it on to the image preview. I think its not working as fonts work in a regular page because in link previews we are not rending the whole app and assests. The link preview component is like a isolated components that does not have access to all the dependecies in the app (Tailwind also does not work) So we need to provide everything explicitly.
- Testing - testing link previews was also a big challenge. I solved this via ngrok to expose my port on the internet and test it on whatsapp/tg.

## You can use these Claim IDs for testing Claim page (https://peanut-preview-links.vercel.app/claim?id={claimid})

- 1123
- 2456
- 3789
- 4012
- 5345

## For Testing request page - https://peanut-preview-links.vercel.app/request/{name}/{amount} You can use any name and amount here
