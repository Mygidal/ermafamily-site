import { systemBase } from "../../data/systemBase";
import { knowledgeFormulas } from "../../data/knowledge.formulas";
import { knowledgeFinishing } from "../../data/knowledge.finishing";
import { knowledgeZUT } from "../../data/knowledge.zut";
import { knowledgeContacts } from "../../data/knowledge.contacts";
import { knowledgePricing } from "../../data/knowledge.pricing";

export function getRelevantKnowledge(question: string): string[] {
  const q = question.toLowerCase();
  const result = [systemBase];

  if (/кофраж|бетон|арматура|смятане|груб|стойност|рзп/.test(q)) {
    result.push(knowledgeFormulas);
  }

  if (/довършителни|шпакловка|изолация|електро|вик|замазка/.test(q)) {
    result.push(knowledgeFinishing);
  }

  if (/акт|зут|разрешение|виза|паспорт/.test(q)) {
    result.push(knowledgeZUT);
  }

  if (/цена|колко|лв|лв\/м²|лв\/кг/.test(q)) {
    result.push(knowledgePricing);
  }

  if (/контакт|телефон|екип|кой|къде/.test(q)) {
    result.push(knowledgeContacts);
  }

  return result;
}
