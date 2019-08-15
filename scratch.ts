/**
 * Expressive Error Handling Typescript
 */

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

type GenericError = { message: string };
const negativeError: () => GenericError = () => ({
  message: 'All numbers should be strictly positive',
});

type Response = Either<GenericError, number>;

const sumCount = (...counts: number[]): Response => {
  if (counts.some(x => x < 0)) {
    return left(negativeError());
  }
  const sum = counts.reduce((prev, curr) => curr + prev, 0);
  return right(sum);
};

const computeSomething = (data: number) => {
  return data * 2;
};

/*** EXAMPLE *****/
(() => {
  const doApplySum = () => {
    const data = sumCount(1, 2, 3).applyOnRight(computeSomething);
    if (data.isLeft()) {
      const { message } = data.value;
      message;
    }
    return data.applyOnRight(computeSomething);
  };
  const data = doApplySum();
  data;
})();
