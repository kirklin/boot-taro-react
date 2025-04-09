import { Toast } from "@taroify/core";
import { useState } from "react";
import { z } from "zod";

interface ValidationOptions<T> {
  schema: z.ZodType<T>;
  onSuccess?: (data: T) => void;
  onError?: (error: z.ZodError) => void;
}

interface ValidationResult<T> {
  validate: (data: unknown) => Promise<boolean>;
  isValid: boolean;
  errors: z.ZodError | null;
  validData: T | null;
}

/**
 * 表单验证hook
 */
export function useFormValidation<T>({
  schema,
  onSuccess,
  onError,
}: ValidationOptions<T>): ValidationResult<T> {
  const [isValid, setIsValid] = useState(false);
  const [errors, setErrors] = useState<z.ZodError | null>(null);
  const [validData, setValidData] = useState<T | null>(null);

  const validate = async (data: unknown): Promise<boolean> => {
    try {
      const validatedData = await schema.parseAsync(data);
      setIsValid(true);
      setErrors(null);
      setValidData(validatedData);
      onSuccess?.(validatedData);
      return true;
    } catch (error) {
      if (error instanceof z.ZodError) {
        setIsValid(false);
        setErrors(error);
        setValidData(null);
        onError?.(error);

        // 显示第一个错误信息
        const firstError = error.errors[0];
        if (firstError) {
          Toast.open({
            message: firstError.message || "输入格式错误",
            duration: 2000,
          });
        }
      }
      return false;
    }
  };

  return {
    validate,
    isValid,
    errors,
    validData,
  };
}
