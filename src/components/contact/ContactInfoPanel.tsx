

"use client";

import { ContactCard } from "./ContactCard";

export function ContactInfoPanel({
  contacts,
  office,
}: {
  contacts: any[];
  office: any;
}) {
  return (
    <div className="relative">
      {/* header */}
      <div className="mb-8">
        {/* <div className="mb-5 h-[2px] w-16 bg-gradient-to-r from-[#3A7BFF] via-[#4CC2FF] to-[#9B5DFF]" /> */}
        <h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-[#F2F4FA]">
          Быстрый контакт
        </h3>
        <p className="mt-3 text-sm md:text-base text-[#C7CEDF] leading-relaxed">
          Напишите в WhatsApp или отправьте письмо — отвечу быстро и по делу.
        </p>
      </div>

      {/* cards */}
      <div className="space-y-6">
        {contacts.map((contact, index) => (
          <ContactCard key={index} contact={contact} index={index} />
        ))}
      </div>

      {/* office можно использовать позже — сейчас просто принимаем проп */}
      {office ? null : null}
    </div>
  );
}
