export type RequestStatus =
  | "pending"
  | "reviewing"
  | "approved"
  | "rejected"
  | "completed"
  | "cancelled";

export type UserRole =
  | "student"
  | "volunteer"
  | "mentor"
  | "teacher"
  | "researcher"
  | "ngo"
  | "admin";

export type BookStatus = "available" | "borrowed" | "reserved" | "unavailable";

export type Profile = {
  id: string;
  fullName: string;
  avatarUrl?: string | null;
  bio?: string | null;
  city?: string | null;
  university?: string | null;
  career?: string | null;
  linkedinUrl?: string | null;
  githubUrl?: string | null;
  portfolioUrl?: string | null;
  role: UserRole;
  interests: string[];
  skills: string[];
  languages: string[];
  availabilityHoursPerWeek?: number | null;
  isPublic: boolean;
};

export type Book = {
  id: string;
  title: string;
  author?: string | null;
  category: string;
  language?: string | null;
  description?: string | null;
  coverUrl?: string | null;
  status: BookStatus;
  locationLabel?: string | null;
};

export type Event = {
  id: string;
  title: string;
  description?: string | null;
  eventType: string;
  startsAt?: string | null;
  endsAt?: string | null;
  location?: string | null;
  isOnline: boolean;
  meetingUrl?: string | null;
  capacity?: number | null;
  isPublished: boolean;
};
