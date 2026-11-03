// The only place SQL queries live. Pages and API routes call these functions.
import { env } from "cloudflare:workers";

export interface Message {
  id: number;
  name: string;
  body: string;
  created_at: string;
}

export async function listMessages(limit = 50): Promise<Message[]> {
  const { results } = await env.DB.prepare(
    "SELECT id, name, body, created_at FROM messages ORDER BY created_at DESC, id DESC LIMIT ?",
  )
    .bind(limit)
    .all<Message>();
  return results;
}

export async function addMessage(name: string, body: string): Promise<Message> {
  const message = await env.DB.prepare(
    "INSERT INTO messages (name, body) VALUES (?, ?) RETURNING id, name, body, created_at",
  )
    .bind(name, body)
    .first<Message>();
  if (!message) throw new Error("Insert returned no row");
  return message;
}
