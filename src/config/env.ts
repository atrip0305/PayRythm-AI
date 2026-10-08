import "dotenv/config";

export const env = {
  paypalClientId: process.env.PAYPAL_CLIENT_ID!,
  paypalClientSecret: process.env.PAYPAL_CLIENT_SECRET!,
  paypalBaseUrl:
    process.env.PAYPAL_BASE_URL ??
    "https://api-m.sandbox.paypal.com",
  paypalWebhookId: process.env.PAYPAL_WEBHOOK_ID ?? "",
  port: Number(process.env.PORT ?? 3000),
};