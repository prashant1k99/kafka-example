import Kafka from '../kafka.js'
import UserType from "../schema/user.schema.js"

const run = async () => {
  try {
    const consumer = Kafka.consumer({
      "groupId": "user-consumer"
    })

    console.log("Connecting.....")
    await consumer.connect()
    console.log("Connected!")

    await consumer.subscribe({
      "topic": "Users",
      "fromBeginning": true
    })

    await consumer.run({
      "eachMessage": async result => {
        console.log(`User created: ${JSON.stringify(UserType.fromBuffer(result.message.value))}`)
      }
    })
  } catch (err) {
    console.error(`Something went wrong ${err}`)
  }
}

run()