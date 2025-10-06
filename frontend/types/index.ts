export interface Topic {
  id: number;
  documentId: string;
  title: string;
  resourceUrl: string;
}

export interface Class {
  id: number;
  documentId: string;
  title: string;
  description?: string; // optional since not always returned
  videoUrl?: string;
  duration?: string;
}

export interface Module {
  id: number;
  documentId: string;
  title: string;
  description?: string;
  classes: Class[];
  topics: Topic[];
}

export interface Instructor {
  id: number;
  documentId: string;
  name: string;
  jobTitle: string;
  bio: string;
  avatar?: string; // map this from `avatar.url` or null
}

export interface Course {
  id: number;
  documentId: string;
  title: string;
  slug: string;
  description: any;
  short_description: string;
  thumbnail: {
    url: string;
    alternativeText?: string | null;
  } | null;
  instructors: Instructor[];
  modules: Module[];
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}
