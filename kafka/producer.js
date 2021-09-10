import { Kafka } from "kafkajs";
import config from "./config.js";
import messages from "./input.js";

const producer = new Kafka({
	brokers: config.kafka.BROKERS,
	clientId: config.kafka.CLIENTID,
}).producer();

const sendMessage = async (producer, topic) => {
	await producer.connect();

	setInterval(() => {
		let i = Math.floor(Math.random() * 4);
		let value = JSON.stringify(messages[i]);
		let payloads = {
			topic: topic,
			messages: [{ key: "coronavirus-alert", value: value }],
		};
		console.log("payloads=", payloads);
		producer.send(payloads);
	}, 5000);
};

sendMessage(producer, config.kafka.TOPIC);
