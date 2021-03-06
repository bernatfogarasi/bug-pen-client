import { useAuth0 } from "@auth0/auth0-react";
import useResponse from "hooks/useResponse";

import useHint from "./useHint";

const useRequest = () => {
  const { getAccessTokenSilently, isAuthenticated } = useAuth0();

  const { save } = useResponse();

  const { setHint } = useHint();

  const getAccessToken = async () => {
    try {
      const accessToken = await getAccessTokenSilently();
      return accessToken;
    } catch (error) {
      // if (error.error === "login_required") {
      //   loginWithPopup();
      // }
      // if (error.error === "consent_required") {
      //   loginWithPopup();
      // }
      // throw error;
      console.log(error);
    }
  };

  const origin = process.env.REACT_APP_SERVER_ORIGIN;

  const url = (directory) => origin + directory; // + (directory.includes("?") ? "" : "/");

  const request = async (url, options, callback) => {
    console.log("REQUEST", url, options);
    const response = await fetch(url, options);
    const contentType = response.headers
      .get("content-type")
      .replace(";", " ")
      .split(" ")
      .filter((type) => type);

    if (contentType.includes("text/html")) {
      const text = await response.text();
      console.log("RESPONSE", url, options, text);
      if (isAuthenticated && text.length < 100) setHint(text, "error");
      if (callback) callback({ response, status: response.status, text });
      return { text };
    } else if (contentType.includes("application/json")) {
      const json = await response.json();
      console.log("RESPONSE", url, options, json);
      if (json) save(json);
      if (callback) callback({ response, status: response.status, json });
      return { json };
    }
    return response;
  };

  const get = async (directory, callback) => {
    const accessToken = await getAccessToken();
    const response = await request(
      url(directory),
      {
        headers: { Authorization: `Bearer ${accessToken}` },
        redirect: "follow",
        credentials: "include",
      },
      callback
    );
    return response;
  };

  const post = async (directory, body, callback) => {
    const accessToken = await getAccessToken();
    const response = await request(
      url(directory),
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "content-type": "application/json",
        },
        body: JSON.stringify({ ...body }),
        redirect: "follow",
        credentials: "include",
      },
      callback
    );
    return response;
  };

  const postFiles = async (directory, files, callback) => {
    var data = new FormData();
    for (var i = 0; i < files.length; i++) {
      data.append(i, files[i], files[i].name);
    }
    // console.log(data.get("files"));
    // callback();
    // return;
    const accessToken = await getAccessToken();
    const response = await request(
      url(directory),
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        body: data,
        redirect: "follow",
      },
      callback
    );
    return response;
  };

  return { get, post, postFiles };
};

export default useRequest;
