import { useState } from "react";

function ContactForm() {
  const [name, setName] = useState({ value: "", touched: false });
  const [email, setEmail] = useState({ value: "", touched: false });
  const [message, setMessage] = useState({ value: "", touched: false });

  const isFormValid =
    name.value === "" && email.value === "" && message.value === "";

  function handleSubmit(e) {
    e.preventDefault();
    alert(`For Obvious Reasons I did not connect an email API yet`);
    setName("");
    setEmail("");
    setMessage("");
  }

  return (
    <form className="contact__form" onSubmit={handleSubmit}>
      <div className="input__container">
        <label htmlFor="Name" className="input__label">
          Name <strong>*</strong>
        </label>
        <input
          id="Name"
          type="text"
          value={name.value}
          onChange={(e) => setName({ ...name, value: e.target.value })}
          onBlur={() => setName({ ...name, touched: true })}
          required
          className="input"
        />
        {name.touched && name.value === "" && (
          <p className="FieldError">Please enter a valid name</p>
        )}
      </div>
      <div className="input__container">
        <label htmlFor="Email" className="input__label">
          Email <strong>*</strong>
        </label>
        <input
          id="Email"
          type="email"
          value={email.value}
          onChange={(e) => setEmail({ ...email, value: e.target.value })}
          onBlur={() => setEmail({ ...email, touched: true })}
          required
          className="input"
        />
        {email.touched && email.value === "" && (
          <p className="FieldError">Please enter a valid email</p>
        )}
      </div>
      <div className="input__container">
        <label htmlFor="Message" className="input__label">
          Message
        </label>
        <textarea
          id="Message"
          type="text"
          rows="3"
          value={message.value}
          onChange={(e) => setMessage({ ...message, value: e.target.value })}
          onBlur={() => setMessage({ ...message, touched: true })}
          className="input"
        />
        {message.touched && message.value === "" && (
          <p className="FieldError">Please enter a valid message</p>
        )}
      </div>
      <div className="btn__container">
        <button type="submit" className="btn" disabled={isFormValid}>
          <span className="p">Contact</span>
        </button>
      </div>
    </form>
  );
}

export default ContactForm;
