class Api::QuestionsController < ApplicationController

  def index
    if params[:subject_id]
      @questions = Question.where('subject_id = ?', params[:subject_id]).order(id: :asc)
    else
      @questions = Question.all
    end
  end

  def show
    @question = Question.find(params[:id])
  end

end
