import { mathsCm1 } from "./maths-cm1";
import { francaisCm1 } from "./francais-cm1";
import { anglaisCm1 } from "./anglais-cm1";
import type { Subject, Chapter } from "../types";

export const SUBJECTS: Subject[] = [mathsCm1, francaisCm1, anglaisCm1];

// Always present in the daily loop — the steady habit anchors.
export const CORE_DAILY_SUBJECT_IDS = ["maths-cm1", "francais-cm1"];

export function getSubject(id: string): Subject | undefined {
  return SUBJECTS.find((s) => s.id === id);
}

export function getChapter(subjectId: string, chapterId: string): Chapter | undefined {
  return getSubject(subjectId)?.chapters.find((c) => c.id === chapterId);
}
