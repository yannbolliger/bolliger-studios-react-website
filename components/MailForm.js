import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import { sendMail } from "../api"
import Form from "../styled/Form"
import Input, { useInputState } from "../styled/Input"

const MailForm = () => {
  const [name, setName] = useInputState("")
  const [email, setEmail] = useInputState("")
  const [message, setMessage] = useInputState("")

  const onSubmit = event => {
    event.preventDefault()

    sendMail({ name: name.value, email: email.value, message: message.value })
  }

  return (
    <Form onSubmit={onSubmit}>
      <Input
        name="name"
        type="text"
        inputState={name}
        onChangeInputState={setName}
        required
      />
      <Input
        name="email"
        type="email"
        inputState={email}
        onChangeInputState={setEmail}
        required
      />
      <Input
        name="message"
        label="Nachricht..."
        type="textarea"
        inputState={message}
        onChangeInputState={setMessage}
        width="100%"
      />

      <input name="submit" type="submit" value="Abschicken" />
    </Form>
  )
}

export default MailForm
