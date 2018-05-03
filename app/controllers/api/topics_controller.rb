class Api::TopicsController < ApplicationController

  def index
    if params[:subject_id]
      @topics = Topic.where('subject_id = ?', params[:subject_id]).order(id: :asc)
    elsif params[:week_id]
      @topics = Topic.includes(:dailies, :days, :weeks).where('weeks.id = ?', params[:week_id]).references(:weeks)
    else
      @topics = Topic.all
    end
  end

  def show
    @topic = Topic.find(params[:id])
  end

end
