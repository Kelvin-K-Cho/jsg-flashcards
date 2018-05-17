class Api::ImagesController < ApplicationController

  def index
    if params[:subject_id]
      @images = Image.includes(:labels, :subjects).where('subjects.id = ?', params[:subject_id]).references(:subjects)
    else
      @images = Image.all
    end
  end

  def show
    @image = Image.find(params[:id])
  end

end
