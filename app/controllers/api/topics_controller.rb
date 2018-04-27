class Api::TopicsController < ApplicationController

  def index
    if params[:subject_id]
      @topics = Topic.where('subject_id = ?', params[:subject_id]).order(id: :asc)
    else
      @topics = Topic.all
    end
  end

  def show
    @topic = Topic.find(params[:id])
  end

end
