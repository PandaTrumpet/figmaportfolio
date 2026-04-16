// import { NextRequest, NextResponse } from "next/server";

// export const runtime = "nodejs"; // нужен доступ к process.env (Node.js runtime)
// export const dynamic = "force-dynamic";
// type RequestBody = {
//   from_email?: string;
//   phone?: string;
//   message?: string;
//   from_name?: string;
//   // site_url?: string;
// };

// type OkResp = { ok: true };
// type ErrResp = { ok: false; error: string };

// const EMAILJS_ENDPOINT = "https://api.emailjs.com/api/v1.0/email/send";

// /** Безопасный парсинг JSON: читаем как text -> JSON.parse */
// async function getBody(req: NextRequest): Promise<RequestBody> {
//   const raw = await req.text();
//   if (!raw) return {};
//   try {
//     return JSON.parse(raw) as RequestBody;
//   } catch {
//     return {};
//   }
// }

// /** Унифицированный ответ JSON c корректными заголовками */
// function json<T extends OkResp | ErrResp>(data: T, status = 200) {
//   return NextResponse.json<T>(data, { status });
// }

// export async function POST(req: NextRequest) {
//   try {
//     const body = await getBody(req);
//     const { from_email, phone, message, from_name } = body || {};
//     // console.log("body:", body);

//     if (!from_email || !message) {
//       return json<ErrResp>({ ok: false, error: "Missing fields" }, 400);
//     }

//     const SERVICE_ID = process.env.EMAILJS_SERVICE_ID;
//     const TEMPLATE_ID = process.env.EMAILJS_TEMPLATE_ID;
//     const PRIVATE_KEY = process.env.EMAILJS_PRIVATE_KEY;
//     const PUBLIC_KEY = process.env.EMAILJS_PUBLIC_KEY;
//     console.log("keys:", { SERVICE_ID, TEMPLATE_ID, PRIVATE_KEY, PUBLIC_KEY });

//     if (!SERVICE_ID || !TEMPLATE_ID || !PRIVATE_KEY || !PUBLIC_KEY) {
//       return json<ErrResp>(
//         {
//           ok: false,
//           error:
//             "Env missing: EMAILJS_SERVICE_ID / EMAILJS_TEMPLATE_ID / EMAILJS_PRIVATE_KEY / EMAILJS_PUBLIC_KEY",
//         },
//         500,
//       );
//     }

//     const template_params = {
//       from_email,
//       phone,
//       message,
//       from_name,
//       // site_url: site_url || "",
//     };

//     // 1) Попытка с Bearer + user_id в теле
//     let r = await fetch(EMAILJS_ENDPOINT, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${PRIVATE_KEY}`,
//       },
//       body: JSON.stringify({
//         service_id: SERVICE_ID,
//         template_id: TEMPLATE_ID,
//         user_id: PUBLIC_KEY, // public обязателен
//         template_params,
//       }),
//     });

//     // 2) Fallback: accessToken в теле (для некоторых аккаунтов EmailJS)
//     if (!r.ok && (r.status === 401 || r.status === 403 || r.status === 400)) {
//       r = await fetch(EMAILJS_ENDPOINT, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           service_id: SERVICE_ID,
//           template_id: TEMPLATE_ID,
//           user_id: PUBLIC_KEY, // всё равно обязателен
//           accessToken: PRIVATE_KEY, // private в теле
//           template_params,
//         }),
//       });
//     }

//     if (!r.ok) {
//       const text = await r.text().catch(() => "");
//       console.error("EmailJS failed:", r.status, text);
//       return json<ErrResp>(
//         { ok: false, error: `EmailJS failed: ${r.status} ${text}` },
//         502,
//       );
//     }

//     return json<OkResp>({ ok: true }, 200);
//   } catch (e) {
//     console.error("contact-email error:", e);
//     return json<ErrResp>({ ok: false, error: "Server error" }, 500);
//   }
// }

