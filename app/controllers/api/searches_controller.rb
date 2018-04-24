class Api::SearchesController < ApplicationController

  def index
    value = params[:value]
    if value
      @subjects = Subject.where('title ILIKE ?', "%#{value}")
    else
      @subjects = {}
    end
  end

end
