import { useState, useEffect } from "react"
import DirectusSDK from "@directus/sdk-js"

const client = new DirectusSDK({
  url: "https://api.bolligerstudios.ch",
  project: "_"
})

export const useApiData = ({ collection, fields }) => {
  const [data, setData] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      const result = await client.getItems(collection, { fields })
      setData(result.data)
    }
    fetchData()
  }, [])

  return data
}

export const sendMail = ({ name, email, message }) =>
  client.createItem("contact_forms", { name, email, message })
