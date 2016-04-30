import React, { Component } from 'react';
import classNames from 'classnames';


export default class Pagination extends Component {

  render() {
    const pagination = this.props.meta.get('pagination');
    const totalPages = pagination ? pagination.total_pages : 0;
    const currentPage = pagination ? pagination.page : 0;

    return (
      <div className="text-center">
        <ul className="pagination pagination-lg">
          {
            [...Array(totalPages)].map((x, i) =>
              <li key={i + 1} className={classNames({ active: currentPage === (i + 1) })}>
                <a href="#" onClick={e => {
                   e.preventDefault();
                   this.props.handler(i + 1);
                }}
                >{i + 1}</a>
              </li>
            )
          }
        </ul>
      </div>
    );
  }
}
