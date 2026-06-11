import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { firstName, lastName, email, phone, message } = await req.json();

  const { error } = await resend.emails.send({
    from: "Asbery & Associates <notifications@notifications.databridge.health>",
    to: "vrain.ahuja@databridge.health",
    subject: `New Appointment Request — ${firstName} ${lastName}`,
    html: `
      <h2>New Appointment Request</h2>
      <p><strong>Name:</strong> ${firstName} ${lastName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Message:</strong> ${message || "None provided"}</p>
    `,
  });

  if (error) {
    return NextResponse.json({ error }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
