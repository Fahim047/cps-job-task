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
    instructors: {
      fields: ["id", "name", "jobTitle", "bio"], // ✅ must exist
    },
    modules: {
      fields: ["id", "title"], // ❌ removed description if it’s not a simple field
      populate: {
        classes: {
          fields: ["id", "title"], // ❌ same here
        },
        topics: {
          fields: ["id", "title"], // keep only real fields
        },
      },
    },
  },
};
