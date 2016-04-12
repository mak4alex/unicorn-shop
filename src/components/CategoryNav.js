import React, { Component } from 'react';
import { Link } from 'react-router';


export default class CategoryNav extends Component {

  componentDidMount() {
    this.props.fetchMenuCategory();
  }

  render () {
    const isFetching = this.props.category.get('isFetching');
    const categories = this.props.category.get('entities');

    if (isFetching) {
      return (
        <div>
          <h1>loading</h1>
        </div>
      );
    } else {
      return (
        <div>
          {
            categories.map(topCat => {
              return (
                <ul forHTML= key={topCat.id}>
                  <li>{topCat.title}</li>
                  <li>
                    <ul className="">
                      {
                        topCat.subcategories.map(subCat => {
                          return (
                            <li key={subCat.id}>
                              <Link to={`/category/${subCat.id}`}>
                                {subCat.title}
                              </Link>
                            </li>
                          );
                        })
                      }
                    </ul>
                  </li>
                </ul>
              );
            })
          }
        </div>
      );
    }
  }

}
