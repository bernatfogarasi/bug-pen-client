import { useAuth0 } from "@auth0/auth0-react";

const useRequest = () => {
  const { user, getAccessTokenSilently, loginWithRedirect } = useAuth0();

  const getAccessToken = async () => {
    try {
      const accessToken = await getAccessTokenSilently();
      return accessToken;
    } catch (error) {
      if (error.error === "login_required") {
        loginWithRedirect();
      }
      if (error.error === "consent_required") {
        loginWithRedirect();
      }
      throw error;
    }
  };

  const origin = "http://localhost:8000";

  const url = (directory) => origin + directory + "/";

  const request = async (...params) => {
    console.log("REQUEST", params);
    const response = await fetch(...params);
    const contentType = response.headers
      .get("content-type")
      .replace(";", " ")
      .split(" ")
      .filter((type) => type);
    if (contentType.includes("text/html")) {
      const text = await response.text();
      console.log("RESPONSE", params, text);
      return { text };
    } else if (contentType.includes("application/json")) {
      const json = await response.json();
      console.log("RESPONSE", params, json);
      return { json };
    }
  };

  const get = async (directory) => {
    const accessToken = await getAccessToken();
    const response = await request(url(directory), {
      headers: { Authorization: `Bearer ${accessToken}` },
    });
    return response;
  };

  const post = async (directory, body) => {
    const accessToken = await getAccessToken();
    const response = await request(url(directory), {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "content-type": "application/json",
      },
      body: JSON.stringify({ ...body }),
    });
    return response;
  };

  return { get, post };
};

export default useRequest;
