// "use client";

// import { ContactCard } from "./ContactCard";

// export function ContactInfoPanel({
//   contacts,
//   office,
// }: {
//   contacts: any[];
//   office: any;
// }) {
//   return (
//     <div className="relative">
//       {/* header */}
//       <div className="mb-8">
//         {/* <div className="mb-5 h-[2px] w-16 bg-gradient-to-r from-[#3A7BFF] via-[#4CC2FF] to-[#9B5DFF]" /> */}
//         <h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-[#F2F4FA]">
//           Быстрый контакт
//         </h3>
//         <p className="mt-3 text-sm md:text-base text-[#C7CEDF] leading-relaxed">
//           Напишите в WhatsApp или отправьте письмо — отвечу быстро и по делу.
//         </p>
//       </div>

//       {/* cards */}
//       <div className="space-y-6">
//         {contacts.map((contact, index) => (
//           <ContactCard key={index} contact={contact} index={index} />
//         ))}
//       </div>

//       {/* office можно использовать позже — сейчас просто принимаем проп */}
//       {office ? null : null}
//     </div>
//   );
// }

"use client";

import type { ContactInfo, ContactData } from "@/src/data/contactData";
import { ContactCard } from "./ContactCard";

export function ContactInfoPanel({
  contacts,
  office,
}: {
  contacts: ContactInfo[];
  office: ContactData["office"];
}) {
  return (
    <div className="relative">
      <div className="mb-8">
        <h3
          id="contact-info-heading"
          className="text-2xl font-semibold tracking-tight text-[#F2F4FA] md:text-3xl"
        >
          {office.panelTitle}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-[#C7CEDF] md:text-base">
          {office.panelSubtitle}
        </p>
      </div>

      <div className="space-y-6">
        {contacts.map((contact, index) => (
          <ContactCard key={contact.link} contact={contact} index={index} />
        ))}
      </div>

      {/* <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
        <h4 className="text-lg font-medium text-[#F2F4FA]">{office.title}</h4>
        <address className="mt-3 not-italic text-sm leading-relaxed text-[#C7CEDF] md:text-base">
          <div>{office.address}</div>
          <div>{office.city}</div>
          <div className="mt-2">{office.hours}</div>
        </address>
      </div> */}
    </div>
  );
}