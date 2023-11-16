import {
  forwardRef,
  type ComponentPropsWithoutRef,
  HTMLAttributes,
} from "react";
import { ErrorMessage } from "./error-message";
import styles from "./input.module.scss";
import { Label } from "./label";

type Props = {
  attention?: string;
  label: string;
  error?: string;
  inputmode?: HTMLAttributes<HTMLInputElement>["inputMode"];
  placeholder?: string
  children?: React.ReactNode;
};

type ChildProps = ComponentPropsWithoutRef<"input"> & Props;

export const Input = forwardRef<HTMLInputElement, ChildProps>(
  (
    {
      attention,
      type = "text",
      label,
      error,
      inputmode = "text",
      children,
      placeholder,
      ...props
    },
    ref,
  ) => {
    return (
      <div className={styles.inputWrapper}>
        <Label name={props.name}>{label}</Label>
        <div className={styles.input}>
          <input id={props.name} inputMode={inputmode} placeholder={placeholder} {...props} ref={ref} />
          {children}
        </div>
        {error && <ErrorMessage error={error} />}
      </div>
    );
  },
);

Input.displayName = "Input";
