"use client";

import { useState } from "react";
import {
  Plane,
  Building2,
  Heart,
  CalendarDays,
  MapPinned,
  CheckCircle,
  Loader2,
} from "lucide-react";
import { SITE, hasPhone } from "@/lib/site";

const serviceTypes = [
  { value: "airport", label: "Airport Transfer", icon: Plane },
  { value: "corporate", label: "Corporate Travel", icon: Building2 },
  { value: "point-to-point", label: "Point-to-Point", icon: MapPinned },
  { value: "hourly", label: "Hourly / As-Directed", icon: CalendarDays },
  { value: "event", label: "Wedding / Event", icon: Heart },
];

const vehicleTypes = ["Sedan (3 passengers, 3 bags)", "SUV (6 passengers, 6 bags)", "Van / Sprinter / Limo (by request)"];

const airports = ["JFK International (JFK)", "LaGuardia (LGA)", "Newark Liberty (EWR)", "Other"];

export default function QuoteForm() {
  const [serviceType, setServiceType] = useState("");
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    pickup: "",
    dropoff: "",
    date: "",
    time: "",
    passengers: "1",
    vehicle: "",
    airport: "",
    carSeat: false,
    pet: false,
    notes: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setForm((prev) => ({ ...prev, [name]: checked }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, serviceType }),
      });
      if (!res.ok) throw new Error("Failed");
      setSubmitted(true);
    } catch {
      alert(
        `Something went wrong. Please email us directly at ${SITE.email}${
          hasPhone ? ` or call ${SITE.phone}` : ""
        }.`
      );
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-[50vh] flex items-center justify-center px-6">
        <div className="text-center max-w-lg">
          <div className="w-20 h-20 rounded-full bg-[#1E1A0A] border border-[#C9A84C]/40 flex items-center justify-center mx-auto mb-6">
            <CheckCircle size={36} className="text-[#C9A84C]" />
          </div>
          <h2 className="text-3xl font-black mb-4">Request Received</h2>
          <p className="text-[#999] text-base leading-relaxed mb-6">
            Thank you, <span className="text-white font-medium">{form.name}</span>. We&apos;ve
            received your quote request and will be in touch shortly. For immediate assistance,
            email us at{" "}
            <a href={`mailto:${SITE.email}`} className="text-[#C9A84C]">
              {SITE.email}
            </a>
            .
          </p>
          <button
            onClick={() => {
              setSubmitted(false);
              setForm({
                name: "",
                phone: "",
                email: "",
                pickup: "",
                dropoff: "",
                date: "",
                time: "",
                passengers: "1",
                vehicle: "",
                airport: "",
                carSeat: false,
                pet: false,
                notes: "",
              });
              setServiceType("");
            }}
            className="btn-outline-gold px-8 py-3 rounded-lg text-sm uppercase tracking-widest"
          >
            Submit Another Request
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div>
        <label className="block text-xs font-semibold tracking-[0.2em] uppercase text-[#C9A84C] mb-4">
          Service Type <span className="text-red-500">*</span>
        </label>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {serviceTypes.map((s) => {
            const Icon = s.icon;
            return (
              <button
                key={s.value}
                type="button"
                onClick={() => setServiceType(s.value)}
                className={`flex items-center gap-3 px-4 py-3.5 rounded-xl border text-sm font-medium transition-all ${
                  serviceType === s.value
                    ? "border-[#C9A84C] bg-[#1E1A0A] text-[#C9A84C]"
                    : "border-[#2A2A2A] text-[#999] hover:border-[#C9A84C]/50"
                }`}
              >
                <Icon size={16} className="shrink-0" />
                <span className="text-xs leading-tight">{s.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-5">
        <div>
          <label className="block text-xs font-medium text-[#999] mb-2 tracking-wide">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="name"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="John Smith"
            className="luxury-input w-full px-4 py-3 text-sm"
          />
        </div>
        <div>
          <label className="block text-xs font-medium text-[#999] mb-2 tracking-wide">
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            name="phone"
            required
            value={form.phone}
            onChange={handleChange}
            placeholder="(555) 555-0000"
            className="luxury-input w-full px-4 py-3 text-sm"
          />
        </div>
        <div>
          <label className="block text-xs font-medium text-[#999] mb-2 tracking-wide">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="john@example.com"
            className="luxury-input w-full px-4 py-3 text-sm"
          />
        </div>
      </div>

      {serviceType === "airport" && (
        <div>
          <label className="block text-xs font-medium text-[#999] mb-2 tracking-wide">
            Airport
          </label>
          <select
            name="airport"
            value={form.airport}
            onChange={handleChange}
            className="luxury-input w-full px-4 py-3 text-sm"
          >
            <option value="">Select airport...</option>
            {airports.map((a) => (
              <option key={a} value={a}>
                {a}
              </option>
            ))}
          </select>
        </div>
      )}

      <div className="grid md:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs font-medium text-[#999] mb-2 tracking-wide">
            Pickup Location <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="pickup"
            required
            value={form.pickup}
            onChange={handleChange}
            placeholder="123 Main St, Garden City, NY"
            className="luxury-input w-full px-4 py-3 text-sm"
          />
        </div>
        <div>
          <label className="block text-xs font-medium text-[#999] mb-2 tracking-wide">
            Destination <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="dropoff"
            required
            value={form.dropoff}
            onChange={handleChange}
            placeholder="JFK International Airport"
            className="luxury-input w-full px-4 py-3 text-sm"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-5">
        <div>
          <label className="block text-xs font-medium text-[#999] mb-2 tracking-wide">
            Date <span className="text-red-500">*</span>
          </label>
          <input
            type="date"
            name="date"
            required
            value={form.date}
            onChange={handleChange}
            className="luxury-input w-full px-4 py-3 text-sm"
          />
        </div>
        <div>
          <label className="block text-xs font-medium text-[#999] mb-2 tracking-wide">
            Pickup Time <span className="text-red-500">*</span>
          </label>
          <input
            type="time"
            name="time"
            required
            value={form.time}
            onChange={handleChange}
            className="luxury-input w-full px-4 py-3 text-sm"
          />
        </div>
        <div>
          <label className="block text-xs font-medium text-[#999] mb-2 tracking-wide">
            Passengers
          </label>
          <select
            name="passengers"
            value={form.passengers}
            onChange={handleChange}
            className="luxury-input w-full px-4 py-3 text-sm"
          >
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <option key={n} value={n}>
                {n} {n === 1 ? "passenger" : "passengers"}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label className="block text-xs font-medium text-[#999] mb-2 tracking-wide">
          Preferred Vehicle
        </label>
        <select
          name="vehicle"
          value={form.vehicle}
          onChange={handleChange}
          className="luxury-input w-full px-4 py-3 text-sm"
        >
          <option value="">Select vehicle...</option>
          {vehicleTypes.map((v) => (
            <option key={v} value={v}>
              {v}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col sm:flex-row gap-5">
        <label className="flex items-center gap-3 text-sm text-[#999]">
          <input
            type="checkbox"
            name="carSeat"
            checked={form.carSeat}
            onChange={handleChange}
            className="w-4 h-4 accent-[#C9A84C]"
          />
          Car seat needed
        </label>
        <label className="flex items-center gap-3 text-sm text-[#999]">
          <input
            type="checkbox"
            name="pet"
            checked={form.pet}
            onChange={handleChange}
            className="w-4 h-4 accent-[#C9A84C]"
          />
          Traveling with a small pet
        </label>
      </div>

      <div>
        <label className="block text-xs font-medium text-[#999] mb-2 tracking-wide">
          Additional Notes
        </label>
        <textarea
          name="notes"
          value={form.notes}
          onChange={handleChange}
          rows={4}
          placeholder="Flight number, return trip details, special requests, etc."
          className="luxury-input w-full px-4 py-3 text-sm resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={loading || !serviceType}
        className="btn-gold w-full py-4 rounded-lg text-sm uppercase tracking-widest font-bold flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? (
          <>
            <Loader2 size={16} className="animate-spin" />
            Sending Request...
          </>
        ) : (
          "Submit Quote Request"
        )}
      </button>

      <p className="text-xs text-[#555] text-center">
        Flat-rate pricing plus tolls, wait time, and gratuity. We typically respond within a few
        hours by phone or email.
      </p>
    </form>
  );
}
