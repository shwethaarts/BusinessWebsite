import type { Service } from "@/types/content";

import glassFrostingImage from "@/assets/service-glass-frosting.jpg";
import brandingStickersImage from "@/assets/service-branding-stickers.jpg";
import wallGraphicsImage from "@/assets/service-wall-graphics.jpg";
import flexBannerImage from "@/assets/service-flex-banner.jpg";
import namePlatesImage from "@/assets/service-name-plates.jpg";
import vehicleBrandingImage from "@/assets/service-vehicle-branding.jpg";

/**
 * Services drive the /services grid, every /services/<slug> page, the footer
 * links and the quote form dropdown.
 *
 * Adding a new service = adding one object here. No layout code changes.
 * Images are temporary reference visuals until the owner's own project
 * photographs are supplied.
 */
export const services: Service[] = [
  {
    slug: "glass-frosting",
    name: "Glass Frosting & Stickering",
    shortName: "Glass Frosting",
    cardDescription:
      "Transform plain glass doors, partitions and windows with elegant frosted designs, privacy solutions, branding graphics and customized stickers.",
    heroHeadline: "Glass Frosting & Stickering",
    heroSubline:
      "Create privacy, branding and visual appeal with professionally designed glass stickers and frosting solutions.",
    seoTitle: "Glass Frosting & Glass Stickering Services in Bangalore | SHWETHA ARTS",
    seoDescription:
      "Professional glass frosting and customized glass stickers for offices, homes and commercial spaces in Bangalore. Get a customized quote from SHWETHA ARTS.",
    image: glassFrostingImage,
    imageAlt: "Office glass partition finished with frosted film for privacy",
    intro: [
      "Glass frosting is a film applied on glass that turns a plain, transparent surface into a clean, private and professional-looking one. It can be a simple frosted band across a partition, a full privacy finish, or a design that carries your brand.",
      "We measure your glass, suggest a design that suits the space, prepare the artwork for your approval and install it neatly — so the finished result looks intentional, not improvised.",
    ],
    whereUsed: [
      "Office glass partitions",
      "Office entrance doors",
      "Home windows",
      "Conference rooms",
      "Cabin glass",
      "Reception areas",
      "Clinics",
      "Salons",
      "Restaurants",
      "Shops and commercial spaces",
    ],
    benefits: [
      "Better privacy without blocking daylight",
      "Professional, finished appearance",
      "Brand visibility at the entrance",
      "Fully customized design",
      "Easy to clean and maintain",
      "Cost-effective transformation of an existing space",
    ],
    process: [
      { title: "Understand your requirement", description: "Privacy, branding or decoration — we start with the purpose." },
      { title: "Suggest design options", description: "Patterns, bands, logos or full frosting to suit the space." },
      { title: "Confirm measurements", description: "Accurate site measurement so panels fit perfectly." },
      { title: "Prepare artwork", description: "You approve the design before anything is produced." },
      { title: "Print / manufacture", description: "Cut and printed on quality film for a durable finish." },
      { title: "Installation", description: "Clean, bubble-free application by our team." },
      { title: "Final quality check", description: "We review every panel before handing over." },
    ],
    faqs: [
      {
        question: "Does frosting block the light in my office?",
        answer:
          "No. Frosted film diffuses the view while letting daylight through, so cabins and meeting rooms stay bright but private.",
      },
      {
        question: "Can you add our logo to the frosting?",
        answer:
          "Yes. Logos, patterns and messages can be cut into the frosting or printed, giving privacy and branding together.",
      },
      {
        question: "Can it be applied to existing glass?",
        answer:
          "Yes. The film is applied to your existing glass — no replacement or civil work needed.",
      },
      {
        question: "Do you visit the site for measurement?",
        answer:
          "Yes, site visits can be arranged in and around Bengaluru. Share your location on WhatsApp and we will confirm a time.",
      },
    ],
    galleryCategory: "glass-frosting",
  },
  {
    slug: "business-branding-stickers",
    name: "Creative Business Branding Stickers",
    shortName: "Business Stickers",
    cardDescription:
      "Custom-designed stickers that help businesses communicate their brand, offers, products and identity in a visually attractive way.",
    heroHeadline: "Creative Business Branding Stickers",
    heroSubline:
      "Custom stickers and decals that put your brand, offers and identity exactly where your customers look.",
    seoTitle: "Business Branding Stickers & Sticker Printing in Bangalore | SHWETHA ARTS",
    seoDescription:
      "Custom business stickers, shop front decals and branding stickers designed, printed and installed in Bangalore. Request a quote from SHWETHA ARTS.",
    image: brandingStickersImage,
    imageAlt: "Shop front glass door with custom branding stickers applied",
    intro: [
      "A well-designed sticker does a lot of quiet work: it tells people who you are, what you offer and why they should walk in. We design and print stickers that match your brand and the surface they will live on.",
      "From shop fronts and doors to counters, walls, packaging and equipment, we handle the design, the material choice and the installation.",
    ],
    whereUsed: [
      "Shop fronts and entrance doors",
      "Reception and counter areas",
      "Showroom and product displays",
      "Offers, timings and information graphics",
      "Office walls and cabins",
      "Packaging and product labels",
      "Events and promotional setups",
    ],
    benefits: [
      "Clear brand identity at first glance",
      "Designs made for your business, not templates",
      "Attractive way to show offers and information",
      "Durable materials for indoor and outdoor use",
      "Quick to install with minimum disturbance",
      "Affordable compared to permanent signage",
    ],
    process: [
      { title: "Understand your requirement", description: "What must the sticker communicate and where will it go?" },
      { title: "Suggest design options", description: "Concepts that suit your brand and surface." },
      { title: "Confirm measurements", description: "Exact sizes so nothing looks cramped or oversized." },
      { title: "Prepare artwork", description: "Final proof shared for your approval." },
      { title: "Print / manufacture", description: "Printed and cut on the right material for the surface." },
      { title: "Installation", description: "Applied neatly by our team." },
      { title: "Final quality check", description: "Alignment and finishing verified." },
    ],
    faqs: [
      {
        question: "Can you design the sticker for us?",
        answer: "Yes. Share your idea, logo or reference and our team will create the design.",
      },
      {
        question: "Will the stickers last outdoors?",
        answer:
          "We choose materials based on where the sticker will be used, including options suited to sun and rain exposure.",
      },
      {
        question: "Can old stickers be removed and replaced?",
        answer: "Yes. We can remove existing stickers, clean the surface and apply the new branding.",
      },
    ],
    galleryCategory: "business-stickers",
  },
  {
    slug: "wall-graphics",
    name: "Wall Posters & Wall Graphics",
    shortName: "Wall Graphics",
    cardDescription:
      "Give interiors a new identity with customized wall posters, graphics, promotional designs and decorative branding solutions.",
    heroHeadline: "Wall Posters & Wall Graphics",
    heroSubline:
      "Turn blank walls into a part of your brand with customized graphics, posters and interior branding.",
    seoTitle: "Wall Graphics & Wall Stickers in Bangalore | SHWETHA ARTS",
    seoDescription:
      "Custom wall graphics, wall posters and interior branding for offices, schools, clinics and shops in Bangalore. Get a customized quote from SHWETHA ARTS.",
    image: wallGraphicsImage,
    imageAlt: "Modern office lounge with a large printed wall graphic in blue tones",
    intro: [
      "Walls are the largest empty surface in most spaces. A well-planned graphic can make an office feel considered, a classroom feel lively, or a waiting area feel welcoming.",
      "We design wall graphics around your space, brand colours and purpose, then print and install them cleanly on the existing wall.",
    ],
    whereUsed: [
      "Office reception and cabins",
      "Meeting and training rooms",
      "Schools, colleges and play homes",
      "Clinics and waiting areas",
      "Restaurants and cafes",
      "Retail interiors",
      "Gyms and studios",
    ],
    benefits: [
      "Instant change in how a space feels",
      "Reinforces your brand inside the space",
      "Designs made for the exact wall size",
      "No civil work or long shutdown",
      "Options for decorative or informational designs",
      "Strong visual impact for a modest investment",
    ],
    process: [
      { title: "Understand your requirement", description: "Purpose, mood and message for the wall." },
      { title: "Suggest design options", description: "Design directions with your brand colours." },
      { title: "Confirm measurements", description: "Wall measured and surface checked." },
      { title: "Prepare artwork", description: "Full-scale artwork shared for approval." },
      { title: "Print / manufacture", description: "Printed in panels for a seamless finish." },
      { title: "Installation", description: "Installed by our team, usually within a day." },
      { title: "Final quality check", description: "Joints and edges reviewed carefully." },
    ],
    faqs: [
      {
        question: "Will it damage the wall?",
        answer:
          "We select the material based on your wall surface and finish so installation and future removal stay clean.",
      },
      {
        question: "Can you print a photograph on the wall?",
        answer: "Yes, provided the photo is high resolution enough for the size of the wall.",
      },
      {
        question: "Do you cover the whole wall or a part of it?",
        answer: "Both are possible — full wall, a panel, or selected elements depending on your budget and design.",
      },
    ],
    galleryCategory: "wall-graphics",
  },
  {
    slug: "flex-banner-printing",
    name: "Flex & Banner Printing",
    shortName: "Flex & Banners",
    cardDescription:
      "High-quality flex and banner printing for promotions, events, openings, advertisements and business communication.",
    heroHeadline: "Flex & Banner Printing",
    heroSubline:
      "Make your event, promotion or business message impossible to miss with clean, high-quality printing.",
    seoTitle: "Flex Printing & Banner Printing in Bangalore | SHWETHA ARTS",
    seoDescription:
      "High quality flex printing and banner printing for events, openings and promotions in Bangalore. Fast quotes from SHWETHA ARTS.",
    image: flexBannerImage,
    imageAlt: "Large printed banner on a metal frame at a business event",
    intro: [
      "Banners still do the heavy lifting for openings, offers, events and announcements — as long as the design is clear and the print is clean.",
      "We design for readability first, print on quality material, and can arrange fixing at your location.",
    ],
    whereUsed: [
      "Shop openings and inaugurations",
      "Offers and seasonal promotions",
      "Events, functions and exhibitions",
      "Road-facing advertising",
      "Building and site branding",
      "Stage and backdrop printing",
      "School and college events",
    ],
    benefits: [
      "Message that is readable from a distance",
      "Sharp, clean printing",
      "Sizes made to your exact requirement",
      "Material options for indoor and outdoor use",
      "Quick turnaround for events",
      "Low cost per impression",
    ],
    process: [
      { title: "Understand your requirement", description: "Purpose, location and viewing distance." },
      { title: "Suggest design options", description: "Layouts that stay readable at full size." },
      { title: "Confirm measurements", description: "Final size and fixing method confirmed." },
      { title: "Prepare artwork", description: "Proof shared before printing." },
      { title: "Print / manufacture", description: "Printed and finished with eyelets or framing." },
      { title: "Installation", description: "Delivery or on-site fixing as required." },
      { title: "Final quality check", description: "Print quality and finishing checked." },
    ],
    faqs: [
      {
        question: "Can you print urgently for an event?",
        answer:
          "Share your date and requirement on WhatsApp — we will confirm honestly whether we can meet the timeline.",
      },
      {
        question: "Do you provide the frame or fixing?",
        answer: "Yes, frames, eyelets, ropes and on-site fixing can be arranged.",
      },
      {
        question: "Can I send my own design file?",
        answer: "Yes. Send a print-ready file and we will check the resolution and size before printing.",
      },
    ],
    galleryCategory: "flex-banners",
  },
  {
    slug: "home-name-plates",
    name: "Home Name Plates",
    shortName: "Name Plates",
    cardDescription:
      "Customized name plates designed to add a distinctive and elegant identity to your home.",
    heroHeadline: "Home Name Plates",
    heroSubline:
      "A small detail that shapes the first impression of your home — designed and finished properly.",
    seoTitle: "Custom Home Name Plates in Bangalore | SHWETHA ARTS",
    seoDescription:
      "Customized home name plates in acrylic, metal and wood finishes, designed and installed in Bangalore by SHWETHA ARTS. Get a quote today.",
    image: namePlatesImage,
    imageAlt: "Premium brushed metal name plate mounted beside a modern home entrance",
    intro: [
      "A name plate is the first thing a visitor reads at your door. We design plates that suit your entrance — the material, the size, the font and the finish all chosen to match.",
      "Options include acrylic, metal finishes, wooden looks, engraved and LED-lit styles, in designs from minimal to decorative.",
    ],
    whereUsed: [
      "Independent house entrances",
      "Apartment doors",
      "Villas and gated community homes",
      "Farmhouses",
      "Office cabins",
      "Clinic and consultation rooms",
    ],
    benefits: [
      "Distinctive, personal identity for your home",
      "Designs matched to your entrance and door",
      "Choice of materials and finishes",
      "Weather-appropriate material selection",
      "Neat, professional fixing",
      "Makes a lasting first impression",
    ],
    process: [
      { title: "Understand your requirement", description: "Style preference, names and space available." },
      { title: "Suggest design options", description: "Materials, fonts and finishes to choose from." },
      { title: "Confirm measurements", description: "Plate size confirmed for your entrance." },
      { title: "Prepare artwork", description: "Design preview shared before production." },
      { title: "Print / manufacture", description: "Cut, printed or engraved as per the design." },
      { title: "Installation", description: "Fixed securely at your doorway." },
      { title: "Final quality check", description: "Alignment and finishing verified." },
    ],
    faqs: [
      {
        question: "What materials do you offer?",
        answer: "Acrylic, metal finishes, wooden looks and engraved options — we recommend based on your entrance and exposure to weather.",
      },
      {
        question: "Can you make an LED-lit name plate?",
        answer: "Yes, backlit and LED options can be made where a power point is available.",
      },
      {
        question: "Can I choose the font and language?",
        answer: "Yes. English, Kannada and other languages can be used, in the font style you prefer.",
      },
    ],
    galleryCategory: "name-plates",
  },
  {
    slug: "vehicle-branding",
    name: "Vehicle Branding & Custom Designing",
    shortName: "Vehicle Branding",
    cardDescription:
      "Turn vehicles into moving brand ambassadors with customized stickers, graphics, promotional branding and vehicle designs.",
    heroHeadline: "Vehicle Branding & Custom Designing",
    heroSubline:
      "Your vehicle travels across the city every day — make it work as advertising while it does.",
    seoTitle: "Vehicle Branding & Car Branding in Bangalore | SHWETHA ARTS",
    seoDescription:
      "Vehicle branding, car stickers and fleet graphics designed, printed and installed in Bangalore. Get a customized quote from SHWETHA ARTS.",
    image: vehicleBrandingImage,
    imageAlt: "Commercial van finished with professional blue graphic branding",
    intro: [
      "Vehicle branding puts your name in front of thousands of people without any recurring advertising cost. The key is a design that stays readable while the vehicle moves.",
      "We design for the shape of your vehicle, print on quality vinyl and install it so the panels, curves and door lines are respected.",
    ],
    whereUsed: [
      "Cars and personal vehicles",
      "Delivery vans and goods vehicles",
      "Travel and taxi fleets",
      "Auto rickshaws",
      "Company and staff vehicles",
      "Service and maintenance fleets",
      "Promotional and campaign vehicles",
    ],
    benefits: [
      "Advertising that travels with your business",
      "One-time cost, long-term visibility",
      "Professional, credible appearance",
      "Designs built around the vehicle shape",
      "Full or partial branding to suit your budget",
      "Consistent look across an entire fleet",
    ],
    process: [
      { title: "Understand your requirement", description: "Vehicle type, coverage and message." },
      { title: "Suggest design options", description: "Mock-ups on your vehicle shape." },
      { title: "Confirm measurements", description: "Panels measured for an exact fit." },
      { title: "Prepare artwork", description: "Design approved before printing." },
      { title: "Print / manufacture", description: "Printed on durable vehicle-grade vinyl." },
      { title: "Installation", description: "Applied carefully around curves and edges." },
      { title: "Final quality check", description: "Edges, alignment and finishing inspected." },
    ],
    faqs: [
      {
        question: "Will branding damage the vehicle paint?",
        answer:
          "Vehicle-grade vinyl is designed to be applied and removed without harming good factory paint when handled properly.",
      },
      {
        question: "Can you brand a full fleet?",
        answer: "Yes. We keep the design consistent across every vehicle in the fleet.",
      },
      {
        question: "Do I need to give the vehicle for a full day?",
        answer:
          "It depends on the coverage. We confirm the time needed once we see the vehicle and the design.",
      },
    ],
    galleryCategory: "vehicle-branding",
  },
];
