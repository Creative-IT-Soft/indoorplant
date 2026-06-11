export type OfficeLocation = {
  city: string;
  address: string;
  phone: string;
  email: string;
  flag?: string; // Added optional flag property
};

export type OfficeRegion = {
  region: string;
  locations: OfficeLocation[];
};

export const officeRegions: OfficeRegion[] = [
  {
    region: "North America",
    locations: [
      {
        city: "Los Angeles, California, USA",
        address: "75, East Legacy, Dr. Mountain House,\nCa 95391, USA.",
        phone: "+1 (323) 552-5543",
        email: "usa@cistechltd.com",
        flag: "🇺🇸",
      },
    ],
  },
  {
    region: "Europe",
    locations: [
      {
        city: "Berlin, Germany",
        address: "Rosenthaler Str. 72A 10119 Berlin.",
        phone: "+49 176 43841118",
        email: "hello@cistechde.eu",
        flag: "🇩🇪",
      },
    ],
  },
  {
    region: "South Asia",
    locations: [
      {
        city: "Dhaka, Bangladesh",
        address: "House 410, Road 29, Mohakhali DOHS, Dhaka-1206.",
        phone: "+8801711360197",
        email: "hello@cistechltd.com",
        flag: "🇧🇩",
      },
      {
        city: "Thimpu, Bhutan",
        address:
          "Fifth Floor, Karsang Building, Chorten Lam (Opposite to imtrat hospital),Thimphu",
        phone: "+97517119291",
        email: "bhutan@creativeitsoft.com",
        flag: "🇧🇹",
      },
    ],
  },
  {
    region: "Middle East",
    locations: [
      {
        city: "Mecca, Saudi Arabia",
        address: "Al Aziz Sadqi Street, Mecca, Saudi Arabia",
        phone: "+966 12 528 0624",
        email: "info@ozforsolutions.com",
        flag: "🇸🇦",
      },
    ],
  },
  {
    region: "Africa",
    locations: [
      {
        city: "Accra, Ghana",
        address: "No. 12 Independence Avenue, Plot-45, Block-C,\nRidge, Accra, Ghana.",
        phone: "+233501234567",
        email: "info@cistechltd.net",
        flag: "🇬🇭",
      },
    ],
  },
];