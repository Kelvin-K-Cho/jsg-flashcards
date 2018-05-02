class Api::DaysController < ApplicationController

  def index
    if params[:week_id]
      @days = Day.includes(:dailies, :topics).references(:topics).where('week_id = ?', params[:week_id]).order(id: :asc)
    else
      @days = Day.includes(:dailies, :topics).references(:topics).all
    end
  end

  def show
    @day = Day.find(params[:id])
  end

end
