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
      coordinates: [86.5605, 20.4812], // longitude, latitude
    },

    languages: ["en", "or"],

    sortOrder: 1,

    isPublished: true,

    status: "ACTIVE",
  },

  // Future villages
  // {
  //   stateCode: "ASSAM",
  //   ...
  // }
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