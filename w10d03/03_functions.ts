const sayHello = (firstName: string, age?: number): string => {
  return `hello there ${firstName}`;
};

sayHello('Alice');
sayHello('Alice', 42);

const returningPromise = (): Promise<string> => {
  return new Promise((resolve) => {
    resolve('hello there');
  });
};

returningPromise().then((str) => {});

const acceptsAnyNumber = (...myStrings: (string | number)[]): number => {
  return 100;
};

acceptsAnyNumber('hello', 'world', 42, 22);

const filter = (arr: number[], cb: (num: number) => boolean): number[] => {
  const output: number[] = [];
  for (const num of arr) {
    if (cb(num)) {
      output.push(num);
    }
  }
  return output;
};
