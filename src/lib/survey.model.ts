import { z } from "zod";

export const issueTopics = [
	{ id: '1', label: 'Изградба на училишта и градинки' },
	{ id: '2', label: 'Реконструкција на улици' },
	{ id: '3', label: 'Улично осветлување' },
	{ id: '4', label: 'Фекална канализација' },
	{ id: '5', label: 'Атмосферска канализација' },
	{ id: '6', label: 'Подигнување на хигиена' },
	{ id: '7', label: 'Изградба на паркови и детски игралишта' },
	{ id: '8', label: 'Заштита на животната средина' },
	{ id: '9', label: 'Подобрување на квалитет на образование и детска заштита (градинки)' },
	{ id: '10', label: 'Социјална заштита на граѓаните' },
	{ id: '11', label: 'Културни настани' },
	{ id: '12', label: 'Спорт и рекреација' },
	{ id: '13', label: 'Донесување на детални урбанистички планови' },
] as const;

const issueTopicsChecked = z.object(
	issueTopics.reduce((acc, topic) => ({
		...acc,
		[topic.id]: z.boolean().nullable().optional(),
	}), {}) as Record<typeof issueTopics[number]['id'], z.ZodBoolean>
);

export const supplementalIssueQuestions = [
	{ id: '1', label: "Предложете активности што треба да се вклучат во Програмата за спорт и рекреација на Општина Ѓорче Петров" },
	{ id: '2', label: "Каква активност би предложиле за подобрување на работата на училиштата и на градинките во Општина Ѓорче Петров?" },
	{ id: '3', label: "Дали и како може да се подобри квалитетот на животот на младите во Општина Ѓорче Петров?" },
	{ id: '4', label: "Ваш предлог за соработка меѓу Општината и бизнис-заедницата" },
	{ id: '5', label: "Која локација би ја предложиле за парк или за детско игралиште во Вашето маало?" },
	{ id: '6', label: "За која улица од Вашето маало би предложиле реконструкција?" },
	{ id: '7', label: "Наведете Ваше мислење како Општина Ѓорче Петров да ја подобри својата работа во 2024 година" },
	{ id: '8', label: "Предложете проект кој е потребен во Ѓорче Петров" },
] as const;

const supplementalIssueQuestionsAnswers = z.object(
	supplementalIssueQuestions.reduce((acc, question) => ({
		...acc,
		[question.id]: z.string().nullable().optional(),
	}), {}) as Record<typeof supplementalIssueQuestions[number]['id'], z.ZodString>
);

export const surveySchema = z.object({
	email: z.string().email(),
	gender: z.enum(['male', 'female']),
	age: z.number().int().min(0).max(120),
	importantTopics: issueTopicsChecked,
	supplementalAnswers: supplementalIssueQuestionsAnswers,
	reviewRating: z.number().int().min(1).max(5),
	reviewComment: z.string().min(1),
});