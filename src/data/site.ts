export const site = {
  name: "carfdev",
  email: "info@carf.dev",
  phone: { href: "tel:+46722710280", label: "072 271 02 80" },
  github: { href: "https://github.com/carfdev", label: "github.com/carfdev" },
  location: { city: "Stockholm", country: "Sweden", countryCode: "SE" },
} as const;

export const emailHref = `mailto:${site.email}`;
export const locationLabel = `${site.location.city}, ${site.location.country}`;
