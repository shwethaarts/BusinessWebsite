import type { BeforeAfterItem, Project, ProjectCategory } from "@/types/content";

import glassFrostingImage from "@/assets/service-glass-frosting.jpg";
import brandingStickersImage from "@/assets/service-branding-stickers.jpg";
import wallGraphicsImage from "@/assets/service-wall-graphics.jpg";
import flexBannerImage from "@/assets/service-flex-banner.jpg";
import namePlatesImage from "@/assets/service-name-plates.jpg";
import vehicleBrandingImage from "@/assets/service-vehicle-branding.jpg";
import beforeGlass from "@/assets/before-glass.jpg";
import beforeWall from "@/assets/before-wall.jpg";
import beforeVehicle from "@/assets/before-vehicle.jpg";

export const categoryLabels: Record<ProjectCategory, string> = {
  "glass-frosting": "Glass Frosting",
  "business-stickers": "Business Stickers",
  "wall-graphics": "Wall Graphics",
  "flex-banners": "Flex & Banners",
  "name-plates": "Name Plates",
  "vehicle-branding": "Vehicle Branding",
};

/**
 * Existing reference visuals plus real project photographs supplied by the owner.
 * `isPlaceholder` keeps reference images visibly labelled on the page.
 */
export const projects: Project[] = [
  {
    id: "p1",
    title: "Frosted office partition",
    category: "glass-frosting",
    image: glassFrostingImage,
    alt: "Office glass partition with frosted privacy film",
    isPlaceholder: true,
  },
  {
    id: "p2",
    title: "Shopfront branding stickers",
    category: "business-stickers",
    image: brandingStickersImage,
    alt: "Shop glass door with branded vinyl stickers",
    isPlaceholder: true,
  },
  {
    id: "p3",
    title: "Office wall graphics",
    category: "wall-graphics",
    image: wallGraphicsImage,
    alt: "Office wall finished with printed graphics",
    isPlaceholder: true,
  },
  {
    id: "p4",
    title: "Event flex banner",
    category: "flex-banners",
    image: flexBannerImage,
    alt: "Printed flex banner on a stand",
    isPlaceholder: true,
  },
  {
    id: "p5",
    title: "Home name plate",
    category: "name-plates",
    image: namePlatesImage,
    alt: "Customized home name plate on a wall",
    isPlaceholder: true,
  },
  {
    id: "p6",
    title: "Vehicle branding wrap",
    category: "vehicle-branding",
    image: vehicleBrandingImage,
    alt: "Commercial van with branded graphics",
    isPlaceholder: true,
  },
  {
    id: "banner-1",
    title: "Printed banner installation",
    category: "flex-banners",
    image: "/Banner1.jpeg",
    alt: "Printed banner work by SHWETHA ARTS",
    isPlaceholder: false,
  },
  {
    id: "banner-2",
    title: "Custom flex banner",
    category: "flex-banners",
    image: "/Banner%202.jpeg",
    alt: "Custom flex banner printed by SHWETHA ARTS",
    isPlaceholder: false,
  },
  {
    id: "banner-3",
    title: "Business banner print",
    category: "flex-banners",
    image: "/Banner%203.jpeg",
    alt: "Business banner printing work by SHWETHA ARTS",
    isPlaceholder: false,
  },
  {
    id: "banner-4",
    title: "Outdoor banner work",
    category: "flex-banners",
    image: "/Banner%204.jpeg",
    alt: "Outdoor banner work by SHWETHA ARTS",
    isPlaceholder: false,
  },
  {
    id: "branding-1",
    title: "Branding sticker work",
    category: "business-stickers",
    image: "/Branding%201.jpeg",
    alt: "Business branding sticker work by SHWETHA ARTS",
    isPlaceholder: false,
  },
  {
    id: "branding-1-1",
    title: "Custom branding stickers",
    category: "business-stickers",
    image: "/Branding%201.1.jpeg",
    alt: "Custom branding sticker work by SHWETHA ARTS",
    isPlaceholder: false,
  },
  {
    id: "frosted-sticker-1",
    title: "Frosted sticker design",
    category: "glass-frosting",
    image: "/Frosted%20sticker%201.jpeg",
    alt: "Frosted glass sticker work by SHWETHA ARTS",
    isPlaceholder: false,
  },
  {
    id: "frosted-sticker-2",
    title: "Glass frosting sticker",
    category: "glass-frosting",
    image: "/Frosted%20sticker%202.jpeg",
    alt: "Glass frosting sticker installation by SHWETHA ARTS",
    isPlaceholder: false,
  },
  {
    id: "frosted-sticker-3",
    title: "Frosted privacy sticker",
    category: "glass-frosting",
    image: "/Frosted%20sticker%203.jpeg",
    alt: "Frosted privacy sticker work by SHWETHA ARTS",
    isPlaceholder: false,
  },
  {
    id: "frosted-sticker-4",
    title: "Decorative frosted sticker",
    category: "glass-frosting",
    image: "/Frosted%20sticker%204.jpeg",
    alt: "Decorative frosted sticker work by SHWETHA ARTS",
    isPlaceholder: false,
  },
  {
    id: "home-plate-1",
    title: "Custom home name plate",
    category: "name-plates",
    image: "/Home%20Plate%201.jpeg",
    alt: "Custom home name plate by SHWETHA ARTS",
    isPlaceholder: false,
  },
  {
    id: "home-plate-2",
    title: "Home name plate design",
    category: "name-plates",
    image: "/Home%20Plate%202.jpeg",
    alt: "Home name plate design by SHWETHA ARTS",
    isPlaceholder: false,
  },
];

export const beforeAfterItems: BeforeAfterItem[] = [
  {
    id: "ba1",
    title: "Plain glass to frosted partition",
    caption: "Privacy and a finished look without losing daylight.",
    beforeImage: beforeGlass,
    afterImage: glassFrostingImage,
    isPlaceholder: true,
  },
  {
    id: "ba2",
    title: "Blank wall to branded wall",
    caption: "An empty wall turned into a branded space.",
    beforeImage: beforeWall,
    afterImage: wallGraphicsImage,
    isPlaceholder: true,
  },
  {
    id: "ba3",
    title: "Plain vehicle to moving advertisement",
    caption: "Everyday travel becomes daily brand visibility.",
    beforeImage: beforeVehicle,
    afterImage: vehicleBrandingImage,
    isPlaceholder: true,
  },
];
