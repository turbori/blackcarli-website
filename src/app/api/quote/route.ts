import { Resend } from "resend";
import { NextResponse } from "next/server";
import { SITE } from "@/lib/site";

export async function POST(req: Request) {
  try {
    if (!process.env.RESEND_API_KEY) {
      console.error("Quote form error: RESEND_API_KEY is not configured.");
      return NextResponse.json(
        { error: "Email is not configured yet. Please contact us directly." },
        { status: 500 }
      );
    }
    const resend = new Resend(process.env.RESEND_API_KEY);

    const body = await req.json();
    const {
      name,
      phone,
      email,
      pickup,
      dropoff,
      date,
      time,
      passengers,
      vehicle,
      airport,
      carSeat,
      pet,
      notes,
      serviceType,
    } = body;

    const serviceLabels: Record<string, string> = {
      airport: "Airport Transfer",
      corporate: "Corporate Travel",
      "point-to-point": "Point-to-Point",
      hourly: "Hourly / As-Directed",
      event: "Wedding / Event",
    };

    const { error } = await resend.emails.send({
      from: `${SITE.name} Quote <onboarding@resend.dev>`,
      to: SITE.email,
      replyTo: email || undefined,
      subject: `New Quote Request — ${serviceLabels[serviceType] ?? serviceType} — ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #0a0a0a; color: #ffffff; padding: 32px; border-radius: 8px;">
          <div style="border-bottom: 2px solid #C9A84C; padding-bottom: 16px; margin-bottom: 24px;">
            <h1 style="color: #C9A84C; font-size: 24px; margin: 0;">New Quote Request</h1>
            <p style="color: #999; margin: 8px 0 0;">${SITE.name} — ${new Date().toLocaleString("en-US", { timeZone: "America/New_York" })}</p>
          </div>

          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #1E1E1E; color: #C9A84C; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; width: 140px;">Service Type</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #1E1E1E; color: #ffffff; font-weight: bold;">${serviceLabels[serviceType] ?? serviceType}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #1E1E1E; color: #C9A84C; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Name</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #1E1E1E; color: #ffffff;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #1E1E1E; color: #C9A84C; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Phone</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #1E1E1E; color: #ffffff;"><a href="tel:${phone}" style="color: #C9A84C;">${phone}</a></td>
            </tr>
            ${email ? `
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #1E1E1E; color: #C9A84C; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Email</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #1E1E1E; color: #ffffff;"><a href="mailto:${email}" style="color: #C9A84C;">${email}</a></td>
            </tr>` : ""}
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #1E1E1E; color: #C9A84C; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Pickup</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #1E1E1E; color: #ffffff;">${pickup}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #1E1E1E; color: #C9A84C; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Destination</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #1E1E1E; color: #ffffff;">${dropoff}</td>
            </tr>
            ${airport ? `
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #1E1E1E; color: #C9A84C; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Airport</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #1E1E1E; color: #ffffff;">${airport}</td>
            </tr>` : ""}
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #1E1E1E; color: #C9A84C; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Date</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #1E1E1E; color: #ffffff;">${date}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #1E1E1E; color: #C9A84C; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Pickup Time</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #1E1E1E; color: #ffffff;">${time}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #1E1E1E; color: #C9A84C; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Passengers</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #1E1E1E; color: #ffffff;">${passengers}</td>
            </tr>
            ${vehicle ? `
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #1E1E1E; color: #C9A84C; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Vehicle</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #1E1E1E; color: #ffffff;">${vehicle}</td>
            </tr>` : ""}
            ${carSeat ? `
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #1E1E1E; color: #C9A84C; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Car Seat</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #1E1E1E; color: #ffffff;">Requested</td>
            </tr>` : ""}
            ${pet ? `
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #1E1E1E; color: #C9A84C; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Pet</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #1E1E1E; color: #ffffff;">Traveling with small pet</td>
            </tr>` : ""}
            ${notes ? `
            <tr>
              <td style="padding: 10px 0; color: #C9A84C; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; vertical-align: top;">Notes</td>
              <td style="padding: 10px 0; color: #ffffff;">${notes}</td>
            </tr>` : ""}
          </table>

          <div style="margin-top: 32px; padding: 16px; background: #1a1a1a; border-radius: 6px; border-left: 3px solid #C9A84C;">
            <p style="margin: 0; color: #999; font-size: 13px;">Reply directly to this email to respond to the client${email ? ` at <strong style="color: #C9A84C;">${email}</strong>` : ""}. Call or text <strong style="color: #C9A84C;">${phone}</strong> for immediate contact.</p>
          </div>
        </div>
      `,
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Quote form error:", err);
    return NextResponse.json({ error: "Failed to send" }, { status: 500 });
  }
}
