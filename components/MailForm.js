import React from "react"

import { sendMail } from "../api"
import Form from "../styled/Form"
import Input, { useInputState } from "../styled/Input"
import { ButtonInput } from "../styled/Button"

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
        rows="4"
      />

      <ButtonInput name="submit" type="submit" value="Nachricht schicken" />
    </Form>
  )
}

export default MailForm
