import config from "./config.js";
import { Kafka } from "kafkajs";

const kafka = new Kafka({
  clientId: config.kafka.CLIENTID,
  brokers: config.kafka.BROKERS,
});

const topic = config.kafka.TOPIC;
const consumer = kafka.consumer({
  groupId: config.kafka.GROUPID,
});

const main = async () => {
  await consumer.connect();

  await consumer.subscribe({
    topic: config.kafka.TOPIC,
    fromBeginning: true,
  });

  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      console.log("Received message", {
        topic,
        partition,
        key: message.key.toString(),
        value: message.value.toString(),
      });
    },
  });
};

main().catch(async (error) => {
  console.error(error);
  try {
    await consumer.disconnect();
  } catch (e) {
    console.error("Failed to gracefully disconnect consumer", e);
  }
  process.exit(1);
});
