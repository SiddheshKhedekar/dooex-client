// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { updateKeyword, resetKeyword } from 'reducers/search';

import styles from './SearchBar.scss';

type Props = {
  keyword: string,

  updateKeyword: Function,
  resetKeyword: Function,
};

class SearchBar extends Component<Props> {
  componentWillUnmount() {
    this.props.resetKeyword();
  }

  refInput = null;
  resetKeyword = () => {
    clearTimeout(this.timeoutId);

    this.props.resetKeyword();

    // $FlowFixMe
    this.refInput.focus();
  };

  timeoutId = null;

  updateKeyword = (e) => {
    clearTimeout(this.timeoutId);

    const currKeyword = e.currentTarget.value;
    const prevKeyword = this.props.keyword;

    if (currKeyword === prevKeyword) {
      return;
    }

    if (currKeyword === '') {
      this.props.resetKeyword();
    } else {
      // debounce
      this.timeoutId = setTimeout(() => {
        this.props.updateKeyword(currKeyword);
      }, 600);
    }
  };

  render() {
    return (
      <nav className={styles.root}>
        <Link className={styles.back} to="/">
          <span className="fa fa-fw fa-angle-left" />
        </Link>

        <input
          autoFocus
          ref={input => (this.refInput = input)}
          className="form-control pull-left"
          type="search"
          placeholder="Search"
          onChange={this.updateKeyword}
        />

        <button className={styles.reset} onClick={this.resetKeyword}>
          &times;
        </button>
      </nav>
    );
  }
}

function mapStateToProps(state) {
  return {
    keyword: state.search,
  };
}

const mapDispatchToProps = {
  updateKeyword,
  resetKeyword,
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
