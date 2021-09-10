import { Kafka } from "kafkajs";
import config from "./config.js";
const messages = [
  {
    eventId: "001",
    firstName: "Zac",
    lastName: "Ryan",
    age: 34,
    Gender: "M",
    bodyTemperature: 36.9,
    overseasTravelHistory: true,
    eventTimestamp: "2020-03-02 02:09:00",
  },
  {
    eventId: "002",
    firstName: "Jade",
    lastName: "Green",
    age: 23,
    Gender: "M",
    bodyTemperature: 36.8,
    overseasTravelHistory: false,
    eventTimestamp: "2020-03-02 03:09:11",
  },
  {
    eventId: "003",
    firstName: "Claudia",
    lastName: "Wright",
    age: 18,
    Gender: "F",
    bodyTemperature: 36.8,
    overseasTravelHistory: true,
    eventTimestamp: "2020-03-04 02:09:00",
  },
  {
    eventId: "004",
    firstName: "Mia",
    lastName: "Schmidt",
    age: 70,
    Gender: "F",
    bodyTemperature: 37.2,
    overseasTravelHistory: false,
    eventTimestamp: "2020-03-06 01:09:00",
  },
];

const client = new Kafka({
  brokers: config.kafka.BROKERS,
  clientId: config.kafka.CLIENTID,
});

const topic = config.kafka.TOPIC;

const producer = client.producer();

let i = 0;

const sendMessage = async (producer, topic) => {
  await producer.connect();

  setInterval(function () {
    i = i >= messages.length - 1 ? 0 : i + 1;
    let payloads = {
      topic: topic,
      messages: [
        { key: "coronavirus-alert", value: JSON.stringify(messages[i]) },
      ],
    };
    console.log("payloads=", payloads);
    producer.send(payloads);
  }, 5000);
};

sendMessage(producer, topic);