// // Если кто-то дернёт GET/PUT/… — вернём 405
// // export async function GET() {
// //   return new NextResponse(
// //     JSON.stringify({ ok: false, error: "Method Not Allowed" }),
// //     { status: 405, headers: { "Allow": "POST", "Content-Type": "application/json" } }
// //   );
// // }
// export async function GET() {
//   const env = {
//     EMAILJS_SERVICE_ID: Boolean(process.env.EMAILJS_SERVICE_ID),
//     EMAILJS_TEMPLATE_ID: Boolean(process.env.EMAILJS_TEMPLATE_ID),
//     EMAILJS_PRIVATE_KEY: Boolean(process.env.EMAILJS_PRIVATE_KEY),
//     EMAILJS_PUBLIC_KEY: Boolean(process.env.EMAILJS_PUBLIC_KEY),
//   };
//   return NextResponse.json({ ok: true, env }, { status: 200 });
// }

import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type RequestBody = {
  from_email?: string;
  phone?: string;
  message?: string;
  from_name?: string;
  selected_package?: string;
  additional_services?: string;
};

type OkResp = { ok: true };
type ErrResp = { ok: false; error: string };

const EMAILJS_ENDPOINT = "https://api.emailjs.com/api/v1.0/email/send";

async function getBody(req: NextRequest): Promise<RequestBody> {
  const raw = await req.text();
  if (!raw) return {};
  try {
    return JSON.parse(raw) as RequestBody;
  } catch {
    return {};
  }
}

function json<T extends OkResp | ErrResp>(data: T, status = 200) {
  return NextResponse.json<T>(data, { status });
}

export async function POST(req: NextRequest) {
  try {
    const body = await getBody(req);

    const {
      from_email,
      phone,
      message,
      from_name,
      selected_package,
      additional_services,
    } = body || {};

    if (!from_email || !message || !from_name) {
      return json<ErrResp>(
        { ok: false, error: "Missing required fields" },
        400,
      );
    }

    const SERVICE_ID = process.env.EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = process.env.EMAILJS_TEMPLATE_ID;
    const PRIVATE_KEY = process.env.EMAILJS_PRIVATE_KEY;
    const PUBLIC_KEY = process.env.EMAILJS_PUBLIC_KEY;

    if (!SERVICE_ID || !TEMPLATE_ID || !PRIVATE_KEY || !PUBLIC_KEY) {
      return json<ErrResp>(
        {
          ok: false,
          error:
            "Env missing: EMAILJS_SERVICE_ID / EMAILJS_TEMPLATE_ID / EMAILJS_PRIVATE_KEY / EMAILJS_PUBLIC_KEY",
        },
        500,
      );
    }

    const template_params = {
      from_email,
      phone: phone || "—",
      message,
      from_name,
      selected_package: selected_package || "—",
      additional_services: additional_services || "—",
    };

    let r = await fetch(EMAILJS_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${PRIVATE_KEY}`,
      },
      body: JSON.stringify({
        service_id: SERVICE_ID,
        template_id: TEMPLATE_ID,
        user_id: PUBLIC_KEY,
        template_params,
      }),
    });

    if (!r.ok && (r.status === 400 || r.status === 401 || r.status === 403)) {
      r = await fetch(EMAILJS_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          service_id: SERVICE_ID,
          template_id: TEMPLATE_ID,
          user_id: PUBLIC_KEY,
          accessToken: PRIVATE_KEY,
          template_params,
        }),
      });
    }

    if (!r.ok) {
      const text = await r.text().catch(() => "");
      return json<ErrResp>(
        { ok: false, error: `EmailJS failed: ${r.status} ${text}` },
        502,
      );
    }

    return json<OkResp>({ ok: true }, 200);
  } catch (e) {
    console.error("contact-email error:", e);
    return json<ErrResp>({ ok: false, error: "Server error" }, 500);
  }
}

export async function GET() {
  const env = {
    EMAILJS_SERVICE_ID: Boolean(process.env.EMAILJS_SERVICE_ID),
    EMAILJS_TEMPLATE_ID: Boolean(process.env.EMAILJS_TEMPLATE_ID),
    EMAILJS_PRIVATE_KEY: Boolean(process.env.EMAILJS_PRIVATE_KEY),
    EMAILJS_PUBLIC_KEY: Boolean(process.env.EMAILJS_PUBLIC_KEY),
  };

  return NextResponse.json({ ok: true, env }, { status: 200 });
}