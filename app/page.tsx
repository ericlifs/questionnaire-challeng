import getQuestionnaire from "questionnaire/actions/getQuestionnaire";
import Questionnaire from "questionnaire/components/Questionnaire";

export default async function Home() {
  const questionnaire = await getQuestionnaire();

  return (
    <main className="flex items-start justify-center min-h-screen flex-col p-24">
      <Questionnaire questionnaire={questionnaire} />
    </main>
  );
}
