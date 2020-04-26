const courseInfoCheckers = {
  CS: [
    {
      checker: (id) => [7, 8].includes(id),
      name: "Basic",
      group: "BASIC_INTRO",
    },
    {
      checker: (id) => 590 === id,
      name: "Special",
      group: "WRITING",
    },
    {
      checker: (id) => [401, 441, 445, 447, 449].includes(id),
      name: "Core",
      group: "CORE_REQUIREMENT",
    },
    {
      checker: (id) => id < 1000,
      name: "Weird",
      group: "WEIRD CLASS",
    },
    {
      checker: (id) => id == 1501 || id == 1502 || id == 1550,
      name: "Upper Core",
      group: "CORE_REQUIREMENT",
    },
    {
      checker: (id) => id == 1699,
      name: "Special Test Electives",
      group: "ELECTIVES",
    },
    {
      checker: (id) => id < 1600,
      orderIndex: 2,
      name: "Electives",
      group: "ELECTIVES",
    },
    {
      checker: (id) => id < 2000,
      name: "Upper Electives",
      group: "ELECTIVES",
    },
    {
      checker: (id) => id < 2100,
      name: "Grad",
      group: "GRAD",
    },
    {
      checker: (id) => id < 3000,
      name: "Upper Grad",
      group: "GRAD",
    },
    {
      checker: (id) => id < 5000,
      name: "Phd",
      group: "PHD",
    },
    {
      checker: (id) => console.error(`Unknown class no ${id}`) || true,
      name: "Unknown",
      group: "???",
    },
  ],
}

function calculateCourseLevelInfo(courseId) {
  const { subject, no } = parseCourseId(courseId)
  const checkers = courseInfoCheckers[subject]
  if (!checkers) {
    return {
      name: "Not CS",
      group: "WEIRD_CLASS",
    }
  }
  for (let i = 0; i < checkers.length; i++) {
    const levelData = checkers[i]
    if (levelData.checker(no)) {
      return {
        name: levelData.name,
        group: levelData.group,
      }
    }
  }
  console.log("fuck")
}

function parseCourseId(courseId) {
  return {
    subject: courseId.replace(/[0-9]/g, ""),
    no: Number(courseId.replace(/^\D+/g, "")),
  }
}

module.exports = {
  calculateCourseLevelInfo,
  parseCourseId,
}
