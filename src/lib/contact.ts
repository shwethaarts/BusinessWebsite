import { site } from "@/content/site";

/** Builds a WhatsApp chat link with a pre-filled message. */
export function whatsappLink(message: string = site.whatsappDefaultMessage) {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

/** Builds a tel: link for the business phone number. */
export function callLink() {
  return `tel:${site.phone}`;
}

/** WhatsApp link that carries a service name into the conversation. */
export function serviceWhatsappLink(serviceName: string) {
  return whatsappLink(
    `Hi SHWETHA ARTS, I would like to enquire about ${serviceName}. Please share a quotation.`,
  );
}

/** Pre-filled WhatsApp text for a specific service enquiry. */
export function serviceWhatsappMessage(serviceName: string) {
  return `Hi ${"SHWETHA ARTS"}, I would like to enquire about ${serviceName}. Please share a quotation.`;
}
