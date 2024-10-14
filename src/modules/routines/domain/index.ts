export interface Routines {
  _id: string;
  name: string;
  day: string;
  image: string;
}

export interface Routine {
  _id: string;
  name: string;
  exercises: Exercise[];
  day: string;
  image: string;
  createdAt: string;
}

export interface Exercise {
  _id: string;
  name: string;
  image: string;
  sets: number;
  reps: number;
  restTime: number;
  instructions: Instruction[];
  createdAt: string;
  __v: number;
}

export interface Instruction {
  title: string;
  description: string;
  _id: string;
}
