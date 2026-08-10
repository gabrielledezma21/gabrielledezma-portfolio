"use client";

import { useEffect, useState } from "react";

type Call = {
  method: "GET" | "POST" | "PUT" | "DELETE";
  path: string;
  project: string;
  status: number;
  body?: string;
};

const CALLS: Call[] = [
  {
    method: "POST",
    path: "/login",
    project: "foro-hub-api",
    status: 200,
    body: '{ "token": "eyJhbGciOi..." }',
  },
  {
    method: "GET",
    path: "/api/prestadores",
    project: "medintegral-backend",
    status: 200,
    body: '[ { "id": 12, "especialidad": "clinica" } ]',
  },
  {
    method: "POST",
    path: "/api/posts",
    project: "unahur-anti-social",
    status: 201,
    body: '{ "id": "665f...", "tags": ["backend"] }',
  },
  {
    method: "PUT",
    path: "/api/afiliados/:id/datos-personales",
    project: "medintegral-backend",
    status: 200,
    body: '{ "updated": true }',
  },
  {
    method: "GET",
    path: "/topicos?page=0",
    project: "foro-hub-api",
    status: 200,
    body: '{ "content": [...], "totalPages": 3 }',
  },
  {
    method: "DELETE",
    path: "/api/agenda-turnos/:id",
    project: "medintegral-backend",
    status: 204,
  },
];

const METHOD_STYLES: Record<Call["method"], string> = {
  GET: "text-method-get border-method-get/40 bg-method-get/10",
  POST: "text-method-post border-method-post/40 bg-method-post/10",
  PUT: "text-method-put border-method-put/40 bg-method-put/10",
  DELETE: "text-method-delete border-method-delete/40 bg-method-delete/10",
};

export default function ApiConsole() {
  const [visible, setVisible] = useState<number[]>([]);
  const [cycle, setCycle] = useState(0);

  useEffect(() => {
    setVisible([]);
    let i = 0;
    const step = () => {
      i += 1;
      setVisible((prev) => [...prev, i - 1]);
      if (i < CALLS.length) {
        timeout = setTimeout(step, 900);
      } else {
        timeout = setTimeout(() => setCycle((c) => c + 1), 3200);
      }
    };
    let timeout = setTimeout(step, 500);
    return () => clearTimeout(timeout);
  }, [cycle]);

  return (
    <div className="w-full max-w-xl rounded-lg border border-line bg-bg-surface shadow-2xl shadow-black/40">
      <div className="flex items-center gap-2 border-b border-line px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-method-delete/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-signal/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-method-post/70" />
        <span className="ml-2 font-mono text-xs text-ink-muted">
          gabriel@backend:~$ requests --live
        </span>
      </div>
      <div className="h-[280px] overflow-hidden px-4 py-4 font-mono text-[13px] leading-relaxed sm:text-sm">
        {CALLS.map((call, idx) => (
          <div
            key={`${cycle}-${idx}`}
            className={`mb-3 ${visible.includes(idx) ? "animate-fadeUp" : "opacity-0"}`}
          >
            <div className="flex flex-wrap items-center gap-2">
              <span
                className={`rounded border px-1.5 py-0.5 text-[11px] font-bold ${METHOD_STYLES[call.method]}`}
              >
                {call.method}
              </span>
              <span className="text-ink">{call.path}</span>
              <span className="text-ink-faint">// {call.project}</span>
            </div>
            {call.body && (
              <div className="mt-1 pl-1 text-ink-muted">
                <span className="text-signal">{call.status}</span> {call.body}
              </div>
            )}
            {!call.body && (
              <div className="mt-1 pl-1 text-ink-muted">
                <span className="text-signal">{call.status}</span> no content
              </div>
            )}
          </div>
        ))}
        <span className="inline-block h-3.5 w-2 animate-blink bg-signal align-middle" />
      </div>
    </div>
  );
}
