import getQuestionnaire from "questionnaire/actions/getQuestionnaire";
import Questionnaire from "questionnaire/components/Questionnaire";

export default async function Home() {
  const questionnaire = await getQuestionnaire();

  return <Questionnaire questionnaire={questionnaire} />;
}
