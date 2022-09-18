import Kafka from './kafka.js'

const run = async () => {
  try {
    const admin = Kafka.admin()

    console.log("Connecting.....")
    await admin.connect()
    console.log("Connected!")

    const topics = await admin.listTopics()
    
    if (!topics.includes('Users')) {
      const topic = await admin.createTopics({
        "topics": [{
          topic : "Users",
          numPartitions: 2
        }]
      })
      console.log("Created Successfully", JSON.stringify(topic))
    } else console.log("Topics already exist", topics)

    await admin.disconnect();
  } catch (err) {
    console.error(`Something went wrong ${err}`)
  } finally {
    process.exit(0)
  }
}

run()