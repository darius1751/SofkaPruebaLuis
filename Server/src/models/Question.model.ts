import CategoryModel from "./Category.model";
import AnswerModel from "./Answer.model";
export default interface QuestionModel{
    id:Number;
    question:String;
    category:CategoryModel;
    answers:AnswerModel[];
}