import { Kafka } from "kafkajs";
import config from "./config.js";
import messages from "./input.js";

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
