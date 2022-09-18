import avro from 'avsc';

export default avro.Type.forSchema({
  type: "record",
  name: "User",
  fields: [
    {
      name: "id",
      type: "string"
    },
    {
      name: "fullName",
      type: "string"
    },
    {
      name: "email",
      type: "string"
    },
    {
      name: "phone",
      type: "string"
    }
  ]
})