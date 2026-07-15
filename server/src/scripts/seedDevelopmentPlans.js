import "dotenv/config";

import { connectDB } from "../config/database.js";

import Village from "../models/Village.model.js";

import DevelopmentPlan from "../modules/developmentPlan/DevelopmentPlan.model.js";

const developmentPlans = [
  {
    villageCode: "ODI_KUSUNPUR",

    title: "Smart Irrigation System",

    category: "AGRICULTURE",

    description:
      "Installation of smart irrigation systems to improve agricultural productivity and reduce water wastage.",

    objectives: [
      "Improve crop productivity",
      "Reduce water consumption",
      "Support sustainable farming",
    ],

    status: "IN_PROGRESS",

    priority: "HIGH",

    progress: 65,

    budget: 2500000,

    fundingAgency: "CSIR-CBRI",

    implementingAgency:
      "Department of Agriculture",

    startDate: new Date("2026-01-15"),

    targetDate: new Date("2026-12-31"),

    beneficiaries: 420,

    sdgGoals: [2, 6, 12],

    sortOrder: 1,

    isPublished: true,
  },

  {
    villageCode: "ODI_KUSUNPUR",

    title: "Village Road Improvement",

    category: "INFRASTRUCTURE",

    description:
      "Strengthening internal roads and drainage system for better connectivity.",

    objectives: [
      "Improve transportation",
      "Reduce water logging",
    ],

    status: "IN_PROGRESS",

    priority: "HIGH",

    progress: 40,

    budget: 4800000,

    fundingAgency: "PMGSY",

    implementingAgency: "PWD",

    startDate: new Date("2026-02-10"),

    targetDate: new Date("2027-03-31"),

    beneficiaries: 1500,

    sdgGoals: [9, 11],

    sortOrder: 2,

    isPublished: true,
  },

  {
    villageCode: "ODI_KUSUNPUR",

    title: "Solar Street Lighting",

    category: "ENERGY",

    description:
      "Installation of solar-powered street lights across the village.",

    objectives: [
      "Improve safety",
      "Promote renewable energy",
    ],

    status: "COMPLETED",

    priority: "MEDIUM",

    progress: 100,

    budget: 1500000,

    fundingAgency: "MNRE",

    implementingAgency:
      "Renewable Energy Department",

    startDate: new Date("2025-08-01"),

    completedDate: new Date("2026-02-20"),

    beneficiaries: 1600,

    sdgGoals: [7, 11, 13],

    sortOrder: 3,

    isPublished: true,
  },

  {
    villageCode: "ODI_KUSUNPUR",

    title: "Drinking Water Supply Project",

    category: "WATER",

    description:
      "Expansion of clean drinking water infrastructure for all households.",

    objectives: [
      "Ensure safe drinking water",
      "Improve public health",
    ],

    status: "PLANNED",

    priority: "CRITICAL",

    progress: 0,

    budget: 5200000,

    fundingAgency: "Jal Jeevan Mission",

    implementingAgency:
      "Public Health Engineering Department",

    startDate: new Date("2026-08-01"),

    targetDate: new Date("2027-08-30"),

    beneficiaries: 1800,

    sdgGoals: [3, 6],

    sortOrder: 4,

    isPublished: true,
  },

  {
    villageCode: "ODI_KUSUNPUR",

    title: "Digital Skill Development Centre",

    category: "SKILL_DEVELOPMENT",

    description:
      "Establishing a digital learning centre for youth skill enhancement.",

    objectives: [
      "Increase employability",
      "Promote digital literacy",
    ],

    status: "PLANNED",

    priority: "MEDIUM",

    progress: 10,

    budget: 2100000,

    fundingAgency: "Skill India",

    implementingAgency:
      "District Skill Development Office",

    startDate: new Date("2026-10-01"),

    targetDate: new Date("2027-06-30"),

    beneficiaries: 350,

    sdgGoals: [4, 8],

    sortOrder: 5,

    isPublished: true,
  },
];

const seedDevelopmentPlans =
  async () => {
    try {
      await connectDB();

      console.log(
        "🌱 Seeding Development Plans..."
      );

      for (const plan of developmentPlans) {
        const village =
          await Village.findOne({
            villageCode:
              plan.villageCode,
          });

        if (!village) {
          console.log(
            `⚠ Village not found: ${plan.villageCode}`
          );
          continue;
        }

        const payload = {
          village: village._id,

          title: plan.title,

          category: plan.category,

          description:
            plan.description,

          objectives:
            plan.objectives,

          status: plan.status,

          priority:
            plan.priority,

          progress:
            plan.progress,

          budget: plan.budget,

          fundingAgency:
            plan.fundingAgency,

          implementingAgency:
            plan.implementingAgency,

          startDate:
            plan.startDate,

          targetDate:
            plan.targetDate,

          completedDate:
            plan.completedDate,

          beneficiaries:
            plan.beneficiaries,

          sdgGoals:
            plan.sdgGoals,

          sortOrder:
            plan.sortOrder,

          isPublished:
            plan.isPublished,
        };

        await DevelopmentPlan.updateOne(
          {
            village: village._id,
            title: plan.title,
          },
          {
            $set: payload,
          },
          {
            upsert: true,
          }
        );

        console.log(
          `✅ ${plan.title} seeded`
        );
      }

      console.log(
        "\n🎉 Development Plans seeded successfully."
      );

      process.exit(0);
    } catch (error) {
      console.error(error);

      process.exit(1);
    }
  };

seedDevelopmentPlans();