class Api::QuestionsController < ApplicationController

  def index
    if params[:topic_id]
      @questions = Question.where('topic_id = ?', params[:topic_id]).order(id: :asc)
    else
      @questions = Question.all
    end
  end

  def show
    @question = Question.find(params[:id])
  end

end
