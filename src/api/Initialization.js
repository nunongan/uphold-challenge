import SDK from "@uphold/uphold-sdk-javascript";

const sdk = new SDK({
  baseUrl: "https://api-sandbox.uphold.com",
  clientId: `${process.env.REACT_APP_CLIENT_ID}`,
  clientSecret: `${process.env.REACT_APP_CLIENT_SECRET}`,
});

export default sdk;
