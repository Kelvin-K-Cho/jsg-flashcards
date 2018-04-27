class Api::ImagesController < ApplicationController

  def index
    if params[:topic_id]
      @images = Image.includes(:tag, :topic).where('topics.id = ?', params[:topic_id]).references(:topics)
    else
      @images = Image.all
    end
  end

  def show
    @image = Image.find(params[:id])
  end

end
