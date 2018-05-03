class Api::DaysController < ApplicationController

  def index
    if params[:week_id]
      @days = Day.where('week_id = ?', params[:week_id]).order(id: :asc)
    else
      @days = Day.all
    end
  end

  def show
    @day = Day.find(params[:id])
  end

end
