import * as store from './store';
import React from 'react';

var rootRef = null;

export function setRoot(ref) {
    rootRef = ref;
}

export function getRoot() {
    return rootRef;
}

export const connect = (Component) =>
  class AttachStore extends React.Component {
    render() {
      return (
        React.createElement(
            Component,
            {...this.props , root: rootRef},
            null
          )
      )
    }
  };

export default store;


