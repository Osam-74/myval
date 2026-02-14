
export enum Scene {
  PRE_CALL = -1,
  START = 0,
  HERO_INTRO = 1,
  IMPORTANT_NOTICE = 9,
  LOVE_STORY = 2,
  FIRST_DATE = 3,
  FAVORITE_MEMORY = 4,
  WHAT_I_LOVE = 5,
  HIDDEN_LETTER = 6,
  SUSPENSE = 7,
  FINAL_GIFT = 8
}

export interface AnimationTiming {
  fadeDuration: number;
  transitionBuffer: number;
}
