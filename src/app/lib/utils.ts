import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export function isValidJsonObjectOrArray(jsonString: string): { isValid: boolean, type?: 'object' | 'array' } {
  try {
    const parsed = JSON.parse(jsonString);

    if (typeof parsed === 'object' && parsed !== null) {
      if (Array.isArray(parsed)) {
        return { isValid: true, type: 'array' };
      }
      return { isValid: true, type: 'object' };
    }

    return { isValid: false };
  } catch (error) {
    return { isValid: false };
  }
}