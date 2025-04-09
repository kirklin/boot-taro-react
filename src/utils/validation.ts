import type { z } from "zod";

/**
 * 验证数据并返回类型化的结果
 */
export async function validateData<T>(
  schema: z.ZodType<T>,
  data: unknown,
  errorMessage = "数据验证失败",
): Promise<T> {
  try {
    return await schema.parseAsync(data);
  } catch (error) {
    console.error("Data validation error:", error);
    throw new Error(errorMessage);
  }
}

/**
 * 安全地验证数据,失败时返回null
 */
export async function validateDataSafe<T>(
  schema: z.ZodType<T>,
  data: unknown,
): Promise<T | null> {
  try {
    return await schema.parseAsync(data);
  } catch (error) {
    console.error("Data validation error:", error);
    return null;
  }
}

/**
 * 验证数组数据
 */
export async function validateArray<T>(
  schema: z.ZodType<T>,
  data: unknown[],
  errorMessage = "数组数据验证失败",
): Promise<T[]> {
  try {
    return await Promise.all(
      data.map(item => schema.parseAsync(item)),
    );
  } catch (error) {
    console.error("Array validation error:", error);
    throw new Error(errorMessage);
  }
}

/**
 * 验证缓存数据
 */
export async function validateCache<T>(
  schema: z.ZodType<T>,
  key: string,
  data: unknown,
): Promise<T> {
  try {
    return await schema.parseAsync(data);
  } catch (error) {
    console.error(`Cache validation error for key "${key}":`, error);
    throw new Error(`缓存数据"${key}"格式错误`);
  }
}

/**
 * 验证并转换数据
 */
export async function transformData<T, U>(
  schema: z.ZodType<T>,
  data: unknown,
  transform: (validData: T) => U,
  errorMessage = "数据转换失败",
): Promise<U> {
  try {
    const validData = await schema.parseAsync(data);
    return transform(validData);
  } catch (error) {
    console.error("Data transformation error:", error);
    throw new Error(errorMessage);
  }
}
