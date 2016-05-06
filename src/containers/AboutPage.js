import React, { Component } from 'react';


export default class AboutPage extends Component {
  render() {
    return (
      <div>
        <div className="page-header">
              </div>
        <div className="jumbotron">
          <h1>Мы рады приветствовать вас в нашем интернет-магазине Unicorn!</h1>
          <p>В нашем магазине доступен ассортимент новейших товаров по доступным ценам</p>
          <p><a className="btn btn-primary btn-lg" href="#" role="button">Более подробно</a></p>
        </div>
       <div class="row">
  <div className="col-sm-6 col-md-4">
    <div className="thumbnail">
      <img src="http://exzk.ru/exzk.ru/pics/e3851ECMRNQ.jpg" alt="..."></img>
      <div className="caption">
        <h3>Электроника и аксессуары</h3>
        <p></p>
        <p><a href="#" className="btn btn-primary" role="button">Просмотреть</a> </p>
      </div>
    </div>
  </div>
</div>
 <div class="row">
  <div className="col-sm-6 col-md-4">
    <div className="thumbnail">
      <img src="http://te-ex.ru/upload/medialibrary/537/Operator-koll-centra-ap1.jpg" alt="..."></img>
      <div className="caption">
        <h3>Всегда на связи с клиентом</h3>
        <p></p>
        <p><a href="#" className="btn btn-primary" role="button">Контакты</a> </p>
      </div>
    </div>
  </div>
</div>
 <div class="row">
  <div className="col-sm-6 col-md-4">
    <div className="thumbnail">
      <img src="http://www.bodyincredible.com/wp-content/uploads/2009/01/hand-holding-stopwatch-300x229.jpg" alt="..."></img>
      <div className="caption">
        <h3>Доставка в срок</h3>
        <p></p>
        <p><a href="#" className="btn btn-primary" role="button">Button</a> <a href="#" className="btn btn-default" role="button">Button</a></p>
      </div>
    </div>
  </div>
</div>

      </div>
    );
  }
}
