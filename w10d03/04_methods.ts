interface IButterfly {
  breed: string;
  colours: string[];
  fly: (distance: number) => IButterfly;
}

const myButterfly: IButterfly = {
  breed: 'monarch',
  colours: ['yellow', 'orange'],
  fly: function (distance: number) {
    return this;
  }
};
