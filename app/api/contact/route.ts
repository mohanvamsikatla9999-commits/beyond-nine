import { NextRequest, NextResponse } from "next/server";
import pool from "@/lib/db";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, business, email, phone, bizType, bizSize, challenge } = body;

    if (!name || !business || !email || !phone || !bizType || !bizSize || !challenge) {
      return NextResponse.json({ error: "All fields are required." }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
    }

    await pool.execute(`
      CREATE TABLE IF NOT EXISTS audit_requests (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        business VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        phone VARCHAR(50) NOT NULL,
        biz_type VARCHAR(100) NOT NULL,
        biz_size VARCHAR(100) NOT NULL,
        challenge VARCHAR(500) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);

    await pool.execute(
      `INSERT INTO audit_requests (name, business, email, phone, biz_type, biz_size, challenge) VALUES (?, ?, ?, ?, ?, ?, ?)`,
      [name, business, email, phone, bizType, bizSize, challenge]
    );

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Contact error:", error);
    return NextResponse.json({ error: "Internal server error." }, { status: 500 });
  }
}
