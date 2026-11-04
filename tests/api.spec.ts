import { expect, test } from "@playwright/test";

test("GET /api/messages returns seed data", async ({ request }) => {
  const res = await request.get("/api/messages");
  expect(res.status()).toBe(200);
  const { messages } = await res.json();
  expect(messages.map((m: { name: string }) => m.name)).toContain("Sample Visitor");
});

test("POST /api/messages saves a message to the database", async ({ request }) => {
  const body = `Hello from the API test ${Date.now()}`;
  const created = await request.post("/api/messages", { data: { name: "API Test", body } });
  expect(created.status()).toBe(201);

  const { messages } = await (await request.get("/api/messages")).json();
  expect(messages.map((m: { body: string }) => m.body)).toContain(body);
});

test("POST /api/messages rejects a blank name", async ({ request }) => {
  const res = await request.post("/api/messages", { data: { name: "  ", body: "hi" } });
  expect(res.status()).toBe(400);
});
