import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import Stripe from "stripe";

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173", // Upewnij się, że to adres Twojej aplikacji frontendowej
  })
);

const stripe = new Stripe(process.env.STRIPE_PRIVATE_KEY, { apiVersion: '2022-11-15' });

const storeItems = new Map([
  [1, { priceInCents: 10000, name: "Learn React Today" }],
  [2, { priceInCents: 20000, name: "Learn CSS Today" }],
  [3, { priceInCents: 15000, name: "Learn Node.js Today" }],
  [4, { priceInCents: 30000, name: "Learn Python Today" }],
]);


app.post("/create-checkout-session", async (req, res) => {
  try {
    console.log("Otrzymane items:", req.body.items); // Debugowanie danych wejściowych

    const lineItems = req.body.items.map(item => {
      // Konwersja id na liczbę, jeśli to konieczne:
      const storeItem = storeItems.get(Number(item.id));
      if (!storeItem) {
        throw new Error(`Nie znaleziono produktu o id: ${item.id}`);
      }
      console.log(`Produkt ${storeItem.name}: cena ${storeItem.priceInCents} centów, ilość ${item.quantity}`);
      return {
        price_data: {
          currency: "usd",
          product_data: {
            name: storeItem.name,
          },
          unit_amount: storeItem.priceInCents,
        },
        quantity: item.quantity,
      };
    });

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: lineItems,
      success_url: `${process.env.CLIENT_URL}/success.html`,
      cancel_url: `${process.env.CLIENT_URL}/cancel.html`,
    });

    res.json({ url: session.url });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

app.listen(3000, () => console.log("Server is running on port 3000"));
