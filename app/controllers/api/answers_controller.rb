class Api::AnswersController < ApplicationController

  def index
    if params[:question_id]
      @answers = Answer.where('question_id = ?', params[:question_id]).order(id: :asc)
    else
      @answers = Answer.all
    end
  end

  def show
    @answer = Answer.find(params[:id])
  end

end
