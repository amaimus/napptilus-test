import { gender } from "./enums/gender"

export function getGender (employeeGender) {
  return gender[employeeGender]
}