import { env } from "../config/env.js";

export async function getPayPalAccessToken(): Promise<string> {
  const credentials = Buffer.from(
    `${env.paypalClientId}:${env.paypalClientSecret}`
  ).toString("base64");

  const response = await fetch(
    `${env.paypalBaseUrl}/v1/oauth2/token`,
    {
      method: "POST",
      headers: {
        Authorization: `Basic ${credentials}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: "grant_type=client_credentials",
    }
  );

  if (!response.ok) {
    const error = await response.text();
    throw new Error(
      `PayPal authentication failed: ${response.status} ${error}`
    );
  }

  const data = await response.json();

  return data.access_token;
}