// form-context.ts file
import { createFormContext } from "@mantine/form";
import { FormValues } from "../types/FormValues";

// You can give context variables any name
export const [UserFormProvider, useUserFormContext, useUserForm] =
  createFormContext<FormValues>();
