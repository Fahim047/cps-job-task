export const globalQuery = {
  populate: {
    navLinks: {
      fields: ["label", "href"],
    },
  },
};

export const landingQuery = {
  populate: {
    faqs: {
      fields: ["id", "ques", "ans"],
    },
  },
};

export const coursesQuery = {
  populate: {
    thumbnail: {
      fields: ["url", "alternativeText"],
    },
    instructors: {
      fields: ["id", "name", "jobTitle", "bio"], // ✅ must exist
    },
    modules: {
      fields: ["id", "title"],
      populate: {
        classes: {
          fields: ["id", "title"],
        },
        topics: {
          fields: ["id", "title", "resourceUrl"],
        },
      },
    },
  },
};
