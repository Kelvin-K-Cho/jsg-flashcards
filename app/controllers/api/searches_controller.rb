class Api::SearchesController < ApplicationController

  def index
    value = params[:value]
    @subjects = Subject.where('title ILIKE ?', "%#{value}")
  end

end
