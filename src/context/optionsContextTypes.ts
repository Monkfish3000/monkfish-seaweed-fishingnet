export enum SeaItemOption {
  monkfish = 'monkfish',
  seaweed = 'seaweed',
  fishingnet = 'fishingnet',
}

export interface IOptions {
  name: SeaItemOption;
  icon: JSX.Element;
}

export interface IoptionsContext {
  options: IOptions[];
}
