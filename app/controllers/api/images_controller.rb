class Api::ImagesController < ApplicationController

  def index
    if params[:topic_id]
      @images = Image.includes(:tags, :topic).where('topics.id = ?', params[:topic_id]).references(:topics)
    elsif params[:subject_id]
      @images = Image.includes(:labels, :subject).where('subjects.id = ?', params[:subject_id]).references(:subjects)
    else
      @images = Image.all
    end
  end

  def show
    @image = Image.find(params[:id])
  end

end
