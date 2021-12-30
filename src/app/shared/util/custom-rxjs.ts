import { MonoTypeOperatorFunction } from "rxjs";
import { tap } from "rxjs/operators";

export function tapCatch<T>(func: () => void): MonoTypeOperatorFunction<T> {
    return tap(func, func);
  }