/**
 * Expressive Error Handling Typescript
 */

class Result<T> {
  public isSuccess: boolean;
  public isFailure: boolean;
  public error: T | string;
  public _value: T;

  public constructor(isSuccess: boolean, error?: T | string, value?: T) {
    if (isSuccess && error) {
      throw new Error(
        'InvalidOperation: A result cannot be successful and contain an error',
      );
    }

    if (!isSuccess && !error) {
      throw new Error(
        'InvalidOperation: A failing result needs to contain an error message',
      );
    }

    this.isSuccess = isSuccess;
    this.isFailure = !isSuccess;
    this.error = error;
    this._value = value;

    Object.freeze(this);
  }

  public getValue(): T {
    if (!this.isSuccess) {
      return this.error as T;
    }

    return this._value;
  }

  public static ok<U>(value?: U): Result<U> {
    return new Result<U>(true, null, value);
  }

  public static fail<U>(error: any): Result<U> {
    return new Result<U>(false, error);
  }
}

type Either<L, A> = Left<L, A> | Right<L, A>;

class Left<L, A> {
  readonly value: L;

  constructor(value: L) {
    this.value = value;
  }

  applyOnRight<B>(_: (a: A) => B): Either<L, B> {
    return this as any;
  }

  isLeft(): this is Left<L, A> {
    return true;
  }

  isRight(): this is Right<L, A> {
    return false;
  }
}

class Right<L, A> {
  readonly value: A;

  constructor(value: A) {
    this.value = value;
  }

  applyOnRight<B>(func: (a: A) => B): Either<L, B> {
    return new Right(func(this.value));
  }

  isLeft(): this is Left<L, A> {
    return false;
  }

  isRight(): this is Right<L, A> {
    return true;
  }
}

export const left = <L, A>(l: L): Either<L, A> => {
  return new Left(l);
};

export const right = <L, A>(a: A): Either<L, A> => {
  return new Right<L, A>(a);
};

const negativeError = () => ({
  message: 'All numbers should be strictly positive',
});

type GenericError = { message: string };

const sumCount = (...counts: number[]): Either<GenericError, number> => {
  if (counts.some(x => x < 0)) {
    return left(negativeError());
  }
  return right(counts.reduce((prev, curr) => curr + prev, 0));
};

const computeSomething = (data: number) => {
  return data * 2;
};

/*** EXAMPLE *****/
(() => {
  const data = sumCount(1, 2, 3).applyOnRight(computeSomething);
  if (data.isLeft()) {
    const { message } = data.value;
    message;
  }
  data.isRight(); /* ? */
  data;
})();
