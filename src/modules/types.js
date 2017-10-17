// @flow

type Action = { type: string };
type GetState = () => Object;
type ThunkAction = (dispatch: Dispatch, getState: GetState) => any;
type Dispatch = (action: Action | ThunkAction) => any;

type Doodle = {
  id: string,
  aspect: number,
  countries: Array<string>,
  date: Date,
  hires_url: string,
  name: string,
  standalone_html: string,
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