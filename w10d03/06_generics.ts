interface IContainer<T, OtherType> {
  name: string;
  contents: T;
  moreStuff?: OtherType;
  pets?: IDog[];
}

const numContainer: IContainer<number, number> = {
  name: 'number container',
  contents: 500,
  moreStuff: 400
};

const strContainer: IContainer<string, IDog> = {
  name: 'string container',
  contents: 'hello there'
};
