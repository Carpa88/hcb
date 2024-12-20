export interface SUnregistredApps {
  name: string;
  email: string;
  phone?: string;
  image_url?: string;
  dog_name: string;
  breed: string;
  dog_birth_year: number;
  sex: 'boy' | 'girl';
  trial: string;
  registration_date: Date;
}

export interface STrial {
  name: string;
  start_at: string;
  ends_on: string;
  judge_id: string;
  description: string;
}

export type StateTrial = {
  errors?: STrial;
  message?: string | null;
};