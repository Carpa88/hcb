import { initialState } from "@app/lib/consts";

export const createTrialErrors = {
  name: [],
  start_at: [],
  ends_on: [],
  judge_id: [],
  description: []
};

export const initCreateTrial = initialState(createTrialErrors);