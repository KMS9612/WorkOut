import { FieldValues, UseFormRegister } from "react-hook-form/dist/types";
import { FieldErrors } from "react-hook-form/dist/types/errors";

export interface IPropsSignInPage1 {
  onClickNextOrPrev: () => void;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
}
