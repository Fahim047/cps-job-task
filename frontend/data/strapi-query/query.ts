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
