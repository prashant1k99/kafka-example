import Kafka from '../kafka.js'
import UserType from "../schema/user.schema.js"
import { generateRandomUser } from '../util.js'

async function run() {
  try {
    const producer = Kafka.producer()

    console.log('Connecting to Kafka...')
    await producer.connect()
    console.log('Connection successful to Kafka')

    const userInfo = generateRandomUser(),
      partition = parseInt(Math.random() * 10) % 2 === 0 ? 0 : 1

    const data = await producer.send({
      "topic": "Users",
      messages: [{
        value: UserType.toBuffer(userInfo),
        partition: partition
      }]
    })
    console.log(`Successfully sent data: ${JSON.stringify(data)}`)

    await producer.disconnect()
  } catch (err) {
    console.error(`Something went wrong ${err}`)
  } finally {
    process.exit(0)
  }
}

run()