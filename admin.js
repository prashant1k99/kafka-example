import Kafka from './kafka.js'

const run = async () => {
  try {
    const admin = Kafka.admin()

    console.log("Connecting.....")
    await admin.connect()
    console.log("Connected!")

    await admin.createTopics({
      "topics": [{
          "topic" : "Users"
      }]
    })
    console.log("Created Successfully!")

    await admin.disconnect();

  } catch (err) {
    console.error(`Something went wrong ${err}`)
  } finally {
    process.exit(0)
  }
}

run()