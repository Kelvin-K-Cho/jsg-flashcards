class Api::DailiesController < ApplicationController

  def index
    @dailies = Daily.all
  end

  def show
    @daily = Daily.find(params[:id])
  end

end
