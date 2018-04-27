class Api::LabelsController < ApplicationController

  def index
    @labels = Label.all
  end

  def show
    @label = Label.find(params[:id])
  end

end
