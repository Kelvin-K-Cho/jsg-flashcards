class Api::SearchesController < ApplicationController

  def index
    value = params[:value]
    if value
      @topics = Topic.where("title ILIKE ?", "#{value}%")
    else
      @topics = {}
    end
  end

end
