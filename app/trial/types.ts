export interface ITrial {
  id: string;
  name: string;
  start_at: string;
  ends_on: string;
  judge_id: string;
  description?: string;
}

interface ITrialError {
  id: string[];
  name: string[];
  start_at: string[];
  ends_on: string[];
  judge_id: string[];
  description?: string[];
}

type PartialTrial = Partial<ITrialError>;

export interface IFormState {
  errors: PartialTrial;
  message: string;
}

export interface IUnregistredApps {
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