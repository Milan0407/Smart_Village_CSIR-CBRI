import State from "../../models/State.model.js";
import Village from "../../models/Village.model.js";
import DevelopmentPlan from "../developmentPlan/DevelopmentPlan.model.js";
import Event from "../events/Event.model.js";

export const getHomeStats = async () => {
  const [
    villagesCovered,
    statesCovered,
    developmentPlans,
    technologiesResult,
    eventsAndAchievements,
  ] = await Promise.all([
    Village.countDocuments({
      isPublished: true,
      status: "ACTIVE",
      isActive: true,
    }),

    State.countDocuments({
      isPublished: true,
    }),

    DevelopmentPlan.countDocuments({
      isPublished: true,
    }),

    DevelopmentPlan.aggregate([
      {
        $match: {
          isPublished: true,
        },
      },
      {
        $unwind: "$sectors",
      },
      {
        $unwind: "$sectors.technologies",
      },
      {
        $count: "total",
      },
    ]),

    Event.countDocuments({
      published: true,
      isDeleted: false,
    }),
  ]);

  return {
    villagesCovered,
    statesCovered,
    technologiesDeployed: technologiesResult[0]?.total || 0,
    developmentPlans,
    eventsAndAchievements,
  };
};
