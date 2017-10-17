// @flow

type Action = { type: string };
type GetState = () => Object;
type ThunkAction = (dispatch: Dispatch, getState: GetState) => any;
type Dispatch = (action: Action | ThunkAction) => any;
type Thunk<A> = ((Dispatch, GetState) => Promise<void> | void) => A;

type Doodle = {
  _id: string,
  aspect: number,
  countries: Array<string>,
  date: Date,
  hiresUrl: string,
  name: string,
  standaloneHtml: string,
  tags: Array<string>,
  title: string,
  type: string,
  url: string,
};

type Meta = {
  countries: Array<string>,
  linkTypes: Array<string>,
  schema: Array<$Keys<Doodle>>,
  tags: Array<string>,
  urlPrefixes: Object,
};

export type { Dispatch, Doodle, Meta };
