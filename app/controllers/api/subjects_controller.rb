class Api::SubjectsController < ApplicationController

  def index
    @subjects = Subject.includes(:labels, :images).references(:images).all
  end

  def show
    @subject = Subject.find(params[:id])
  end

end
