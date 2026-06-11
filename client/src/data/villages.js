export const villages = [
  {
    id: 1,
    name: "Disha",
    slug: "disha",
    district: "Khordha",
    state: "Odisha",
    population: "10,500",
    literacy: "72%",
    area: "7.8 km²",
    households: "2,100",
  },
  {
    id: 2,
    name: "Iwari",
    slug: "iwari",
    district: "Roorkee",
    state: "Uttarakhand",
    population: "4,500",
    literacy: "82%",
    area: "5.2 km²",
    households: "900",
  },
  {
    id: 3,
    name: "Rampur",
    slug: "rampur",
    district: "Meerut",
    state: "Uttar Pradesh",
    population: "8,200",
    literacy: "78%",
    area: "6.4 km²",
    households: "1,650",
  },
  {
    id: 4,
    name: "Shivpura",
    slug: "shivpura",
    district: "Jaipur",
    state: "Rajasthan",
    population: "6,700",
    literacy: "75%",
    area: "8.1 km²",
    households: "1,320",
  },
  {
    id: 5,
    name: "Greenfield",
    slug: "greenfield",
    district: "Nashik",
    state: "Maharashtra",
    population: "12,300",
    literacy: "85%",
    area: "9.5 km²",
    households: "2,450",
  },
];

export const getVillageBySlug = (slug) =>
  villages.find(
    (village) => village.slug === slug
  );