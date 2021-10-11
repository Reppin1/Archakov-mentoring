import React from "react";

function montoToStr(num) {
  return num > 12 || num < 1
    ? null
    : 'январь,февраль,март,апрель,май,июнь,июль,август,сентябрь,октябрь,ноябрь,декабрь'.split(',')[
    num - 1
      ];
}

class ProfileClass extends React.Component {
  getMonth() {
    return montoToStr(this.props.registredAt.getMonth())
  }

  render() {
    return (
      <div>
        <h2>Классовая компонента</h2>
        Привет, <b>{ this.props.name }!</b>
        <div>
          Дата
          регистрации: { this.props.registredAt.getDate() } { this.getMonth() } { this.props.registredAt.getFullYear() }
        </div>
      </div>
    )
  }
}

const ProfileFunc = ({ name, registredAt }) => {

  const year = registredAt.getFullYear()
  const month = montoToStr(registredAt.getMonth())
  const day = registredAt.getDate()

  return (
    <div>
      <h2>Функциональная компонента</h2>
      Привет, <b>{ name }!</b>
      <div>
        Дата регистрации: { day } { month } { year }
      </div>
    </div>
  );
};

export { ProfileFunc, ProfileClass };