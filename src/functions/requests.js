import { useAuth0 } from "@auth0/auth0-react";

export const origin = process.env.REACT_APP_SERVER_ORIGIN;

export const url = (directory) => origin + directory;

// export const getAccessToken = async () => {
//   const { getAccessTokenSilently, loginWithRedirect } = useAuth0();
//   try {
//     const token = await getAccessTokenSilently();
//   } catch (error) {
//     console.error(error);
//   }
// };

// export const request = async (...params) => {
//   const response = await fetch(...params);
//   const json = await response.json();
//   return json;
// };

// export const get = async (directory) => {
//   const accessToken = await getAccessToken();
//   const json = await request(url(directory), {
//     method: "get",
//     headers: { Authorization: `Bearer ${accessToken}` },
//   });
//   return json;
// };

// export const post = async (directory, body = {}) => {
//   const accessToken = await getAccessToken();
//   const json = await request(url(directory), {
//     method: "post",
//     headers: {
//       Authorization: `Bearer ${accessToken}`,
//       "content-type": "application/json",
//     },
//     body: body,
//   });
//   return json;
// };
