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
	{ id: '7', label: "Наведете Ваше мислење како Општина Ѓорче Петров да ја подобри својата работа во 2025 година" },
	{ id: '8', label: "Предложете проект кој е потребен во Ѓорче Петров" },
] as const;

const supplementalIssueQuestionsAnswers = z.object(
	supplementalIssueQuestions.reduce((acc, question) => ({
		...acc,
		[question.id]: z.string().nullable().optional(),
	}), {}) as Record<typeof supplementalIssueQuestions[number]['id'], z.ZodString>
);

export const surveySchema = z.object({
	fullName: z.string({
		invalid_type_error: 'Полето за име и презиме мора да содржи текст',
		required_error: 'Полето за име и презиме е задолжително',
	}).min(1, {
		message: 'Полето за име и презиме е задолжително',
	}),
	email: z.string({
		invalid_type_error: 'Внесете валидна е-пошта',
		required_error: 'Полето за е-пошта е задолжително',
	}).email({
		message: 'Внесете валидна е-пошта',
	}),
	gender: z.enum(['male', 'female']),
	age: z.number({
		invalid_type_error: 'Возраста мора да биде цел број',
		required_error: 'Полето за возраст е задолжително',
	}).int().min(0, {
		message: 'Возраста мора да биде цел број поголем од 0',
	}).max(120, {
		message: 'Возраста мора да биде цел број помал од 120',
	}),
	importantTopics: issueTopicsChecked,
	supplementalAnswers: supplementalIssueQuestionsAnswers,
	reviewRating: z.number({
		invalid_type_error: 'Оцената мора да има од 1 до 5 звезди',
		required_error: 'Полето за оценка е задолжително',
	}).int().min(1, {
		message: 'Оценката мора да содржи најмалку една звезда',
	}).max(5, {
		message: 'Оценката мора да содржи најмногу пет звезди',
	}),
	reviewComment: z.string({
		invalid_type_error: 'Коментарот мора да содржи текст',
		required_error: 'Полето за коментар е задолжително',
	}).min(1, {
		message: 'Полето за коментар е задолжително',
	}),
});