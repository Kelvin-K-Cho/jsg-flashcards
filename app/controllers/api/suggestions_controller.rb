class Api::SuggestionsController < ApplicationController

  def index
    @suggestions = Suggestion.all
  end

  def show
    @suggestion = Suggestion.find(params[:id])
  end

  def create
    @suggestion = Suggestion.new(suggestion_params)
    if @suggestion.save
      render :show
    else
      render json: @suggestion.errors.full_messages, status: 422
    end
  end

  private

  def suggestion_params
    params.require(:suggestion).permit(:comments)
  end

end
