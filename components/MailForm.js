import React from "react"

import { sendMail } from "../api"
import useValueErrorState from "../hooks/useValueErrorState"
import Form from "../styled/Form"
import Input from "../styled/Input"
import { ButtonInput } from "../styled/Button"

const MailForm = () => {
  const name = useValueErrorState("")
  const email = useValueErrorState("")
  const message = useValueErrorState("")

  const onSubmit = event => {
    event.preventDefault()
    sendMail({
      name: name.value,
      email: email.value,
      message: message.value
    })
  }

  return (
    <Form onSubmit={onSubmit}>
      <Input
        name="name"
        type="text"
        value={name.value}
        error={name.error}
        onChange={event => name.setValue(event.target.value)}
        required
      />
      <Input
        name="email"
        type="email"
        value={email.value}
        error={email.error}
        onChange={event => email.setValue(event.target.value)}
        required
      />
      <Input
        name="message"
        label="Nachricht..."
        type="textarea"
        value={message.value}
        error={message.error}
        onChange={event => message.setValue(event.target.value)}
        rows="4"
      />

      <ButtonInput name="submit" type="submit" value="Nachricht schicken" />
    </Form>
  )
}

export default MailForm
