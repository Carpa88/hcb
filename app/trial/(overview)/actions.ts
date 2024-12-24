import { sql } from "@vercel/postgres";
import { STrial } from "../types";

export const fetchTrials = async() => {
  try {
    const data = await sql<STrial>`
      SELECT
        id,
        name,
        start_at,
        ends_on,
        judge_id
      FROM trials
      ORDER BY name ASC
    `;

    const trials = data.rows;
    return trials;
  } catch (err) {
    console.error('Database Error:', err);
    throw new Error('Failed to fetch all trials');
  }
}