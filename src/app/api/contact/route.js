/*
 * @Author: 我会想你的哈哈 2421145805@qq.com
 * @Date: 2025-11-10 15:19:03
 * @LastEditors: 我会想你的哈哈 2421145805@qq.com
 * @LastEditTime: 2025-11-12 15:27:03
 * @FilePath: \new-welding\src\app\api\contact\route.js
 * @Description:
 *
 */
import nodemailer from "nodemailer";

// const resend = new Resend("re_MuEfJv9w_68mfcXxbmD2ZSW317bHcENsM");
export async function POST(request) {
  try {
    const { name, email, message } = await request.json();
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

    const transporter = nodemailer.createTransport({
      host: "smtp.qq.com",
      port: 465,
      secure: true,
      auth: {
        user: "2421145805@qq.com",
        pass: "zhbrgmjwnjvxdjhj",
      },
    });

    const info = await transporter.sendMail({
      from: "2421145805@qq.com",
      to: "chenzx@iimt.org.cn,marketing@iimt.org.cn,sayat@iimt.org.cn,zhangzj@iimt.org.cn",
      subject,
      html,
      text,
      replyTo: email,
    });

    if (!info.accepted || info.accepted.length === 0) {
      return Response.json(
        { ok: false, error: "SMTP rejected the message" },
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
