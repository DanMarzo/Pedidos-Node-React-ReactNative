import { ReactNode } from "react";

interface OptionTypeSelect {
    label: ReactNode;
    children: ReactNode;
    disabled: boolean;
    value: any
}
export type { OptionTypeSelect }