class Api::AnswersController < ApplicationController

  def index
    if params[:subject_id]
      @answers = Answer.includes(:question, :subject).where('subjects.id = ?', params[:subject_id]).references(:subjects)
    elsif params[:question_id]
      @answers = Answer.where('question_id = ?', params[:question_id]).order(id: :asc)
    else
      @answers = Answer.all
    end
  end

  def show
    @answer = Answer.find(params[:id])
  end

end
