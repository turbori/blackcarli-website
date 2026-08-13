import { NextResponse } from "next/server";

// Proxies address search to OpenStreetMap's Nominatim service so the browser
// never has to call it directly (Nominatim requires a descriptive User-Agent,
// which browsers won't let client-side fetch() set).
export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const q = searchParams.get("q")?.trim();

  if (!q || q.length < 3) {
    return NextResponse.json({ results: [] });
  }

  const params = new URLSearchParams({
    format: "jsonv2",
    q,
    addressdetails: "0",
    limit: "5",
    countrycodes: "us",
    // Bias results toward the NYC / Long Island / CT / NJ service area.
    viewbox: "-74.4,41.3,-71.7,40.4",
    bounded: "0",
  });

  try {
    const res = await fetch(`https://nominatim.openstreetmap.org/search?${params}`, {
      headers: {
        "User-Agent": "BLACKCARLI-website/1.0 (contact: sglimo646@gmail.com)",
        "Accept-Language": "en",
      },
      // Nominatim's free tier is small — cache identical queries briefly.
      next: { revalidate: 60 },
    });

    if (!res.ok) {
      return NextResponse.json({ results: [] });
    }

    const data = await res.json();
    const results = Array.isArray(data)
      ? data.map((r: { place_id: number; display_name: string }) => ({
          id: r.place_id,
          label: r.display_name,
        }))
      : [];

    return NextResponse.json({ results });
  } catch (err) {
    console.error("Geocode error:", err);
    return NextResponse.json({ results: [] });
  }
}
