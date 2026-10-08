import { getPayPalAccessToken } from "../src/paypal/auth.js";

async function main() {
  const token = await getPayPalAccessToken();

  console.log("PayPal authentication successful.");
  console.log(`Token received: ${token.slice(0, 12)}...`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});