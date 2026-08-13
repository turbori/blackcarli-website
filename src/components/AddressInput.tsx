"use client";

import { useEffect, useRef, useState } from "react";
import { MapPin, Loader2 } from "lucide-react";

type Suggestion = { id: number; label: string };

export default function AddressInput({
  name,
  value,
  onChange,
  placeholder,
  required,
}: {
  name: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  required?: boolean;
}) {
  const [suggestions, setSuggestions] = useState<Suggestion[]>([]);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const skipNextFetch = useRef(false);

  useEffect(() => {
    const onClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  useEffect(() => {
    if (skipNextFetch.current) {
      skipNextFetch.current = false;
      return;
    }
    if (debounceRef.current) clearTimeout(debounceRef.current);

    const query = value.trim();
    debounceRef.current = setTimeout(async () => {
      if (query.length < 3) {
        setSuggestions([]);
        setLoading(false);
        return;
      }
      setLoading(true);
      try {
        const res = await fetch(`/api/geocode?q=${encodeURIComponent(query)}`);
        const data = await res.json();
        setSuggestions(data.results ?? []);
        setOpen(true);
      } catch {
        setSuggestions([]);
      } finally {
        setLoading(false);
      }
    }, query.length < 3 ? 0 : 400);

    return () => {
      if (debounceRef.current) clearTimeout(debounceRef.current);
    };
  }, [value]);

  const handleSelect = (label: string) => {
    skipNextFetch.current = true;
    onChange(label);
    setSuggestions([]);
    setOpen(false);
  };

  return (
    <div ref={containerRef} className="relative">
      <input
        type="text"
        name={name}
        required={required}
        value={value}
        autoComplete="off"
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => suggestions.length > 0 && setOpen(true)}
        placeholder={placeholder}
        className="luxury-input w-full px-4 py-3 text-sm"
      />
      {loading && (
        <Loader2
          size={14}
          className="animate-spin text-[#C9A84C] absolute right-4 top-1/2 -translate-y-1/2"
        />
      )}
      {open && suggestions.length > 0 && (
        <ul className="absolute z-20 top-full left-0 right-0 mt-1.5 max-h-64 overflow-y-auto bg-[#161616] border border-[#2A2A2A] rounded-lg shadow-xl">
          {suggestions.map((s) => (
            <li key={s.id}>
              <button
                type="button"
                onClick={() => handleSelect(s.label)}
                className="w-full flex items-start gap-2.5 text-left px-4 py-3 text-sm text-[#CCCCCC] hover:bg-[#1E1A0A] hover:text-[#C9A84C] transition-colors border-b border-[#2A2A2A] last:border-b-0"
              >
                <MapPin size={14} className="text-[#C9A84C] shrink-0 mt-0.5" />
                <span className="leading-snug">{s.label}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
