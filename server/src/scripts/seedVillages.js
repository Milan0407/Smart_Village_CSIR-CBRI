import "dotenv/config";

import {connectDB} from "../config/database.js";

import State from "../models/State.model.js";
import Village from "../models/Village.model.js";

const villages = [
  {
    stateCode: "ODISHA",

    name: {
      en: "Kusunpur",
      regional: "କୁସୁନପୁର",
    },

    slug: "kusunpur",

    villageCode: "ODI_KUSUNPUR",

    district: "Kendrapara",

    block: "Mahakalapada",

    gramPanchayat: "Kusunpur",

    pinCode: "754224",

    location: {
      type: "Point",
      coordinates: [86.2825098, 20.5808687],
    },

    languages: ["en", "or"],

    sortOrder: 1,

    isPublished: true,

    status: "ACTIVE",
  },

  {
    stateCode: "MADHYA_PRADESH",

    name: {
      en: "Janakpur",
      regional: "जनकपुर",
    },

    slug: "janakpur",

    villageCode: "MP_JANAKPUR",

    district: "Raisen",

    block: "Badi",

    gramPanchayat: "Janakpur",

    pinCode: "464668",

    location: {
      type: "Point",
      coordinates: [80.225687, 24.7346512],
    },

    languages: ["en", "hi"],

    sortOrder: 2,

    isPublished: true,

    status: "ACTIVE",
  },

  {
    stateCode: "RAJASTHAN",

    name: {
      en: "Sawaipura",
      regional: "सवाईपुरा",
    },

    slug: "sawaipura",

    villageCode: "RAJ_SAWAIPURA",

    district: "Pali",

    block: "Rohat",

    gramPanchayat: "Sawaipura",

    pinCode: "306421",

    location: {
      type: "Point",
      coordinates: [75.2090358, 25.5115379],
    },

    languages: ["en", "hi"],

    sortOrder: 3,

    isPublished: true,

    status: "ACTIVE",
  },

  {
    stateCode: "ASSAM",

    name: {
      en: "Junakimandal",
      regional: "জোনাকীমণ্ডল",
    },

    slug: "junakimandal",

    villageCode: "ASM_JUNAKIMANDAL",

    district: "Jorhat",

    block: "Titabor",

    gramPanchayat: "Birinasayak",

    pinCode: "785632",

    location: {
      type: "Point",
      coordinates: [94.1196772, 26.5333185],
    },

    languages: ["en", "as"],

    sortOrder: 4,

    isPublished: true,

    status: "ACTIVE",
  },
];

const seedVillages = async () => {
  try {
    await connectDB();

    console.log("🌱 Seeding Villages...");

    for (const village of villages) {
      const state = await State.findOne({
        code: village.stateCode,
      });

      if (!state) {
        console.log(
          `⚠ State not found: ${village.stateCode}`
        );
        continue;
      }

      const payload = {
        state: state._id,

        name: village.name,

        slug: village.slug,

        villageCode: village.villageCode,

        district: village.district,

        block: village.block,

        gramPanchayat: village.gramPanchayat,

        pinCode: village.pinCode,

        location: village.location,

        languages: village.languages,

        sortOrder: village.sortOrder,

        isPublished: village.isPublished,

        status: village.status,
      };

      await Village.updateOne(
        {
          villageCode: village.villageCode,
        },
        {
          $set: payload,
        },
        {
          upsert: true,
        }
      );

      console.log(
        `✅ ${village.name.en} seeded`
      );
    }

    console.log(
      "\n🎉 Village seeding completed."
    );

    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

seedVillages();