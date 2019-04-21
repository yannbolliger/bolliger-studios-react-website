import React from "react"

import { sendMail } from "../api"
import useValueErrorState from "../hooks/useValueErrorState"
import { SmallTitle, MediumTitle } from "../styled/typography"
import Form from "../styled/Form"
import Input from "../styled/Input"
import { ButtonInput } from "../styled/Button"

const MailForm = () => {
  const isFormSubmitted = useValueErrorState(false)

  const name = useValueErrorState("")
  const email = useValueErrorState("")
  const message = useValueErrorState("")

  const onSubmit = event => {
    event.preventDefault()
    isFormSubmitted.setValue("Wird geschickt...")
    isFormSubmitted.setError("")

    sendMail({
      name: name.value,
      email: email.value,
      message: message.value
    })
      .then(() => isFormSubmitted.setValue("Die Nachricht wurde geschickt!"))
      .catch(() => isFormSubmitted.setError("Es ist ein Fehler aufgetreten."))
  }

  return isFormSubmitted.value && !isFormSubmitted.hasError ? (
    <MediumTitle>{isFormSubmitted.value}</MediumTitle>
  ) : (
    <div>
      {isFormSubmitted.hasError && (
        <SmallTitle>{isFormSubmitted.error}</SmallTitle>
      )}

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
    </div>
  )
}

export default MailForm
