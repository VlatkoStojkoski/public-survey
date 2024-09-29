import { z } from "zod";
import { issueTopics, surveySchema } from "./survey.model";

const FORM_ID = "1FAIpQLSefranmTVwHviLJ4mnj8wGTGDZplgnq1dMwEs_AL8CR0Ezfpg"

const supplementalQuestionsMap = {
	"1": "entry.378606498",
	"2": "entry.513729978",
	"3": "entry.819435716",
	"4": "entry.546256957",
	"5": "entry.68849895",
	"6": "entry.144936195",
	"7": "entry.265172707",
	"8": "entry.273443970",
};

export function sendFormResponse(data: z.infer<typeof surveySchema>) {
	const reqUrl = new URL(`https://docs.google.com/forms/d/e/${FORM_ID}/formResponse`);

	reqUrl.searchParams.append("submit", "Submit");

	reqUrl.searchParams.append("entry.1307099303", data.fullName);
	reqUrl.searchParams.append("entry.1454998854", data.email);

	const formattedGender = data.gender === 'male' ? 'Машки' : 'Женски';
	reqUrl.searchParams.append("entry.1642005127", formattedGender);

	reqUrl.searchParams.append("entry.660343274", data.age.toString());

	const selectedTopics = Object.entries(data.importantTopics)
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		.filter(([_, value]) => value === true)
		.map(([key]) => issueTopics.find(topic => topic.id === key)?.label);
	for (const topic of selectedTopics) {
		if (!topic) continue;
		reqUrl.searchParams.append("entry.984299131", topic);
	}

	reqUrl.searchParams.append("entry.944548777", data.reviewRating.toString());
	reqUrl.searchParams.append("entry.1865202143", data.reviewComment);

	for (const [key, value] of Object.entries(data.supplementalAnswers)) {
		const questionId = supplementalQuestionsMap[key as keyof typeof supplementalQuestionsMap];

		if (!questionId || !value) continue;

		reqUrl.searchParams.append(questionId, value);
	}

	console.log(reqUrl.href);

	return fetch(reqUrl.href);
}