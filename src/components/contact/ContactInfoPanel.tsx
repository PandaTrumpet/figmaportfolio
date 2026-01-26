"use client";

import { ContactCard } from "./ContactCard";
import { OfficeCard } from "./OfficeCard";
import { StylizedMap } from "./StylizedMap";

export function ContactInfoPanel({
  contacts,
  office,
}: {
  contacts: any[];
  office: any;
}) {
  return (
    <>
      <div className="space-y-6">
        <h3 className="text-2xl md:text-3xl mb-8">Быстрый контакт</h3>
        {contacts.map((contact, index) => (
          <ContactCard key={index} contact={contact} index={index} />
        ))}
      </div>

      <OfficeCard office={office} />
      <StylizedMap office={office} />
    </>
  );
}
