/*
 * @Author: 我会想你的哈哈 2421145805@qq.com
 * @Date: 2025-11-10 15:19:03
 * @LastEditors: 我会想你的哈哈 2421145805@qq.com
 * @LastEditTime: 2025-11-12 10:41:26
 * @FilePath: \new-welding\src\app\api\contact\route.js
 * @Description: 
 * 
 */
import { Resend } from "resend";

const resend = new Resend("re_MuEfJv9w_68mfcXxbmD2ZSW317bHcENsM");
export async function POST(request) {
  try {
    const { name, email, message } = await request.json();
    //     const apiKey = process;
    // console.log("apiKey==", apiKey);
    if (!name || !email || !message) {
      return Response.json(
        { ok: false, error: "Missing required fields" },
        { status: 400 }
      );
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return Response.json(
        { ok: false, error: "Invalid email" },
        { status: 400 }
      );
    }

    const subject = `New contact message from ${name}`;
    const html = `
      <div>
        <h3>New contact message</h3>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(message).replace(/\n/g, "<br/>")}</p>
      </div>
    `;
    const text = `New contact message\nName: ${name}\nEmail: ${email}\nMessage:\n${message}`;

    const resp = await resend.emails.send({
      from: "onboarding@resend.dev",// 生产建议换成已验证域名的发件人
      // chenzhixin2233@gmail.com
      // saiat071199@gmail.com
      to: "chenzhixin2233@gmail.com",
      subject,
      html,
      text,
      replyTo: email,
    });

    if (resp.error) {
      return Response.json(
        { ok: false, error: resp.error.message },
        { status: 500 }
      );
    }

    return Response.json({ ok: true });
  } catch (err) {
    return Response.json(
      { ok: false, error: err?.message || "Unexpected error" },
      { status: 500 }
    );
  }
}

function escapeHtml(str) {
  return String(str).replace(
    /[&<>"']/g,
    (ch) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[
        ch
      ] || ch)
  );
}
