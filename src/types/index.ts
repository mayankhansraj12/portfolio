export interface Project {
  id: string
  title: string
  description: string
  longDescription: string
  tech: string[]
  github: string
  demo?: string
  thumbnail: string
  gradient: string
  category: string
}

export interface Skill {
  name: string
  icon: string
  level: 'proficient' | 'learning'
}

export interface SkillCategory {
  label: string
  skills: Skill[]
}

export interface ExperienceItem {
  type: 'education' | 'certification' | 'activity'
  title: string
  subtitle: string
  date: string
  description?: string
  link?: string
}
