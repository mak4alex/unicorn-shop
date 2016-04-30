import React, { Component } from 'react';
import activeComponent from 'react-router-active-component';


export default class CategoryNav extends Component {

  componentDidMount() {
    this.props.fetchMenuCategory();
  }

  render() {
    const isFetching = this.props.category.get('isFetching');
    const categories = this.props.category.get('entities');
    const loadingPanel = (<div><h1>loading...</h1></div>);
    const NavLink = activeComponent('li');

    return (
      <div className="panel-group" id="categories">
        {
          categories.map(topCat => {
            return (
              <div key={topCat.id} className="panel panel-default">
                <div className="panel-heading">
                  <h4 className="panel-title">
                    <a data-toggle="collapse" data-parent="#categories" href={`#${topCat.id}`}>              
                      {topCat.title}
                    </a>
                  </h4>
                </div>
                <div id={`${topCat.id}`} className="panel-collapse collapse">
                  <ul className="list-group">
                    {
                      topCat.subcategories.map(subCat => {
                        return (
                          <NavLink key={subCat.id} to={`/category/${subCat.id}`} className="list-group-item">                         
                            {subCat.title}
                          </NavLink>
                        );
                      })
                    }
                  </ul>
                </div>
              </div>
            );
          })
        }
      </div>
    );

  }
}
