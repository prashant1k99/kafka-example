# Kafka Example

This repository is the Example Project of Kafka implementation in NodeJs.


### Dependencies:

This project works on following `npm` packages:
* [`kafkajs`](https://www.npmjs.com/package/kafkajs) : For connecting to and using Kafka
* [`avsc`](https://www.npmjs.com/package/avsc) : For fast and compact JSON data seriolization
* [`@faker-js/faker`](https://www.npmjs.com/package/@faker-js/faker) : For generating random data

Additionally
* [`Kafka`](https://kafka.apache.org/) : You can download `Kafka` by visiting [`this Url`](https://kafka.apache.org/downloads) or via using `Docker`

*For this example I am using `Docker` for running `Kafka` locally, you can do so by simply installing docker in your local by switching into the code directory and run the cmd*
 ```sh
docker-compose up -d
```

*If all this setup is confusing, you can simply use Kafka as a Service provider such as [`Confluent Cloud`](https://www.confluent.io/)*

### Run On Local:
1. Please star and fork the repo

![](https://raw.githubusercontent.com/prashant1k99/JWT-example/main/asset/fork.png)

2. Then clone the repo in the local environment using the following command in the Terminal:
```sh
git clone https://github.com/prashant1k99/kafka-example.git
```

3. Install the dependencies with the following command:
```sh
npm install
```

4. Create Kafka topics by running:
```
npm run start:admin
```

5. Start Kafka Topic consumer by running:
```
npm run start:consumer
```

6. Trigger Kafka by executing producer by running:
```
npm run start:producer
```



### File Structure:
* [util.js](https://github.com/prashant1k99/kafka-example/blob/main/util.js) : This file contains the function to generate random user information.
* [kafka.js](https://github.com/prashant1k99/kafka-example/tree/main/kafka.js) : This file contains code for setting up connection with `Kafka` service.
* [docker-compose.yml](https://github.com/prashant1k99/kafka-example/blob/main/docker-compose.yml) : This is the `yml` configuration file to start `Kafka` using `Docker`
* [admin.js](https://github.com/prashant1k99/kafka-example/blob/main/admin.js) : This file contians logic for creating Kafka topics.
* [schema](https://github.com/prashant1k99/kafka-example/tree/main/schema)
  - [`user.schema.js`](https://github.com/prashant1k99/kafka-example/blob/main/schema/user.schema.js) : This contains schema for User Type which is passed as Data. This code is responsible for Encoding and Decoding UserData for sending and receiving data via Kafka. Kafka by default only supports Buffer and string data.
* [producer](https://github.com/prashant1k99/kafka-example/tree/main/producer)
  - [`index.js`](https://github.com/prashant1k99/kafka-example/blob/main/producer/index.js) : This file contians the code for producing data to Kafka. After connecting to `Kafka`, it uses `producer.send()` for sending data.
* [consumer](https://github.com/prashant1k99/kafka-example/tree/main/cosnumer)
  - [`index.js`](https://github.com/prashant1k99/kafka-example/blob/main/consumer/index.js) : In this file the code is for subscribing to the topic using `consumer.subscribe()` then you'll be able to get all the events triggered by the producer for subscribed topic.


### More Details...
For more detail please read the documentation of Kafka