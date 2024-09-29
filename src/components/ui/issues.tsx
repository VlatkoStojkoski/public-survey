import { issueTopics } from "@/lib/survey.model";
import { ConstructionWorkerIllustration } from "../illustrations/construction-worker-illustration";
import { StreetIllustration } from "../illustrations/street-illustration";
import { StreetLampIllustration } from "../illustrations/street-lamp-illustration";
import { WasteSewerIllustration } from "../illustrations/waste-sewer-illustration";
import { RainIllustration } from "../illustrations/rain-illustration";
import { CleanIllustration } from "../illustrations/clean-illustration";
import { PlaygroundIllustration } from "../illustrations/playground-illustration";
import { EcologyIllustration } from "../illustrations/ecology-illustration";
import { EducationIllustration } from "../illustrations/education-illustration";
import { HelpIllustration } from "../illustrations/help-illustration";
import { GuitarIllustration } from "../illustrations/guitar-illustration";
import { RunningIllustration } from "../illustrations/running-illustration";
import { ArchitectIllustration } from "../illustrations/architect-illustration";

export const issueConfig: {
	id: string;
	label: string;
	icon: React.ComponentType<{ className?: string }>;
}[] = [
		{ ...issueTopics[0], icon: ConstructionWorkerIllustration },
		{ ...issueTopics[1], icon: StreetIllustration },
		{ ...issueTopics[2], icon: StreetLampIllustration },
		{ ...issueTopics[3], icon: WasteSewerIllustration },
		{ ...issueTopics[4], icon: RainIllustration },
		{ ...issueTopics[5], icon: CleanIllustration },
		{ ...issueTopics[6], icon: PlaygroundIllustration },
		{ ...issueTopics[7], icon: EcologyIllustration },
		{ ...issueTopics[8], icon: EducationIllustration },
		{ ...issueTopics[9], icon: HelpIllustration },
		{ ...issueTopics[10], icon: GuitarIllustration },
		{ ...issueTopics[11], icon: RunningIllustration },
		{ ...issueTopics[12], icon: ArchitectIllustration }
	];

export const initialIssueCheckedStatuses = issueConfig.reduce((acc, issue) => ({
	...acc,
	[issue.id]: false,
}), {} as Record<string, boolean>);