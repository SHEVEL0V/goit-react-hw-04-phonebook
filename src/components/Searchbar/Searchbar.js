import React, { Component } from "react";
import s from "./Searchbar.module.css";

class Input extends Component {
  state = {
    text: "",
  };

  onChenge = (e) => {
    const { value } = e.currentTarget;
    this.setState({ text: value });
  };

  onSubmit = () => {
    this.props.onSubmit(this.state.text);
    this.removeState();
  };

  removeState() {
    this.setState({ text: "" });
  }

  render() {
    const { text } = this.state;
    return (
      <form
        className={s.form}
        onSubmit={(e) => {
          e.preventDefault();
          this.onSubmit();
        }}
      >
        <label>
          <input
            className={s.input}
            type="text"
            name="input"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            required
            onChange={this.onChenge}
            value={text}
          />
        </label>
        <button className={s.button} type="sabmit">
          fech <span className={s.unicode}></span>
        </button>
      </form>
    );
  }
}
export default Input;
