class Api::SubjectsController < ApplicationController

  def index
    if params[:topic_id]
      @subjects = Subject.where('topic_id = ?', params[:topic_id]).order(id: :asc)
    else
      @subjects = Subject.all
    end
  end

  def show
    @subject = Subject.find(params[:id])
  end

end
