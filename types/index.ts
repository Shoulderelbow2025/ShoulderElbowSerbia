export interface ProgramItem {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  speakerId?: string;
}

export interface Speaker {
  id: string;
  name: string;
  title: string;
  institution: string;
  country: string;
  bio: string;
  imageUrl: string;
  topics?: string[];
}

export interface NewsItem {
  id: string;
  title: string;
  date: string;
  content: string;
  imageUrl?: string;
  isHighlighted?: boolean;
}

export interface Video {
  id: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  videoUrl: string;
  date: string;
  duration: string;
  speakerId?: string;
}

export interface Material {
  id: string;
  title: string;
  type: 'pdf' | 'presentation' | 'paper' | 'link';
  description: string;
  url: string;
  date: string;
  author?: string;
  thumbnailUrl?: string;
}