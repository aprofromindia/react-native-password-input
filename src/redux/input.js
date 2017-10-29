// @flow - using the ducks pattern.

type Input = {};
type Action = { type: string, payload: any };

// reducers
export default function inpput(state: Input, action: Action): Input {
  switch (action.type) {
    default:
      return state;
  }
}

// Action creators
